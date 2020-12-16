/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';

import styled from 'styled-components';
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
interface IVisitProps {
  location: string;
  visit_count: number;
  icon: ElementType;
  margin?: number;
}

const StyledCard = styled(Card)`
  /* margin: 30px; */
  /* margin-top: 30px; */
  /* margin-bottom: 30px; */
  /* border: '1px solid red'; */
  box-shadow: 'none';
`;

const VisitCard: React.FC<IVisitProps> = (props) => {
  const { location, visit_count, icon: Icon, margin } = props;

  return (
    <StyledCard style={{ marginTop: margin, marginBottom: margin }}>
      <CardContent style={{ padding: '5px 10px' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box style={{ display: 'flex' }}>
            <Typography>{visit_count}</Typography>
            <Typography style={{ paddingLeft: 30 }}>{location}</Typography>
          </Box>
          <IconButton>
            {' '}
            <Icon></Icon>
          </IconButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default VisitCard;
