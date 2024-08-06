import {
  Brightness4,
  Brightness7,
  Construction as ConstructionIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import RobotIcon from './AdaIcon';

const SideDrawer = ({ isOpen, onClose }) => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const theme = useTheme();

  const drawerItems = [
    { text: 'Ada', icon: <HomeIcon />, path: '/' },
    { text: 'Projects', icon: <ConstructionIcon />, path: '/projects' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          background: darkMode
            ? 'linear-gradient(to bottom, rgba(26, 26, 77, 0.9), rgba(77, 26, 77, 0.9))'
            : 'linear-gradient(to bottom, rgba(230, 230, 255, 0.9), rgba(255, 230, 255, 0.9))',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
            color: theme.palette.primary.main,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onClose}
            // sx={robotIconStyle}
          >
            <RobotIcon isOpen={isOpen} />
          </IconButton>
        </Box>
        <List>
          {drawerItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              onClick={onClose}
              key={item.text}
              sx={{
                '&:hover': {
                  backgroundColor: darkMode
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: theme.palette.text.primary }}
              />
            </ListItem>
          ))}
          <ListItem
            button
            // component={Link}
            // to={item.path}
            onClick={toggleDarkMode}
            // key={item.text}
            sx={{
              '&:hover': {
                backgroundColor: darkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.primary.main }}>
              {/* {item.icon} */}
              {/* <IconButton onClick={toggleDarkMode} color="inherit" sx={iconStyle}> */}
              {darkMode ? <Brightness7 /> : <Brightness4 />}
              {/* </IconButton> */}
            </ListItemIcon>
            <ListItemText
              primary={`Lights ${darkMode ? 'On' : 'Off'}`}
              sx={{ color: theme.palette.text.primary }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
