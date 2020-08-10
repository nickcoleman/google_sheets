import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './Content.styles';

export const Card = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.container}>
      <Typography>
        Provide some info on the promotion. Duis ultrices arcu eu erat feugiat,
        in congue lorem gravida. Suspendisse potenti. Nullam varius lectus quis
        vestibulum laoreet. Duis sit amet ligula turpis. Duis ultrices arcu eu
        erat feugiat, in congue lorem gravida. Suspendisse potenti. Nullam
        varius lectus quis vestibulum laoreet. Duis sit amet ligula turpis.
      </Typography>
    </Container>
  );
};

export default Card;
