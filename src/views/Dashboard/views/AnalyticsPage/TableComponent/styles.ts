import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { fontWeight } from '../../../../../theme/theme';

export const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: 12,
        height: '50px',
        fontSize: 13,
        borderBottom: 'none',
      },
      head: {
        fontWeight: fontWeight.mediumTwo,
        paddingLeft: 12,
        fontSize: 18,
      },
    },
    MuiTableHead: {
      root: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        height: '70px',
      },
    },
  },
});

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
