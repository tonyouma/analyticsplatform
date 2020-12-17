import React from 'react';

import { Typography, Container, Grid, Box } from '@material-ui/core';

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import {
  VisitCard,
  TitleComponent,
  Wrapper,
} from '../../../../shared/Components';
import { visits } from '../../../../shared/data/visitInfo';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyIssues from './KeyIssues';
import MonitoringPeriod from './MonitoringPeriod';
import StaffListView from './TableComponent';
import MonitorCard from './MonitorCards';

const icon = MoreVertIcon;
const margin = 20;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       [theme.breakpoints.up('md')]: {
//         paddingLeft: 20,
//       },
//     },
//   })
// );

const title: string = 'Analytics';
const AnalyticsPage: React.FC<{}> = () => {
  // const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <Typography variant="h3">{title}</Typography>

      <Grid container spacing={4}>
        <Grid item sm={3} xs={12}>
          <Wrapper>
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
          </Wrapper>
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
