import React, { FC } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      // paddingRight: 20,
      // paddingLeft: 70,
      // overflow: 'hidden',
    },
  })
);

const DashboardLayout: FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        {children}
      </div>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
