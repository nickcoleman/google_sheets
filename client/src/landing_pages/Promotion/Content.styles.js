import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
  },
  card: {
    margin: '20px auto',
    maxWidth: 350,
  },
  cardHeader: {
    textAlign: 'center',
  },
  media: {
    width: 150,
    height: 150,
  },
  content: {
    fontFamily: 'Bebas Neue, Roboto, sans-serif',
    fontSize: '1.3em',
  },
}));

export default useStyles;
