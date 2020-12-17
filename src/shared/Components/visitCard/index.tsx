/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';

import { colors } from '../../../theme/theme';
interface IVisitProps {
  location: string;
  visit_count: number;
  icon: ElementType;
  margin?: number;
}

const useStyles = makeStyles({
  cardStyles: {
    marginTop: 20,
    marginBottom: 20,
    boxShadow: 'none',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    // '&:hover': {
    //   boxShadow: 'none',
    //   color: 'red',
    //   // background: '#4E1ED4',
    // },
  },
  textStyle: {
    color: colors.primary,
    '&:hover': {
      color: 'red',
    },
  },
});

const VisitCard: React.FC<IVisitProps> = (props) => {
  const { location, visit_count, icon: Icon, margin } = props;
  const classes = useStyles();

  return (
    <Card className={classes.cardStyles}>
      <CardContent style={{ padding: '5px 10px' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box style={{ display: 'flex' }}>
            <Typography className={classes.textStyle}>{visit_count}</Typography>
            <Typography style={{ paddingLeft: 30 }}>{location}</Typography>
          </Box>
          <IconButton>
            {' '}
            <Icon></Icon>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitCard;
