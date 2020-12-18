import React from 'react';

import { Router } from 'react-router-dom';

import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import history from './history';

import Routes from './routes/Routes';

import { appTheme } from './theme/theme';

const App: React.FC<{}> = () => {
  return (
    <div>
      <StylesProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
