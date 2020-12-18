/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AnalyticsPage } from '../views/Dashboard/views';
import WithLayoutRoute from './WithLayoutRoute';

import Dashboard from '../views/Dashboard';

const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      <WithLayoutRoute
        component={AnalyticsPage}
        layout={Dashboard}
        path="/analytics"
        exact
      />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
