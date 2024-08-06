import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CACHE_NAME = 'gcs-model-cache';

async function fetchAndCache(url) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(url);

  if (!response) {
    console.log('Fetching and caching:', url);
    response = await fetch(url, { mode: 'cors' });
    const clonedResponse = response.clone();
    cache.put(url, clonedResponse);
  } else {
    console.log('Loading from cache:', url);
  }

  return response;
}

function Model({ url, isRotating, scale = 1 }) {
  const [modelUrl, setModelUrl] = useState(null);
  const { scene } = useGLTF(modelUrl || url);
  const { camera } = useThree();
  const modelRef = useRef();
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let objectUrl;
    async function loadModel() {
      try {
        const response = await fetchAndCache(url);
        const blob = await response.blob();
        objectUrl = URL.createObjectURL(blob);
        setModelUrl(objectUrl);
      } catch (error) {
        console.error('Error loading model:', error);
        // If caching fails, fall back to the original URL
        setModelUrl(url);
      }
    }

    loadModel();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [url]);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());

      modelRef.current.position.set(-center.x, -center.y, -center.z);
      modelRef.current.scale.set(scale, scale, scale);

      const planeGeometry = new THREE.PlaneGeometry(10000, 10000);
      const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = box.min.y;
      modelRef.current.add(plane);

      console.log('Model position:', modelRef.current.position);
      console.log('Camera position:', camera.position);
    }
  }, [scene, camera, scale]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: '#ff00ff',
          wireframe: true,
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      if (isRotating) {
        setAutoRotate(false);
      } else if (!autoRotate) {
        setAutoRotate(true);
      }

      if (autoRotate) {
        modelRef.current.rotation.y += 0.0005;
      }
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default Model;
