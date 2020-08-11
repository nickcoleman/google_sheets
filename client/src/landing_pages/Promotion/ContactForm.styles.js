import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  error: {
    color: 'red',
  },
  callingYou: {
    fontWeight: 'bold',
    color: theme.palette.colors.black,
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
