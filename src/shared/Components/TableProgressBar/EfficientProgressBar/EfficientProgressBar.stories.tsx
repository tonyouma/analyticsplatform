import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import EfficientProgressBar from './index';

const value: number = 54;

export default {
  title: 'ProgressBar/EfficientProgressBar',
  component: EfficientProgressBar,
} as Meta;

export const EfficientProgress: React.FC<{}> = () => (
  <EfficientProgressBar value={value} />
);
