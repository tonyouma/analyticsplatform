/* eslint-disable react/prop-types */
import React, { ElementType } from 'react';

import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, Button } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './style';

interface INavigationItemProps {
  icon: ElementType;
  link: string;
  className?: string;
}

const NavItem: React.FC<INavigationItemProps> = (props) => {
  const classes = useStyles();
  const { link, icon: Icon, className, ...rest } = props;
  return (
    <>
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        {...rest}
      >
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={RouterLink}
          to={link}
        >
          {Icon && (
            <>
              <Icon className={classes.icon} size="25" />
            </>
          )}
        </Button>
      </ListItem>
    </>
  );
};

export default NavItem;
