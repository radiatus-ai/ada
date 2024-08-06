import { lazy } from 'react';

// Define route constants
export const ROUTES = {
  HOME: '/',
  CHAT_DETAILS: '/chat/:id',
  PROJECTS: '/projects',
  PROJECT_DETAILS: '/projects/:id',
  PROJECT_CREATE: '/projects/create',
  PROJECT_EDIT: '/projects/:id/edit',
  SETTINGS: '/settings',
  LOGIN: '/login',
};

// Define route configurations
export const routeConfig = [
  {
    path: ROUTES.HOME,
    component: lazy(() => import('./pages/Landing')),
  },
  {
    path: ROUTES.CHAT_DETAILS,
    component: lazy(() => import('./pages/Prompt')),
  },
  {
    path: ROUTES.PROJECTS,
    component: lazy(() => import('./pages/projects/Projects')),
  },
  {
    path: ROUTES.SETTINGS,
    component: lazy(() => import('./pages/Settings')),
  },
];

// A utility function to get a route path with parameters
export const getRoutePath = (route, params = {}) => {
  let path = ROUTES[route];
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};
