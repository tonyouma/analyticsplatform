/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    border: '1px solid #e5e5e5',
    borderRadius: 5,
    boxShadow: 'none',
    color: '#333333',
    height: 48,
    padding: '12px 30px',
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
});

const ButtonComponent: FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button {...rest} className={classes.root}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.any,
};

export default ButtonComponent;
