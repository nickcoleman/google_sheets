import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  bar: {
    fontSize: '.8rem',
    height: 65,
    padding: '20px 15px',
    backgroundColor: theme.palette.colors.green,
  '&>*': {
    margin: '10px 0'
  }
  },
}));

export default useStyles;
