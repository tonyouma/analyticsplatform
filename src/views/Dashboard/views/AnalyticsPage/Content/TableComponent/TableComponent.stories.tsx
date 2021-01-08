import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { TableComponent } from './index';

export default {
  title: 'Table/TableComponent',
  component: TableComponent,
} as Meta;

export const Table: React.FC<{}> = () => <TableComponent />;
