import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense, useCallback, useMemo, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoadingSpinner from './components/common/RetroLoading';

import AppHeader from './components/AppHeader';
import LoginScreen from './components/Login';
import SideDrawer from './components/SideDrawer';
import { useAuth } from './contexts/Auth';
import { useThemeContext } from './contexts/ThemeContext';
import { routeConfig } from './routes';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { darkMode } = useThemeContext();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  const { token, login, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const handleLoginError = () => {
  //   console.error('Login Failed');
  // };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const handleLogin = useCallback(
    async (decodedToken, authToken) => {
      setIsLoading(true);
      try {
        // todo: add env var / config to set this
        const response = await fetch('https://auth.dev.r7ai.net/login/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: authToken }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        login(data.user, data.token);
        console.log('Login successful:', data);
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [login]
  );

  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };
  // utility for using a token to upload packages, etc. todo: remove and add a hotkey to expose debug info in the UI.
  // make the debug feature feel really cool.
  console.log('token', token);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {!token ? (
          <LoginScreen onLogin={handleLogin} onError={handleLoginError} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <AppHeader
              onToggleSidebar={toggleSidebar}
              onLogout={handleLogout}
            />
            <SideDrawer isOpen={isSidebarOpen} onClose={toggleSidebar} />

            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {routeConfig.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </Box>
          </Box>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
