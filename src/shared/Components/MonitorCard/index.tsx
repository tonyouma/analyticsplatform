/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Line } from '@reactchartjs/react-chart.js';
import { Typography, Card, CardContent, Box } from '@material-ui/core';
import { options } from './options';

import useStyles from './styles';
import { colors } from '../../../theme/theme';

const type = 'line';

//

interface ICardProps {
  title: string;
  count: string | number;
  countChange: string;
  chartTitle: string;
  data: any;
  icon: React.ReactElement;
}

const MonitorCardComponent: React.FC<ICardProps> = (props) => {
  const { title, count, countChange, chartTitle, data, icon } = props;

  const positiveChange = countChange && countChange.charAt(0) === '+';

  const classes = useStyles({ positiveChange });

  const [changeIcon] = useState();

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
            <Typography className={classes.differenceValue}>
              {icon} {countChange}
            </Typography>
          </Box>{' '}
          <Box width={'63%'}>
            <Line data={data} options={options} type={type} />
          </Box>{' '}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonitorCardComponent;
