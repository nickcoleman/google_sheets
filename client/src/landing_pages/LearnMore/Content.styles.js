import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: "64px", 
    backgroundColor: "#20AE4B", 
    zIndex: -1 
  },
  container: {
    padding: theme.spacing(2),
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
    fontSize: '1em',
    color: theme.palette.colors.green,
  },
  img: {
    height: 'auto',
    width: '100%',
  },
  logo: {
    display: 'block',
    height: 'auto',
    width: '70%',
    margin: '10px auto 20px'
  },
  footer: {
    textAlign: 'center'
  }
}));

export default useStyles;
