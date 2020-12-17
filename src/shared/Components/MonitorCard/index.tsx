/* eslint-disable react/prop-types */
import React from 'react';

import { Line } from '@reactchartjs/react-chart.js';
import { Typography, Card, CardContent, Box } from '@material-ui/core';
// import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { options } from './options';

import { colors } from '../../../theme/theme';

const type = 'line';

// const cardStyles: React.CSSProperties = {

// };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyles: {
      [theme.breakpoints.down('sm')]: {
        width: 323,
      },
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.10)',
      padding: '10px 20px',
      height: 192,
    },
  })
);

//

interface ICardProps {
  title: string;
  count: string | number;
  chartTitle: string;
  data: any;
}

const MonitorCardComponent: React.FC<ICardProps> = (props) => {
  const classes = useStyles();
  const { title, count, chartTitle, data } = props;
  return (
    <Card className={classes.cardStyles}>
      <CardContent>
        <Typography>{title}</Typography>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="body2">{count}</Typography>
            <Typography style={{ color: colors.textSecondary }}>
              {chartTitle}
            </Typography>
          </Box>{' '}
          <Box width={'78%'}>
            <Line data={data} options={options} type={type} />
          </Box>{' '}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonitorCardComponent;
