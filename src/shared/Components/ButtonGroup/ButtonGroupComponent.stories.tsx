import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import ButtonGroupComponent from './index';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroupComponent,
} as Meta;

export const ButtonGroup: React.FC<{}> = () => <ButtonGroupComponent />;
