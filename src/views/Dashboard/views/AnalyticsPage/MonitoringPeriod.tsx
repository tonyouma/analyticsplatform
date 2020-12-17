import React from 'react';

import { Box } from '@material-ui/core';

import {
  TitleComponent,
  ButtonGroupComponent,
  Wrapper,
} from '../../../../shared/Components';

const title: string = 'monitoring period';
const MonitoringPeriod: React.FC<{}> = () => {
  return (
    <>
      <Wrapper>
        <TitleComponent>{title}</TitleComponent>
        <Box style={{ paddingTop: 20 }}>
          <ButtonGroupComponent />
        </Box>
      </Wrapper>
    </>
  );
};

export default MonitoringPeriod;
