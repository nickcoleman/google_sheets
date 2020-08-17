import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  content: {
    margin: '0px auto',
  },
  socialBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    fontSize: 'calc(1rem + 10vw)',
    color: theme.palette.colors.green,
  },
  location: {
    fonstSize: '1.25em',
    color: theme.palette.colors.green,
  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));

export default useStyles;
