import React from 'react';

import { Typography, Container, Grid } from '@material-ui/core';

import KeyIssues from './KeyIssues';
import MonitoringPeriod from './MonitoringPeriod';
import { TableComponent } from './Content/TableComponent';
import MonitorCard from './Content/MonitorCards';
import Visit from './Content/VisitItem/Visit';

const title: string = 'Analytics';

const LinkContent: React.FC<{}> = () => {
  return (
    <Container maxWidth={false}>
      <KeyIssues />
      <MonitoringPeriod />
      <MonitorCard />
      <TableComponent />
    </Container>
  );
};

export default LinkContent;
