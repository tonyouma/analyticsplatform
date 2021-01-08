/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Fade,
} from '@material-ui/core';

import ProfilePhoto from '../../../../../../assets/profile.png';
const user_name: string = 'Sandra Mamai';
const user_email: string = 'smamai@accesafaya.com';
// const user_name_initials = 'SM';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarStyles: {
      paddingTop: 45,
      [theme.breakpoints.down('sm')]: {
        paddingRight: 10,
        paddingTop: 15,
      },
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 10,
    },

    menuStyle: {
      marginLeft: '-70px',
      borderRadius: 5,
      [theme.breakpoints.down('sm')]: {
        marginLeft: '-10px',
      },
    },
    avatarStyles: {
      height: 55,
      width: 55,
    },
  })
);

const HeaderProfile: React.FC<{}> = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box display="flex" alignItems="center">
      <Grid item>
        <Typography>{user_name}</Typography>
        <Typography>{user_email}</Typography>
      </Grid>

      <Grid item>
        <IconButton
          className={classes.iconButtonAvatar}
          aria-label="true"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Avatar
            src={ProfilePhoto}
            alt={user_name}
            className={classes.avatarStyles}
          />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          elevation={1}
          keepMounted
          onClose={handleClose}
          TransitionComponent={Fade}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          className={classes.menuStyle}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/">
            <ListItemText primary="Sign Out" />
          </MenuItem>
        </Menu>
      </Grid>
    </Box>
  );
};

export default HeaderProfile;
