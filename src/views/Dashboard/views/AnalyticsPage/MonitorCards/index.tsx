import React from 'react';

import { Grid } from '@material-ui/core';

import { dataOne, dataTwo, dataThree } from './data';
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
    <Grid container spacing={2} style={{ paddingTop: 20 }}>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <MonitorCardComponent
          title={titleOne}
          chartTitle={chartTitleOne}
          count={countOne}
          data={dataOne}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <MonitorCardComponent
          title={titleTwo}
          chartTitle={chartTitleTwo}
          count={countTwo}
          data={dataTwo}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={4} xs={12}>
        <MonitorCardComponent
          title={titleThree}
          chartTitle={chartTitleThree}
          count={countThree}
          data={dataThree}
        />
      </Grid>
    </Grid>
  );
};

export default MonitorCard;
