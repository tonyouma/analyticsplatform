import React from 'react';
import {
  LinearProgress,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Box,
} from '@material-ui/core';

// const grey = '#f5f5f5';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a90ff',
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 4,
        height: 7,
      },
      bar1Determinate: {
        borderRadius: 4,
      },
      colorPrimary: {
        backgroundColor: 'transparent',
      },
    },
  },
});

interface IProgressProps {
  value: number;
}

const MIN = 0;
const MAX = 10;

const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

const ReportedProgressBar: React.FC<IProgressProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          color="textSecondary"
        >{`${value}`}</Typography>
        <Box width="100%" ml={1}>
          <LinearProgress variant="determinate" value={normalise(value)} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ReportedProgressBar;
