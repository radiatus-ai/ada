import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense, useMemo } from 'react';
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
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  const { token, login, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  // const onLogin = async (decodedToken, authToken) => {
  //   const authApi = createApi(AuthApi, authToken);
  //   const data = { token: authToken };
  //   try {
  //     const response = await authApi.loginGoogleAuthLoginPost(data);
  //     login(response.body.user, response.body.token);
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // };

  const onLogin = async (decodedToken, authToken) => {
    // const testGoogleLogin = async function(googleToken) {
    const apiUrl = 'http://localhost:8080'; // Adjust this to your API's URL
    const endpoint = '/login/google';

    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: authToken }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      login(data.user, data.token);
      console.log('Login successful:', data);

      // You can handle the successful login here, e.g., storing the token
      // localStorage.setItem('authToken', data.token);

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {!token ? (
          <LoginScreen onLogin={onLogin} onError={handleLoginError} />
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
