import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: '1 0 auto',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '1.5em',
    padding: '20px 0px',
  },
  link: {
    fontSize: '1.25em',
    color: 'blue',
  },
}));

export default useStyles;
