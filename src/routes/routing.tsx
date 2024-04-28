import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// import LoadingSpinner from '../components/LoadingSpinner';
import { routeConfig } from './routeConfig';

export const RouteManager = React.memo(() => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        {Object.entries(routeConfig).map(([key, route]) => {
          const { component: Component, path } = route;
          return (
            <Route
              key={key}
              path={path}
              element={
                // <Suspense fallback={<h1>404 Not Found</h1>}>
                <Component />
                // </Suspense>
              }
            ></Route>
          );
        })}
      </Routes>
    </AnimatePresence>
  );
});

RouteManager.displayName = 'RouteManager';
