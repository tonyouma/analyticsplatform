/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AnalyticsPage, HomePage } from '../views/Dashboard/views';
import WithLayoutRoute from './WithLayoutRoute';

import Dashboard from '../views/Dashboard';

const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      <WithLayoutRoute
        component={HomePage}
        layout={Dashboard}
        path="/dashboard"
        exact
      />
      <WithLayoutRoute
        component={AnalyticsPage}
        layout={Dashboard}
        path="/analytics"
      />

      {/* <Redirect to="/dashboard" /> */}
    </Switch>
  );
};

export default Routes;
