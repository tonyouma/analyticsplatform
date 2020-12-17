import React from 'react';

import { Grid, Box } from '@material-ui/core';

import {
  dataOne,
  dataTwo,
  dataThree,
} from '../../../../../shared/data/chartData';
import { MonitorCardComponent } from '../../../../../shared/Components';

const chartTitleOne: string = 'patients';
const countOne = '13k';
const titleOne = 'Foot  fall';

const chartTitleTwo: string = 'NPS';
const countTwo = '7.8';
const titleTwo = 'Patient satisfaction';

const chartTitleThree: string = 'Kenya shillings';
const countThree = '4.8m';
const titleThree = 'Revenue';

const MonitorCard: React.FC<{}> = () => {
  return (
    <Box style={{ paddingTop: 20 }}>
      {/* <Grid item xs={12} sm={4}>
     
      </Grid> */}
      {/* <Grid item xs={12} sm={4}>
   
      </Grid>
      <Grid item xs={12} sm={4}>
      
      </Grid> */}
      <Grid container style={{ paddingTop: 20 }} spacing={2}>
        <Grid item xs={12} sm={4}>
          {' '}
          <MonitorCardComponent
            title={titleOne}
            chartTitle={chartTitleOne}
            count={countOne}
            data={dataOne}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MonitorCardComponent
            title={titleTwo}
            chartTitle={chartTitleTwo}
            count={countTwo}
            data={dataTwo}
          />
        </Grid>{' '}
        <Grid item xs={12} sm={4}>
          <MonitorCardComponent
            title={titleThree}
            chartTitle={chartTitleThree}
            count={countThree}
            data={dataThree}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MonitorCard;
