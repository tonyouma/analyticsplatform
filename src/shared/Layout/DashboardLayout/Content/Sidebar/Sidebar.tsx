import React from 'react';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './styles';

import { Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import {
  Folder as FolderIcon,
  Activity as ActivityIcon,
  Sliders as SlidersIcon,
} from 'react-feather';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

const NavListItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <FolderIcon />,
  },
  {
    title: 'Tables',
    href: '/analytics',
    icon: <ActivityIcon />,
  },
  {
    title: 'Typography',
    href: '/typography',
    icon: <SmsOutlinedIcon />,
  },
  {
    title: 'Icons',
    href: '/icons',
    icon: <SlidersIcon />,
  },
];

const SideBar: React.FC<{}> = () => {
  const classes = useStyles();
  const [open] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List component="div" disablePadding>
          {NavListItems.map((page) => (
            <ListItem
              key={page.title}
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to={page.href}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {page.icon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
