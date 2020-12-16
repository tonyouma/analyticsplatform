import React from 'react';

import { Typography, Container, Grid, Paper, Box } from '@material-ui/core';

import { VisitCard, TitleComponent } from '../../../../shared/Components';
import { visits } from '../../../../shared/data/visitInfo';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyIssues from './KeyIssues';
import MonitoringPeriod from './MonitoringPeriod';
import StaffListView from './TableComponent';
import MonitorCard from './MonitorCards';

// const location = 'Donholm';
// const visit_count = 12;
const icon = MoreVertIcon;
const margin = 20;

const title: string = 'Analytics';
const AnalyticsPage: React.FC<{}> = () => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h3">{title}</Typography>

      <Grid container spacing={4}>
        <Grid item sm={3} xs={12}>
          <Box component={Paper} style={{ padding: 30 }}>
            <TitleComponent>Visits</TitleComponent>
            <Box>
              {visits.map((visit, index) => (
                <VisitCard
                  location={visit.location}
                  visit_count={visit.visit_count}
                  icon={icon}
                  key={index}
                  margin={margin}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={9} xs={12}>
          <KeyIssues />
          <MonitoringPeriod />
          <MonitorCard />
          <StaffListView />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
