import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';

const wrapperStyles: React.CSSProperties = {
  padding: 30,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
  marginTop: 20,
};

const Wrapper: React.FC<React.PropsWithChildren<BoxProps>> = (props) => {
  const { children } = props;
  return (
    <>
      <Box component={Paper} style={wrapperStyles}>
        {children}
      </Box>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any,
};

export default Wrapper;
