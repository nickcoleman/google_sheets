import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '20px auto',
    maxWidth: 350,
  },
  cardHeader: {
    textAlign: 'center',
  },
  media: {
    width: 300,
    height: 195,
  },
}));

export default useStyles;
