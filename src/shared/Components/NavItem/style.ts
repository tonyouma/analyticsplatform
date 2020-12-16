import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      borderRight: 'none',
    },

    item: {
      height: 30,
      marginBottom: 30,
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    icon: {
      marginRight: 24,
      marginLeft: theme.spacing(2),
      flexShrink: 0,
    },
    navTitle: {
      fontSize: 16,
    },
    button: {
      justifyContent: 'flex-start',
      textTransform: 'none',
      width: '100%',
      height: 35,
      borderRadius: 0,
    },
    active: {
      // color: 'red',
      // borderRight: '3px solid #9F56D6',
    },
  })
);
