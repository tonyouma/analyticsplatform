import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { DashboardPage, ErrorPage } from './views';

const App: React.FC<{}> = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <DashboardPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
