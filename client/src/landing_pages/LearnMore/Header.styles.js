import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  colorBar: {
    zIndex: 0,
    backgroundColor: 'green',
    height: 50,
  },
  logoBox: {
    zIndex: 10,
    marginTop: -50,
  },
  logo: {
    height: 'auto',
    width: 300,
  },
}));

export default useStyles;
