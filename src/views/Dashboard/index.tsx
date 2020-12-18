import React from 'react';

import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import DashboardLayout from '../../shared/Layout/DashboardLayout';
import { HeaderComponent, Sidebar } from './Content';
import { useStyles } from './styles';

const DashboardPage: React.FC<React.PropsWithChildren<{}>> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
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
        <main className={classes.main}>{children}</main>
      </Box>

      {/* End Main Page Component */}
    </DashboardLayout>
  );
};

DashboardPage.propTypes = {
  children: PropTypes.any,
};

export default DashboardPage;
