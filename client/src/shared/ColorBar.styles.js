import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: 50,
  },
  maroon: {
    backgroundColor: theme.palette.colors.maroon,
  },
  green: {
    backgroundColor: theme.palette.colors.green,
  },
}));

export default useStyles;
