import React from 'react';

import {useRoutes } from 'react-router-dom';

import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';


import { appTheme } from './theme/theme';
import routes from './routes';

const App: React.FC<{}> = () => {
  const routing = useRoutes(routes);
  return (
    <div>
      <StylesProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          {routing}
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
