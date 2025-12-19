// File: src/router/config.tsx
import React from 'react';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import Datenschutz from '../pages/datenschutz/page';
import Impressum from '../pages/impressum/page';
import CookieSettingsPage from '../pages/cookie/page';

import CookieBanner from '../components/feature/CookieBanner';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <CookieBanner />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'cookie', element: <CookieSettingsPage /> },
      { path: 'datenschutz', element: <Datenschutz /> },
      { path: 'impressum', element: <Impressum /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;