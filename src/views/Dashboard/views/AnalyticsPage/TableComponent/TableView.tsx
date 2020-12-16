import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { TableContainer, Paper } from '@material-ui/core';

import TableComponent from './Table';

const containerStyles: React.CSSProperties = {
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
  borderRadius: 5,
};

const TableView: React.FC<{}> = () => {
  return (
    <>
      <PerfectScrollbar>
        <TableContainer style={containerStyles} component={Paper}>
          <TableComponent />
        </TableContainer>
      </PerfectScrollbar>
    </>
  );
};

export default TableView;
