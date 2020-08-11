import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // flexShrink: 0,
    marginTop: 50,
  },
  imageBox: {
    margin: '20px auto',
    maxWidth: 350,
  },
  media: {
    width: '90%',
    height: 'auto',
  },
  content: {},
}));

export default useStyles;
