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
import { CredentialsApi } from 'ada-client';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createApi } from '../clients/adaClient';
import RetroLoading from '../components/common/RetroLoading';
import { useAuth } from '../contexts/Auth';
import { useThemeContext } from '../contexts/ThemeContext';
import { TitleContext } from '../contexts/TitleContext';

const apiService = {};

function Settings() {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { setTitle } = useContext(TitleContext);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [showApiKeys, setShowApiKeys] = useState({});
  const { token } = useAuth();
  const settingsApi = createApi(CredentialsApi, token);

  const [apiKeys, setApiKeys] = useState({
    anthropic_api_key: '',
    cohere_api_key: '',
    google_ai_studio_api_key: '',
    groq_api_key: '',
    voyage_ai_api_key: '',
    open_ai_api_key: '',
    perplexity_ai_api_key: '',
    gh_pat_token: '',
  });

  useEffect(() => {
    setTitle('Settings');
    fetchSettings();
  }, [setTitle]);

  const fetchSettings = async () => {
    try {
      const result = await apiService.getSettings();
      // const result = await settingsApi
      setApiKeys(result);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = (key) => {
    setShowApiKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const validateForm = () => {
    const validationErrors = {};
    // Add validation logic here if needed
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await apiService.updateSettings(apiKeys);
        toast.success('Settings updated successfully');
      } catch (error) {
        console.error('Error updating settings:', error);
        toast.error('Error updating settings');
      }
    }
  };

  const handleChange = (key) => (e) => {
    setApiKeys((prev) => ({ ...prev, [key]: e.target.value }));
  };

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

export default Settings;
