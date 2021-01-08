import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import ButtonComponent from './index';

const buttonContent: string = 'Hello World!';

export default {
  title: 'Buttons/Button',
  component: ButtonComponent,
} as Meta;

export const ButtonTemplate: React.FC<{}> = () => (
  <ButtonComponent>{buttonContent}</ButtonComponent>
);
