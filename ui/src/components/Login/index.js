import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useCallback, useEffect, useMemo } from 'react';
import { useAuth } from '../../contexts/Auth';
import AuthenticationComponent from '../Authentication';
import Model from '../LoginModel';
import { Birds, Fireflies, Rain, Satellite, Stars } from './components';

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

function LoginScreen({ onLogin, onError }) {
  const [isRotating, setIsRotating] = React.useState(false);
  const [timeOfDay, setTimeOfDay] = React.useState('day');
  const [isRaining, setIsRaining] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { login } = useAuth();

  const cameraPosition = [0, 200, 1000];
  const cameraFov = 75;
  const modelScale = 0.5;

  const currentCity = 'sanfrancisco';
  const theModel = `https://storage.googleapis.com/ui-models/${currentCity}.gltf`;

  useEffect(() => {
    setIsRaining(Math.random() > 0.8);
  }, []);

  const updateTimeOfDay = useCallback(() => {
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const currentTimeWindow = timeWindows.find(
      (window) =>
        (currentHour >= window.start && currentHour < window.end) ||
        (window.start > window.end &&
          (currentHour >= window.start || currentHour < window.end))
    );
    setTimeOfDay(currentTimeWindow ? currentTimeWindow.name : 'day');
  }, []);

  useEffect(() => {
    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, [updateTimeOfDay]);

  const currentBackground = useMemo(
    () =>
      timeWindows.find((window) => window.name === timeOfDay)?.background ||
      timeWindows[2].background,
    [timeOfDay]
  );

  const handleMouseDown = useCallback(() => setIsRotating(true), []);
  const handleMouseUp = useCallback(() => setIsRotating(false), []);

  const sceneElements = useMemo(
    () => (
      <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model url={theModel} isRotating={isRotating} scale={modelScale} />
        {timeOfDay === 'night' && <Stars />}
        {(timeOfDay === 'day' || timeOfDay === 'dawn') && <Birds />}
        {isRaining && <Rain />}
        {(timeOfDay === 'night' || timeOfDay === 'dawn') && <Fireflies />}
        <Satellite />
      </>
    ),
    [timeOfDay, isRaining, isRotating, theModel, modelScale]
  );

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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
        <Suspense fallback={null}>{sceneElements}</Suspense>
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

export default React.memo(LoginScreen);

// solid config, keep for future ref
// const cameraPosition = [0, 200, 1000];
// const cameraFov = 75;
// const modelScale = 0.5;
// // interesting, has the bottom i was looking for but I like the see through more now
// const cameraPosition = [0, 200, 900];
// const cameraFov = 70;
// const modelScale = 0.9;
// hmm, there appears to be something random changing it, look into it later.
