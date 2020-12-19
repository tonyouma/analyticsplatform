import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../../../../theme/theme';
const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      borderRight: '1px solid #e5e5e5',
      justifyContent: 'center',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      borderRight: 'none',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(12) + 1,
      },
    },
    listItem: {
      cursor: 'pointer',
      height: 30,
      marginBottom: 30,
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    activeListItem: {
      '& $listItemIcon': {
        color: colors.primary,
      },
    },
    listItemIcon: {
      marginRight: 24,
      marginLeft: theme.spacing(2),
      flexShrink: 0,
    },
  })
);
