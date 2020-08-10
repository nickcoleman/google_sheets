import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import logo from 'assets/MartialArts.png';
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
      <CardHeader
        className={classes.cardHeader}
        title='Empowering lives through Martial Arts'
      />
    </Card>
  );
};

export default Header;
