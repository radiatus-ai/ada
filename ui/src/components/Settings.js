// SettingsPresentation.js
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RetroLoading from '../components/RetroLoading';
import { useThemeContext } from '../contexts/ThemeContext';

function SettingsPresentation({
  loading,
  apiKeys,
  showApiKeys,
  errors,
  handleSubmit,
  handleChange,
  toggleVisibility,
}) {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderPasswordField = (label, key) => (
    <TextField
      label={label}
      value={apiKeys[key]}
      onChange={handleChange(key)}
      fullWidth
      margin="normal"
      error={!!errors[key]}
      helperText={errors[key]}
      type={showApiKeys[key] ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => toggleVisibility(key)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showApiKeys[key] ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 0, 255, 0.3)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 0, 255, 0.5)',
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
          },
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.text.secondary,
        },
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
        },
      }}
    />
  );

  if (loading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <CircularProgress />
        <RetroLoading />
      </Grid>
    );
  }

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: darkMode
          ? 'linear-gradient(to bottom right, #000033, #330033)'
          : 'linear-gradient(to bottom right, #e6e6ff, #ffe6ff)',
        transition: 'background 0.5s ease-in-out',
        pt: 4,
        pb: 4,
      }}
    >
      <Grid container justifyContent="center" sx={{ px: isMobile ? 2 : 4 }}>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: isMobile ? 2 : 4,
              borderRadius: 2,
              mb: 4,
              background: darkMode
                ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
                : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
              transition: 'background 0.5s ease-in-out',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              API Keys
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {Object.entries(apiKeys).map(([key, value]) => (
                  <Grid item xs={12} key={key}>
                    {renderPasswordField(
                      key
                        .split('_')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' '),
                      key
                    )}
                  </Grid>
                ))}
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={isMobile}
                    sx={{
                      background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 0.8,
                      },
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: isMobile ? 2 : 4,
              borderRadius: 2,
              background: darkMode
                ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
                : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
              transition: 'background 0.5s ease-in-out',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Memories
            </Typography>
            {/* Add Memories content here */}
          </Paper>
        </Grid>
        <ToastContainer
          position={isMobile ? 'bottom-center' : 'top-right'}
          theme={darkMode ? 'dark' : 'light'}
        />
      </Grid>
    </Box>
  );
}

export default SettingsPresentation;
