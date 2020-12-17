import React from 'react';

import { Grid } from '@material-ui/core';

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

        <Grid container style={{ paddingTop: 20 }} spacing={3}>
          <Grid item>
            <ButtonGroupComponent />
          </Grid>

          <Grid item>
            <ButtonGroupComponent />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default MonitoringPeriod;
