import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAuth } from '../contexts/Auth';
import AuthenticationComponent from './Authentication';
import Model from './LoginModel';

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

function LoginScreen({ onLogin, onError }) {
  const [isRotating, setIsRotating] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [isRaining, setIsRaining] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const cameraPosition = [0, 200, 1000];
  const cameraFov = 75;
  const modelScale = 0.5;

  // List of available cities
  const cities = [
    'sanfrancisco',
    'seattle',
    'newyork',
    'chicago',
    'losangeles',
  ];

  // Time windows and corresponding styles
  const timeWindows = [
    {
      name: 'night',
      start: 20,
      end: 4.5,
      background: 'linear-gradient(to bottom, #000033, #191970)',
    },
    {
      name: 'dawn',
      start: 4.5,
      end: 9,
      background: 'linear-gradient(to bottom, #FF6347, #FFA07A, #87CEEB)',
    },
    {
      name: 'day',
      start: 9,
      end: 20,
      background: 'linear-gradient(to bottom, #2b0054, #7b2cbf)',
    },
  ];

  useEffect(() => {
    setIsRaining(Math.random() > 0.8);
  }, []);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const now = new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;
      const currentTimeWindow = timeWindows.find(
        (window) =>
          (currentHour >= window.start && currentHour < window.end) ||
          (window.start > window.end &&
            (currentHour >= window.start || currentHour < window.end))
      );
      setTimeOfDay(currentTimeWindow ? currentTimeWindow.name : 'day');
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const currentBackground =
    timeWindows.find((window) => window.name === timeOfDay)?.background ||
    timeWindows[2].background;

  // Hardcoded to Seattle, but could be changed to the closest city based on browser IP
  // TODO: Implement IP-based city selection
  // const currentCity = 'seattle';
  const currentCity = 'sanfrancisco';
  const theModel = `https://storage.googleapis.com/ui-models/${currentCity}.gltf`;

  // const handleLogin = async (decodedToken, authToken) => {
  //   setIsLoading(true);
  //   try {
  //     const authApi = createApi(AuthApi, authToken);
  //     const data = { token: authToken };
  //     const response = await authApi.loginGoogleAuthLoginPost(data);
  //     login(response.body.user, response.body.token);
  //     // The login function from AuthContext should handle the redirection
  //   } catch (error) {
  //     onError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Box
      sx={{
        height: '100vh',
        background: currentBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseDown={() => setIsRotating(true)}
      onMouseUp={() => setIsRotating(false)}
      onMouseLeave={() => setIsRotating(false)}
    >
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        camera={{
          position: cameraPosition,
          fov: cameraFov,
          near: 0.1,
          far: 5000,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          <Model url={theModel} isRotating={isRotating} scale={modelScale} />
          {timeOfDay === 'night' && <Stars />}
          {(timeOfDay === 'day' || timeOfDay === 'dawn') && <Birds />}
          {isRaining && <Rain />}
          {(timeOfDay === 'night' || timeOfDay === 'dawn') && <Fireflies />}
          <Rain />
          <Fireflies />
          <Satellite />
        </Suspense>
      </Canvas>

      {/* Sun or Moon */}
      <Box
        sx={{
          position: 'absolute',
          top: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background:
            timeOfDay === 'day'
              ? 'linear-gradient(to bottom right, #ff9966, #ff5e62)'
              : timeOfDay === 'dawn'
              ? 'linear-gradient(to bottom right, #FFA500, #FF6347)'
              : 'linear-gradient(to bottom right, #c0c0c0, #a0a0a0)',
          boxShadow:
            timeOfDay === 'day'
              ? '0 0 50px #ff5e62'
              : timeOfDay === 'dawn'
              ? '0 0 50px #FF6347'
              : '0 0 30px rgba(200, 200, 200, 0.5)',
        }}
      />

      {/* Content */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={24}
          sx={{
            padding: 4,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #ff00ff',
            borderRadius: '10px',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: '#ff00ff',
              textAlign: 'center',
              textShadow:
                '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
              fontFamily: '"Orbitron", sans-serif',
              marginBottom: 4,
            }}
          >
            Welcome to Ada
          </Typography>

          <Box mt={4} position="relative">
            {isLoading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={100}
              >
                <CircularProgress size={50} sx={{ color: '#ff00ff' }} />
              </Box>
            ) : (
              <AuthenticationComponent onLogin={onLogin} onError={onError} />
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginScreen;

// solid config, keep for future ref
// const cameraPosition = [0, 200, 1000];
// const cameraFov = 75;
// const modelScale = 0.5;
// // interesting, has the bottom i was looking for but I like the see through more now
// const cameraPosition = [0, 200, 900];
// const cameraFov = 70;
// const modelScale = 0.9;
// hmm, there appears to be something random changing it, look into it later.
