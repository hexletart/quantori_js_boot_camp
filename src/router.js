import {
  createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';

import paths from './paths';
import Layout from './components/Layout.jsx';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={paths.any} element={<NotFoundPage />} />
    </Route>,
  ),
);
