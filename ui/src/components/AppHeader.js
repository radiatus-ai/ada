import { ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useMemo } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { TitleContext } from '../contexts/TitleContext';
import RobotIcon from './AdaIcon';

const AppHeader = ({ onToggleSidebar, onLogout }) => {
  const { darkMode } = useThemeContext();
  const theme = useTheme();
  const { title } = useContext(TitleContext);

  const toolbarStyle = useMemo(
    () => ({
      background: darkMode
        ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
        : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
      transition: 'background 0.5s ease-in-out',
    }),
    [darkMode]
  );

  const iconStyle = {
    transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
  };

  const robotIconStyle = {
    ...iconStyle,
    fontSize: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
    backgroundSize: '200% 200%',
    animation: 'gradient 15s ease infinite',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 0px 10px rgba(255,255,255,0.2)',
    '@keyframes gradient': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar style={toolbarStyle}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          sx={robotIconStyle}
        >
          <RobotIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h1" component="div" sx={titleStyle}>
            {title}
          </Typography>
        </Box>
        <IconButton onClick={onLogout} color="inherit" sx={iconStyle}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
