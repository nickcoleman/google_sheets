import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  formGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  formLabel: {
    fontWeight: 'bold',
    color: theme.palette.colors.black,
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
