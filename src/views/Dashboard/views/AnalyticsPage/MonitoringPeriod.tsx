import React from 'react';

import {
  Grid,
  CardContent,
  Card,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogContent,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  withStyles,
} from '@material-ui/core';
import { colors } from '../../../../theme/theme';
import {
  TitleComponent,
  ButtonGroupComponent,
  Wrapper,
} from '../../../../shared/Components';

const useStyles = makeStyles({
  cardStyles: {
    boxShadow: 'none',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    height: 60,
  },
  textStyle: {
    color: colors.primary,
    '&:hover': {
      color: 'red',
    },
  },
});

const title: string = 'monitoring period';
const MonitoringPeriod: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Wrapper>
        <TitleComponent>{title}</TitleComponent>

        <Grid container style={{ paddingTop: 20 }} spacing={3}>
          <Grid item>
            <ButtonGroupComponent />
          </Grid>

          <Grid item>
            <Card className={classes.cardStyles}>
              <CardContent style={{ padding: '16px 10px' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <Typography style={{ paddingLeft: 30 }}>Hello</Typography> */}
                  <IconButton></IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default MonitoringPeriod;
