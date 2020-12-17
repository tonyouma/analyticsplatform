/* eslint-disable react/prop-types */
import React from 'react';

import { Line } from '@reactchartjs/react-chart.js';
import { Typography, Card, CardContent, Box } from '@material-ui/core';
import styled from 'styled-components';

import { options } from './options';

// const title: string = 'Patient Satisfaction';

const type = 'line';

const StyledCard = styled(Card)`
  height: 211px;
  box-shadow: '0px 2px 6px rgba(0, 0, 0, 0.07)';
`;

interface ICardProps {
  title: string;
  count: string | number;
  chartTitle: string;
  data: any;
}

const MonitorCardComponent: React.FC<ICardProps> = (props) => {
  const { title, count, chartTitle, data } = props;
  return (
    <StyledCard>
      <CardContent>
        <Typography>{title}</Typography>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="body2">{count}</Typography>
            <Typography>{chartTitle}</Typography>
          </Box>{' '}
          <Box width={'65%'}>
            <Line data={data} options={options} type={type} />
          </Box>{' '}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default MonitorCardComponent;
