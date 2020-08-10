import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// import logo from 'assets/MartialArts.png';
import useStyles from './Header.styles';

export const Header = () => {
  const classes = useStyles();

  // <CardMedia
  //   className={classes.media}
  //   image={logo}
  //   title='Martial Arts'
  //   alt='Martial Arts'
  // />
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title='Premier Martial Arts' />
      <CardContent align='center'>
        <Typography>Empowering lives through Martial Arts</Typography>
      </CardContent>
    </Card>
  );
};

export default Header;
