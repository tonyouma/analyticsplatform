import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { AnalyticsPage } from './views';
const DashboardContent: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" component={AnalyticsPage} />
    </Switch>
  );
};

export default DashboardContent;
