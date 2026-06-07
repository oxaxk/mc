// File: src/router/config.tsx
import React from 'react';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

import Home from '../pages/home/page';

import CookieBanner from '../components/feature/CookieBanner';

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Datenschutz = React.lazy(() => import('../pages/datenschutz/page'));
const Impressum = React.lazy(() => import('../pages/impressum/page'));
const CookieSettingsPage = React.lazy(() => import('../pages/cookie/page'));
const LeistungenPage = React.lazy(() => import('../pages/leistungen/page'));
const BranchenPage = React.lazy(() => import('../pages/branchen/page'));
const MagazinPage = React.lazy(() => import('../pages/magazin/page'));
const MagazinArticlePage = React.lazy(() => import('../pages/magazin/article'));
const UeberUnsPage = React.lazy(() => import('../pages/ueber-uns/page'));
const KontaktPage = React.lazy(() => import('../pages/kontakt/page'));
const ServicePage = React.lazy(() => import('../pages/service/page'));

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[var(--page-bg)]" />}>
      {children}
    </React.Suspense>
  );
}

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
      { path: 'leistungen', element: <LazyPage><LeistungenPage /></LazyPage> },
      { path: 'leistungen/:slug', element: <LazyPage><ServicePage /></LazyPage> },
      { path: 'branchen', element: <LazyPage><BranchenPage /></LazyPage> },
      { path: 'magazin', element: <LazyPage><MagazinPage /></LazyPage> },
      { path: 'magazin/:slug', element: <LazyPage><MagazinArticlePage /></LazyPage> },
      { path: 'ueber-uns', element: <LazyPage><UeberUnsPage /></LazyPage> },
      { path: 'kontakt', element: <LazyPage><KontaktPage /></LazyPage> },
      { path: 'cookie', element: <LazyPage><CookieSettingsPage /></LazyPage> },
      { path: 'datenschutz', element: <LazyPage><Datenschutz /></LazyPage> },
      { path: 'impressum', element: <LazyPage><Impressum /></LazyPage> },
      { path: '*', element: <LazyPage><NotFound /></LazyPage> }
    ]
  }
]);

export default router;
