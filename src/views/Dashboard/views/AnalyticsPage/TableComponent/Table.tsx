import React from 'react';
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

import { theme, useStyles } from './styles';
import {
  EfficientProgressBar,
  ReportedProgressBar,
} from '../../../../../shared/Components';

const staffData = [
  {
    id: 1,
    name: 'Mercy Mukoya',
    efDelta: '1, 3',
    efDeltaChange: '+1, 3',
    npsDelta: '1, 2',
    npsDeltaChange: '+0,3',
    efficiency: 96,
    reportedIssues: 3,
  },
  {
    id: 2,
    name: 'Kennedy Ayako',
    efDelta: '1, 8',
    efDeltaChange: '+0, 4',
    npsDelta: '1, 8',
    npsDeltaChange: '+0,2',
    efficiency: 92,
    reportedIssues: 6,
  },
  {
    id: 3,
    name: 'Stephanie Tomsett',
    efDelta: '2, 7',
    npsDelta: '2, 0',
    efficiency: 58,
    reportedIssues: 1,
  },
  {
    id: 4,
    name: 'Faith Kityo',
    efDelta: '2, 8',
    efDeltaChange: '-0, 5',
    npsDelta: '2, 5',
    npsDeltaChange: '-2,1',
    efficiency: 74,
    reportedIssues: 8,
  },
];

const TableComponent: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <TableContainer> */}
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
        {/* </TableContainer> */}
      </ThemeProvider>
    </>
  );
};

export default TableComponent;
