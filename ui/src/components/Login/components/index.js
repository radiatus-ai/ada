import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  const [geometry] = useState(() => {
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    return new THREE.BufferGeometry().setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
  });

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#ffffff" size={1} sizeAttenuation={false} />
    </points>
  );
}

function Bird({ speed }) {
  const mesh = useRef();

  const geometry = useMemo(() => {
    const shape = new THREE.BufferGeometry();
    const vertices = new Float32Array([0, 0, 0, -10, 0, -4, 10, 0, -4]);
    shape.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return shape;
  }, []);

  useFrame((state, delta) => {
    mesh.current.position.x += speed * delta;
    if (mesh.current.position.x > 1000) {
      mesh.current.position.x = -1000;
    }
    mesh.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.5;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh
      ref={mesh}
      position={[
        Math.random() * 2000 - 1000,
        Math.random() * 200 + 300,
        Math.random() * 300 - 150,
      ]}
    >
      <primitive object={geometry} />
      <lineBasicMaterial color="#ffffff" linewidth={2} />
    </mesh>
  );
}

function Birds() {
  return (
    <group position={[0, 0, -200]}>
      {Array.from({ length: 50 }, (_, i) => (
        <Bird key={i} speed={Math.random() * 30 + 15} />
      ))}
    </group>
  );
}

function Raindrop() {
  const ref = useRef();
  const speed = Math.random() * 50 + 20;
  const initialY = Math.random() * 500 + 200;

  useFrame((state, delta) => {
    ref.current.position.y -= speed * delta;
    if (ref.current.position.y < -200) {
      ref.current.position.y = initialY;
    }
  });

  return (
    <mesh
      ref={ref}
      position={[
        Math.random() * 1000 - 500,
        initialY,
        Math.random() * 500 - 250,
      ]}
    >
      <boxGeometry args={[0.2, 3, 0.2]} /> {/* Increased width and length */}
      <meshBasicMaterial
        color={'day' === 'day' ? '#a0a0ff' : '#4040ff'}
        transparent
        opacity={0.7}
      />{' '}
      {/* Slightly increased opacity */}
    </mesh>
  );
}

function Rain({ count = 1000 }) {
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <Raindrop key={i} />
      ))}
    </group>
  );
}

function Satellite() {
  const ref = useRef();
  const speed = 5;

  useFrame((state, delta) => {
    ref.current.position.x -= speed * delta;
    ref.current.position.y += speed * 0.1 * delta;
    if (ref.current.position.x < -500) {
      ref.current.position.x = 500;
      ref.current.position.y = Math.random() * 200 + 300;
    }
  });

  return (
    <group ref={ref} position={[500, Math.random() * 200 + 300, -100]}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[5, 0, 0]}>
        <boxGeometry args={[10, 0.5, 3]} />
        <meshBasicMaterial color="#88ccff" />
      </mesh>
    </group>
  );
}

function Firefly() {
  const ref = useRef();
  const [position] = useState(
    () =>
      new THREE.Vector3(
        Math.random() * 1000 - 500,
        Math.random() * 200 + 100,
        Math.random() * 500 - 250
      )
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.x = position.x + Math.sin(time * 2) * 10;
    ref.current.position.y = position.y + Math.cos(time * 3) * 10;
    ref.current.position.z = position.z + Math.sin(time * 2.5) * 10;
    ref.current.material.opacity = (Math.sin(time * 10) + 1) / 2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshBasicMaterial color="#ffff00" transparent opacity={0.7} />
    </mesh>
  );
}

function Fireflies({ count = 100 }) {
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <Firefly key={i} />
      ))}
    </group>
  );
}

export { Birds, Fireflies, Rain, Satellite, Stars };
