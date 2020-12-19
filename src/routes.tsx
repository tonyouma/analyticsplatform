import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardPage from './shared/Layout/DashboardLayout'
import { AnalyticsPage } from './views/Dashboard/views'

const routes = [
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      { path: 'analytics', element: <AnalyticsPage /> },
    //   { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];

export default routes;
