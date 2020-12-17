import React from 'react';

import { Grid } from '@material-ui/core';

import {
  IssueCard,
  TitleComponent,
  Wrapper,
} from '../../../../shared/Components';

const locationOne = 'Kosovo';
const issueOne = 'Wrong Prescription';

const locationTwo = 'Kiambiu';
const issueTwo = 'Opened Late';

const locationThree = 'NewYork';
const issueThree = 'Bad Receipt';

const locationFour = 'Mathare';
const issueFour = 'Late Check In';

const locationFive = 'Kiambiu';
const issueFive = 'Delay in Lab';

const locationSix = 'Kiambiu';
const issueSix = 'Careless waste disposal';

const title: string = 'key issues';

const KeyIssues: React.FC<{}> = () => {
  return (
    <>
      <Wrapper>
        <TitleComponent>{title}</TitleComponent>
        <Grid container spacing={2} style={{ paddingTop: 20 }}>
          <Grid item md={3}>
            <IssueCard location={locationOne} description={issueOne} />
          </Grid>
          <Grid item md={4}>
            <IssueCard location={locationTwo} description={issueTwo} />
          </Grid>
          <Grid item md={3}>
            <IssueCard location={locationThree} description={issueThree} />
          </Grid>
          <Grid item md={2}>
            <IssueCard location={locationFour} description={issueFour} />
          </Grid>
          <Grid item md={4}>
            <IssueCard location={locationFive} description={issueFive} />
          </Grid>
          <Grid item md={3}>
            <IssueCard location={locationSix} description={issueSix} />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default KeyIssues;
