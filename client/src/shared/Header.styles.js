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
    width: 150,
    height: 150,
  },
}));

export default useStyles;
