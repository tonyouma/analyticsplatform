import { ElementType } from 'react';

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.FunctionComponent;
}
