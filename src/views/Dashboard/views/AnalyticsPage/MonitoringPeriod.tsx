import React from 'react';

import { Paper, Box } from '@material-ui/core';

import {
  TitleComponent,
  ButtonGroupComponent,
} from '../../../../shared/Components';

const title: string = 'monitoring period';
const MonitoringPeriod: React.FC<{}> = () => {
  return (
    <>
      <Box component={Paper} style={{ padding: 30, marginTop: 30 }}>
        <TitleComponent>{title}</TitleComponent>
        <Box style={{ paddingTop: 20 }}>
          <ButtonGroupComponent />
        </Box>
      </Box>
    </>
  );
};

export default MonitoringPeriod;
