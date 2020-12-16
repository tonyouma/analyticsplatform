import React from 'react';

import { Grid, Paper, Box } from '@material-ui/core';

import { VisitCard, TitleComponent } from '../../../../shared/Components';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const location = 'Donholm';
const visit_count = 12;
const icon = MoreVertIcon;

const title: string = 'key issues';
const KeyIssues: React.FC<{}> = () => {
  return (
    <>
      <Box component={Paper} style={{ padding: 30 }}>
        <TitleComponent>{title}</TitleComponent>
        <Grid container spacing={2} style={{ paddingTop: 20 }}>
          <Grid item md={3}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
          <Grid item md={4}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
          <Grid item md={3}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
          <Grid item md={2}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
          <Grid item md={4}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
          <Grid item md={3}>
            <VisitCard
              location={location}
              visit_count={visit_count}
              icon={icon}
              // key={index}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default KeyIssues;
