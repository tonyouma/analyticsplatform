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
      main: '#4E1ED4',
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 4,
        height: 5,
      },
      bar1Determinate: {
        borderRadius: 4,
        backgroundImage: `linear-gradient(to right,#4E1ED4, #74a3ff 100%)`,
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
        >{`${value}`}</Typography>
        <Box width="100%" ml={1}>
          <LinearProgress variant="determinate" value={normalise(value)} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ReportedProgressBar;
