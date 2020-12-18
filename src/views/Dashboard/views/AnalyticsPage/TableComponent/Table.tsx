/* eslint-disable react/prop-types */
import React, { ElementType } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core/styles';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { staffData } from '../../../../../shared/data/staffData';
import { theme, useStyles } from './styles';
import {
  EfficientProgressBar,
  ReportedProgressBar,
} from '../../../../../shared/Components';

const iconUp = <CaretUpOutlined style={{ fontSize: '16px' }} />;
const iconDown = <CaretDownOutlined style={{ fontSize: '16px' }} />;

import PerfectScrollbar from 'react-perfect-scrollbar';
import { TableContainer, Paper } from '@material-ui/core';

const containerStyles: React.CSSProperties = {
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
  borderRadius: 5,
  marginTop: 20,
};

const TableComponent: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <PerfectScrollbar>
          <TableContainer style={containerStyles} component={Paper}>
            <Table className={classes.table}>
              {/* Table Head */}
              <TableHead>
                <TableRow>
                  <TableCell style={{ textAlign: 'center' }}>No</TableCell>
                  <TableCell>Staff Name</TableCell>
                  <TableCell>Efficiency Delta</TableCell>
                  <TableCell>NPS Delta</TableCell>
                  <TableCell>Efficiency</TableCell>
                  <TableCell>Reported Issues</TableCell>
                </TableRow>
              </TableHead>
              {/* Table Body */}
              <TableBody>
                {staffData.map((staff, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ textAlign: 'center' }}>
                      {staff.id}
                    </TableCell>
                    <TableCell>{staff.name}</TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="65%"
                      >
                        <Typography> {staff.npsDelta}</Typography>
                        <Typography>{staff.efDeltaChange}</Typography>
                        {/* <Typography>{staff.icon}</Typography> */}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="65%"
                      >
                        <Typography> {staff.efDelta}</Typography>
                        <Typography>{staff.efDeltaChange}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell style={{ width: '20%', paddingRight: 30 }}>
                      <EfficientProgressBar value={staff.efficiency} />
                    </TableCell>
                    <TableCell style={{ width: '13%', paddingRight: 30 }}>
                      <ReportedProgressBar value={staff.reportedIssues} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </ThemeProvider>
    </>
  );
};

export default TableComponent;
