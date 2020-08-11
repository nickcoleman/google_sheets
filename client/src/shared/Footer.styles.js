import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flexShrink: 0,
    marginTop: 50,
  },
  card: {
    margin: '20px auto',
    maxWidth: 350,
  },
  media: {
    width: 'auto',
    height: 60,
  },
  content: {},
}));

export default useStyles;
