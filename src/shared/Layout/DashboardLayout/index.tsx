import React from 'react';

import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import DashboardLayout from '.';
import { HeaderComponent, Sidebar } from './Content';
import { useStyles } from './styles';

const DashboardPage: React.FC<React.PropsWithChildren<{}>> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
};

DashboardPage.propTypes = {
  children: PropTypes.any,
};

export default DashboardPage;
