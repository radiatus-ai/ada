import { Box, keyframes } from '@mui/material';
import React from 'react';

const retroRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const retroPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const RetroLoading = ({ size = 60, color = '#ff00ff' }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        animation: `${retroRotate} 4s linear infinite`,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '33%',
            height: '33%',
            background: color,
            borderRadius: '50%',
            top: i < 2 ? 0 : '67%',
            left: i % 2 === 0 ? 0 : '67%',
            animation: `${retroPulse} 1.5s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </Box>
  </Box>
);

export default RetroLoading;
