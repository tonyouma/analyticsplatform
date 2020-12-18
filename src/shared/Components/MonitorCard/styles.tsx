import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  difference: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  differenceValue: {
    color: (props: any) => (props.positiveChange ? '#77DFBA' : '#C51E3A'),
    marginRight: theme.spacing(1),
  },
  cardStyles: {
    [theme.breakpoints.down('sm')]: {
      width: 323,
    },
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.10)',
    padding: '10px 20px',
    height: 192,
  },
}));
