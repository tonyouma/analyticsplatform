import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 290;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {
        padding: 5,
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: 40,
      // overflowX: 'hidden',
    },
  })
);
