import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
  bar: {
    boxSizing: 'border-box',
    height: 65,
    padding: '20px 15px',
    backgroundColor: theme.palette.colors.green,
    display: 'flex',
    justifyContent: 'flex-end',
    '&>*': {
      margin: '0 15px',
    }
  },
  logoBox: {
    zIndex: 10,
    marginTop: -50,
  },
  logo: {
    height: "auto",
    width: "25vmin",
  },
}));

export default useStyles;
