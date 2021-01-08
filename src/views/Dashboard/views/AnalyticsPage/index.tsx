import React from 'react';

import { Typography, Container, Grid } from '@material-ui/core';

import KeyIssues from './KeyIssues';
import MonitoringPeriod from './MonitoringPeriod';
import { TableComponent } from './Content/TableComponent';
import MonitorCard from './Content/MonitorCards';
import Visit from './Content/VisitItem/Visit';
import { Outlet } from 'react-router-dom';

const title: string = 'Analytics';

const AnalyticsPage: React.FC<{}> = () => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h3">{title}</Typography>

      <Grid container spacing={4}>
        <Grid item sm={3} xs={12}>
          <Visit />
        </Grid>
        <Grid item sm={9} xs={12}>
          <KeyIssues />
          <MonitoringPeriod />
          <MonitorCard />
          <TableComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
