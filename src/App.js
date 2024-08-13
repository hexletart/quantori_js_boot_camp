import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import './styles/scss/app.scss';
import AuthProvider from './providers/AuthProvider';

import router from './router';

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
