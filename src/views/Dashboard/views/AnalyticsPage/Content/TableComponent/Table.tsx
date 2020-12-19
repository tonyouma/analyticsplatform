/* eslint-disable react/prop-types */
import React, { ElementType } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Box,
  ThemeProvider
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { colors } from '../../../../../../theme/theme'
import { staffData } from '../../../../../../shared/data/staffData';
import { theme, useStyles } from './styles';
import {
  EfficientProgressBar,
  ReportedProgressBar,
} from '../../../../../../shared/Components';

const iconUp = <CaretUpOutlined style={{ fontSize: '16px' }} />;
const iconDown = <CaretDownOutlined style={{ fontSize: '16px' }} />;


const containerStyles: React.CSSProperties = {
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
  borderRadius: 5,
  marginTop: 20,
};

const styledText: React.CSSProperties = {
 color: colors.primary
};

const styledTextInfo: React.CSSProperties = {
  color: colors.textSecondary
 };
const TableComponent: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <PerfectScrollbar>
        <ThemeProvider theme={theme}>
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
                    <TableCell><Typography style={styledText}>{staff.name}
                      </Typography></TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="65%"
                      >
                        <Typography> {staff.npsDelta}</Typography>
                        <Typography style={styledTextInfo}>{staff.efDeltaChange}</Typography>
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
                        <Typography style={styledTextInfo}>{staff.efDeltaChange}</Typography>
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
        </ThemeProvider>
      </PerfectScrollbar>
    </>
  );
};

export default TableComponent;
