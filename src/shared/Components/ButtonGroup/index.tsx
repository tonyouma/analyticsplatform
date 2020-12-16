import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CustomButton from './CustomButton';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textTransform: 'none',
    },
    button: {
      boxShadow: 'none',
      color: '#333333',
      height: 60,
    },
    buttonRight: {
      borderLeft: 'none',
      textTransform: 'none',
    },
  })
);

const ButtonGroupComponent: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div>
      <ButtonGroup aria-label="button-group" className={classes.button}>
        <Button className={classes.root}>Day</Button>
        <CustomButton>Week</CustomButton>
        <CustomButton>Month</CustomButton>
        <Button className={classes.buttonRight}>Year</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupComponent;
