import { Box, keyframes } from '@mui/material';
import React from 'react';

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;

const DotsLoading = () => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: 8,
            backgroundColor: 'currentColor',
            borderRadius: '50%',
            animation: `${bounce} 1.4s infinite ease-in-out both`,
            animationDelay: `${i * 0.16}s`,
            mx: '2px',
          }}
        />
      ))}
    </Box>
  );
};

export default DotsLoading;
