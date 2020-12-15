import React from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './styles';

import { NavItem } from '../../../../shared/Components';
import { NavigationItem } from '../../../../models/navItem';
import {
  Folder as FolderIcon,
  Activity as ActivityIcon,
  Sliders as SlidersIcon,
} from 'react-feather';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

const NavListItems: Array<NavigationItem> = [
  {
    icon: FolderIcon,
    link: '/',
  },
  {
    icon: ActivityIcon,
    link: '/analytics',
  },
  {
    icon: SmsOutlinedIcon,
    link: '/',
  },
  {
    icon: SlidersIcon,
    link: '/',
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
        <List>
          {NavListItems.map((item, index) => (
            <NavItem icon={item.icon} key={index} link={item.link} />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
