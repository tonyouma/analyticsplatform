import React from 'react';
import {
  LinearProgress,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Box,
} from '@material-ui/core';

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

const EfficientProgressBar: React.FC<IProgressProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          color="textSecondary"
        >{`${value}%`}</Typography>
        <Box width="100%" ml={1}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EfficientProgressBar;
