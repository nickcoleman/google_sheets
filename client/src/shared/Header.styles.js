import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
  colorBar: {
    zIndex: 0,
    backgroundColor: theme.palette.colors.maroon,
    height: 50,
  },
  logoBox: {
    zIndex: 10,
    marginTop: -50,
  },
  logo: {
    height: "auto",
    width: "25%",
  },
}));

export default useStyles;
