import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
  },
  logo: {
    margin: '20px auto',
    width: '100%',
    maxWidth: 350,
  },
  cardHeader: {
    textAlign: 'center',
  },
  media: {
    width: 100,
    height: 100,
  },
  dba: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  content: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
}));

export default useStyles;
