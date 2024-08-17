import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout';
import {
  ScrollToTop,
  InterObserver,
  PrevNextPage,
} from '@routes';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Navigate to="scroll-to-top" replace />,
      },
      {
        path: 'scroll-to-top',
        Component: ScrollToTop,
      },
      {
        path: 'intersection-observer',
        Component: InterObserver,
      },
      {
        path: 'prev-next-page',
        Component: PrevNextPage,
      },
    ],
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('../routes/NotFound');
      return { Component: NotFound };
    },
  },
]);
