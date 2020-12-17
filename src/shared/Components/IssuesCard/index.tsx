/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { ElementType } from 'react';

import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import { colors, fontWeight } from '../../../theme/theme';
interface IVisitProps {
  location: string;
  description: string;
}

const cardStyles: React.CSSProperties = {
  boxShadow: 'none',
  border: '1px solid rgba(0, 0, 0, 0.23)',
};

const IssuesCard: React.FC<IVisitProps> = (props) => {
  const { location, description } = props;

  return (
    <Card style={cardStyles}>
      <CardContent style={{ padding: '5px 0 5px 5px' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography style={{ fontWeight: fontWeight.mediumTwo }}>
              {description}
            </Typography>
            <Typography style={{ color: colors.textSecondary }}>
              {location}
            </Typography>
          </Box>
          <IconButton>
            {' '}
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IssuesCard;
