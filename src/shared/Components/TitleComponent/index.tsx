/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    color: '#afaeae',
    textTransform: 'uppercase',
  },
});

const TitleComponent: FC<React.PropsWithChildren<TypographyProps>> = (
  props
) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography {...rest} className={classes.root}>
      {children}
    </Typography>
  );
};

TitleComponent.propTypes = {
  children: PropTypes.any,
};

export default TitleComponent;
