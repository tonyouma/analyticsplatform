/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  IconButton,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  visit: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    position: 'relative',
    marginBottom: 15,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    color: '#333',
  },
  text: {
    flex: '1 1 auto',
    paddingLeft: 10,
  },
}));

interface IVisitProps {
  location: string;
  visit_count: number;
}

const VisitItem: React.FC<IVisitProps> = (props) => {
  const { location, visit_count, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.visit}>
        <Typography>{visit_count}</Typography>
        <ListItemText className={classes.text}>
          <Typography>{location}</Typography>
        </ListItemText>
        <IconButton edge="end" size="small">
          <MoreVert />
        </IconButton>
      </ListItem>
    </>
  );
};

export default VisitItem;
