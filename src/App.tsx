import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { DashboardPage, ErrorPage } from './views';

import { appTheme } from './theme/theme';

const App: React.FC<{}> = () => {
  return (
    <div>
      <StylesProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <Switch>
            <Route exact path="/">
              <DashboardPage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
