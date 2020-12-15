import React, { FC } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      paddingRight: 70,
      paddingLeft: 70,
    },
  })
);

const DashboardLayout: FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <CssBaseline />
        {children}
      </Box>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
