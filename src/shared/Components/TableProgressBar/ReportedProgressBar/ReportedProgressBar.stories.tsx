import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import ReportedProgressBar from './index';

const value: number = 2;

export default {
  title: 'ProgressBar/ReportedProgressBar',
  component: ReportedProgressBar,
} as Meta;

export const ReportedProgress: React.FC<{}> = () => (
  <ReportedProgressBar value={value} />
);
