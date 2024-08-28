import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout';
import {
  ScrollToTop,
  InterObserver,
  MousePositionRoute,
  ResizablePanelRoute,
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
        path: 'mouse-position',
        Component: MousePositionRoute,
      },
      {
        path: 'resizable-panel',
        Component: ResizablePanelRoute,
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
