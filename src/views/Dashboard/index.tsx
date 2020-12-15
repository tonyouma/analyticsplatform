import { Typography } from '@material-ui/core';
import React from 'react';

import Box from '@material-ui/core/Box';

import DashboardLayout from '../../shared/Layout/DashboardLayout';
import { HeaderComponent, Sidebar } from './Content';
import { useStyles } from './styles';

const DashboardPage: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      {/* Navbar component */}
      <nav>
        <Sidebar />
      </nav>
      {/* EndNavbarComponent */}

      {/* Main Page Component */}
      <Box className={classes.app}>
        <HeaderComponent />
        <main className={classes.main}>
          <Typography>Hello world</Typography>
        </main>
      </Box>

      {/* End Main Page Component */}
    </DashboardLayout>
  );
};

export default DashboardPage;
