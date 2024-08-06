// LandingPresentation.js
import { Send, Star } from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPresentation = ({
  darkMode,
  toggleDarkMode,
  inputValue,
  recentChats,
  handleSubmit,
  handleInputChange,
  toggleStar,
}) => {
  const baseTheme = useTheme();
  const isMobile = useMediaQuery(baseTheme.breakpoints.down('md'));
  const navigate = useNavigate();

  const theme = React.useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#ff00ff',
          },
          secondary: {
            main: '#00ffff',
          },
          background: {
            default: darkMode ? '#000033' : '#e6e6ff',
            paper: darkMode ? '#1a1a4d' : '#ffffff',
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: darkMode
                  ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
                  : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
                transition:
                  'background-image 0.5s ease-in-out, transform 0.3s ease-in-out',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 0, 255, 0.3)',
                    transition: 'border-color 0.3s ease-in-out',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 0, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff00ff',
                  },
                },
              },
            },
          },
        },
      }),
    [darkMode, baseTheme]
  );

  const handleClickRecentChat = (id) => {
    navigate('/chat/' + id);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'linear-gradient(to bottom right, #000033, #330033)'
            : 'linear-gradient(to bottom right, #e6e6ff, #ffe6ff)',
          transition: 'background 0.5s ease-in-out',
        }}
      >
        <Grid
          container
          justifyContent="center"
          sx={{
            pt: 4,
            pb: 4,
            px: isMobile ? 2 : 4,
          }}
        >
          <Grid item xs={12} md={10}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let's begin
              </Typography>
            </Box>
            {/* todo: wire up dynamic alerts, etc */}
            {/* <Alert
              severity="info"
              sx={{
                mb: 4,
                background: 'linear-gradient(45deg, #4a148c, #311b92)',
                color: 'white',
                borderLeft: '4px solid #ff00ff',
              }}
            >
              <AlertTitle>Introducing Projects</AlertTitle>A way to work on
              longer-term large work.
            </Alert> */}

            <Paper
              elevation={3}
              sx={{
                p: 2,
                mb: 4,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="How can I help?"
                  value={inputValue}
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        type="submit"
                        edge="end"
                        sx={{ color: theme.palette.primary.main }}
                      >
                        <Send />
                      </IconButton>
                    ),
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    mt: 1,
                    display: 'block',
                  }}
                >
                  Use Shift + Return for a new line
                </Typography>
              </form>
            </Paper>

            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Recent chats
            </Typography>

            <Grid container spacing={2}>
              {recentChats.map((chat) => (
                <Grid item xs={12} sm={6} md={4} key={chat.id}>
                  <Paper
                    sx={{
                      p: 2,
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => handleClickRecentChat(chat.id)}
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{ pr: 4, color: theme.palette.text.primary }}
                    >
                      {chat.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {chat.time}
                    </Typography>
                    <IconButton
                      onClick={() => toggleStar(chat.id)}
                      sx={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        color: chat.is_starred
                          ? theme.palette.primary.main
                          : theme.palette.text.secondary,
                      }}
                      size="small"
                    >
                      <Star />
                    </IconButton>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPresentation;
