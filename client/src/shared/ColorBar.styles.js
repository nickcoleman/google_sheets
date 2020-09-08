import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
  toolbar: {
    zIndex: '-1',
    height: 50,
    backgroundColor: theme.palette.colors.green
  },
}));

export default useStyles;
