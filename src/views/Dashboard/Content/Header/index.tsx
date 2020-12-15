import React from 'react';

import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Plus as AddIcon } from 'react-feather';

import { ButtonComponent } from '../../../../shared/Components';

import HeaderProfile from './HeaderProfile';

const headerStyles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#333333',
};

const useStyles = makeStyles(() =>
  createStyles({
    appBarStyles: {
      backgroundColor: '#ffffff',
      color: '#33333',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 40,
    },
  })
);

const HeaderComponent: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBarStyles}>
      <Toolbar disableGutters>
        <Grid container spacing={1} style={headerStyles}>
          <Grid item>
            <ButtonComponent endIcon={<AddIcon />}>
              Add Assessment
            </ButtonComponent>
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
