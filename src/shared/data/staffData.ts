import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
// import { ElementType } from 'react';

// const iconGreen = (
//   <CaretUpOutlined style={{ fontSize: '16px', color: '#77DFBA' }} />
// );

// const iconRed: ElementType = (
//   <CaretDownOutlined style={{ fontSize: '16px', color: '#C51E3A' }} />
// );

export const staffData = [
  {
    id: 1,
    name: 'Mercy Mukoya',
    efDelta: '1, 3',
    efDeltaChange: '+1, 3',
    npsDelta: '1, 2',
    npsDeltaChange: '+0,3',
    efChange: 1.3,
    npsChange: 1.3,
    icon: CaretUpOutlined,
    efficiency: 96,
    reportedIssues: 3,
  },
  {
    id: 2,
    name: 'Kennedy Ayako',
    efDelta: '1, 8',
    efDeltaChange: '+0, 4',
    efChange: 0.4,
    npsChange: 0.2,
    npsDelta: '1, 8',
    npsDeltaChange: '+0,2',
    efficiency: 92,
    reportedIssues: 6,
    icon: CaretUpOutlined,
  },
  {
    id: 3,
    name: 'Stephanie Tomsett',
    efDelta: '2, 7',
    npsDelta: '2, 0',
    efDeltaChange: '2,5',
    npsDeltaChange: '+0,2',
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
    efChange: -0.5,
    npsChange: -2.1,
    reportedIssues: 8,
    icon: CaretDownOutlined,
  },
];
