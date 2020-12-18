import React from 'react';

import { Grid, Box } from '@material-ui/core';

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import {
  dataOne,
  dataTwo,
  dataThree,
} from '../../../../../shared/data/chartData';
import { MonitorCardComponent } from '../../../../../shared/Components';

const chartTitleOne: string = 'patients';
const countOne = '13k';
// const changeOne = '+0,2';
const titleOne = 'Foot  fall';

const chartTitleTwo: string = 'NPS';
const countTwo = '7.8';
const changeTwo = '-0,1';
const titleTwo = 'Patient satisfaction';

const chartTitleThree: string = 'Kenya shillings';
const countThree = '4.8m';
const changeThree = '+2,4';
const titleThree = 'Revenue';

const iconGreen = <CaretUpOutlined style={{ fontSize: '16px' }} />;
const iconRed = <CaretDownOutlined style={{ fontSize: '16px' }} />;

const MonitorCard: React.FC<{}> = () => {
  return (
    <Box style={{ paddingTop: 20 }}>
      <Grid container style={{ paddingTop: 20 }} spacing={2}>
        <Grid item xs={12} sm={4}>
          {' '}
          <MonitorCardComponent
            title={titleOne}
            chartTitle={chartTitleOne}
            count={countOne}
            data={dataOne}
            icon={iconGreen}
            countChange="+0.2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MonitorCardComponent
            title={titleTwo}
            chartTitle={chartTitleTwo}
            count={countTwo}
            data={dataTwo}
            icon={iconRed}
            countChange={changeTwo}
          />
        </Grid>{' '}
        <Grid item xs={12} sm={4}>
          <MonitorCardComponent
            title={titleThree}
            chartTitle={chartTitleThree}
            count={countThree}
            data={dataThree}
            icon={iconGreen}
            countChange={changeThree}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MonitorCard;
