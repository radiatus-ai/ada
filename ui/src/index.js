import { GoogleOAuthProvider } from '@react-oauth/google';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import App from './App';
import ErrorFallback from './components/ErrorFallback';
import { AuthProvider } from './contexts/Auth';
import ThemeContextProvider from './contexts/ThemeContext';
import { TitleProvider } from './contexts/TitleContext';
import reportWebVitals from './reportWebVitals';
import './theme/index.css';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log(
//           'Service Worker registered successfully:',
//           registration.scope
//         );
//       })
//       .catch((error) => {
//         console.log('Service Worker registration failed:', error);
//       });
//   });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <RecoilRoot>
        <ThemeContextProvider>
          <GoogleOAuthProvider clientId="92446036622-3h0e0a0nm8a9cui468pat7ep1ni3f659.apps.googleusercontent.com">
            <AuthProvider>
              <SnackbarProvider>
                <TitleProvider>
                  <App />
                </TitleProvider>
              </SnackbarProvider>
            </AuthProvider>
          </GoogleOAuthProvider>
        </ThemeContextProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
