import React from 'react';

import { Line } from '@reactchartjs/react-chart.js';

import { Typography, Card, CardContent, Grid, Box } from '@material-ui/core';

const title: string = 'Patient Satisfaction';

const dataOne = {
  labels: ['1', '2', '3', '4', '6'],
  datasets: [
    {
      label: '# of Patients',
      data: [1, 5, 3, 7, 6, 5, 7],
      fill: false,
      borderColor: 'rgb(11, 35, 141)',
    },
  ],
};

const dataTwo = {
  labels: ['1', '2', '3', '4', '6'],
  datasets: [
    {
      label: '# of Patients',
      data: [2, 14, 12, 13, 10, 10],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
    },
  ],
};

const dataThree = {
  labels: ['1', '2', '3', '4', '6'],
  datasets: [
    {
      label: '# of Patients',
      data: [1, 12, 10, 8, 19, 17],
      fill: false,
      borderColor: 'rgb(105, 197, 120)',
    },
  ],
};

const options = {
  legend: { display: false },
  maintainAspectRatio: false,
  responsive: true,
  axes: { display: false },
  layout: {
    padding: {
      left: 20,
      right: 5,
      bottom: 5,
      top: 10,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        display: false,
        gridLines: {
          drawOnChartArea: false,
          drawBorder: false,
          scaleShowLabels: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        display: false,
      },
    ],
  },
};

const type = 'line';

const MonitorCard: React.FC<{}> = () => {
  return (
    <Grid container spacing={2} style={{ paddingTop: 20 }}>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <Card style={{ height: 211 }}>
          <CardContent>
            <Typography>{title}</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="h5">13K</Typography>
              <Box width={'77%'}>
                <Line data={dataOne} options={options} type={type} />
              </Box>{' '}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <Card>
          <Card style={{ height: 211 }}>
            <CardContent>
              <Typography>{title}</Typography>
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h5">13K</Typography>
                  <Typography>Patients</Typography>
                </Box>{' '}
                <Box width={'67%'}>
                  <Line data={dataTwo} options={options} type={type} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Card>
      </Grid>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <Card>
          <Card style={{ height: 211 }}>
            <CardContent>
              <Typography>{title}</Typography>
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h5">13K</Typography>
                  <Typography>Kenya Shillings</Typography>
                </Box>
                <Box width={'67%'}>
                  <Line data={dataThree} options={options} type={type} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MonitorCard;
