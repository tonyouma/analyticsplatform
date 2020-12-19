import React from 'react';

import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Plus as AddIcon } from 'react-feather';

import { ButtonComponent } from '../../../../Components';

import HeaderProfile from './HeaderProfile';
import HeaderProgressBar from './HeaderProgressBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarStyles: {
      backgroundColor: '#ffffff',
      color: '#33333',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 65,
    },
    headerStyles: {
      width: '100%',
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#333333',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column-reverse',
      },
    },
  })
);

const HeaderComponent: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBarStyles}>
      <Toolbar disableGutters>
        <Grid container spacing={1} className={classes.headerStyles}>
          <Grid item xs={6}>
            <ButtonComponent endIcon={<AddIcon />}>
              Add Assessment
            </ButtonComponent>
          </Grid>
          <Grid item xs={2}>
            <HeaderProgressBar />
          </Grid>
          <Grid item>
            <HeaderProfile />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
