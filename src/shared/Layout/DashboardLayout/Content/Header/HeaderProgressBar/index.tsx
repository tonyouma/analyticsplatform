import React from 'react';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 6,
      borderRadius: 5,
      //   marginBottom: 10,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#4E1ED4',
    },
  })
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const HeaderProgressBar: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={50} />
      <Typography variant="caption">24K/24K Patients Seen</Typography>
    </div>
  );
};

export default HeaderProgressBar;
