import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Calculate = lazy(() => import('../pages/Calculate'));
const NotFound = lazy(() => import('../pages/NotFound'));

export type TRoutes = Record<string, string>;

export type TRouteConfigKeys<T extends TRoutes> = {
  [K in keyof T]: {
    path: T[K];
    component: LazyExoticComponent<ComponentType<unknown>>;
  };
};

export const routes: TRoutes = {
  home: '/',
  calculate: '/calculate',
  notFound: '*',
};

export const routeConfig: TRouteConfigKeys<typeof routes> = {
  home: {
    path: routes.home,
    component: Home,
  },
  calculate: {
    path: routes.calculate,
    component: Calculate,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
