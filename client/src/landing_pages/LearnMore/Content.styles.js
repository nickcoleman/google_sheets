import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  content: {
    margin: '0px auto',
  },
  iconButton: {
    margin: theme.spacing(1),
  },
  location: {
    paddingLeft: theme.spacing(1),
  },
}));

export default useStyles;
