/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    borderRight: 'none',
    borderLeft: 'none',
    borderRadius: 0,
    // padding: '12px 30px',
    textTransform: 'none',
  },
});

const CustomButton: FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button {...rest} className={classes.root}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
};

export default CustomButton;
