import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const Card = () => {
  return (
    <Container maxWidth='md' style={{margin: '20px auto'}}>
      <Typography>
        Duis ultrices arcu eu erat feugiat, in congue lorem gravida. Suspendisse
        potenti. Nullam varius lectus quis vestibulum laoreet. Duis sit amet
        ligula turpis. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Nam pellentesque nisl augue. Maecenas
        ultrices nisl vel congue cursus. Mauris hendrerit nibh sodales nibh
        imperdiet mollis molestie id justo. In gravida orci arcu, quis dictum
        ante viverra vel. Integer dolor enim, volutpat eget efficitur sed,
        finibus eu orci.
      </Typography>
    </Container>
  );
};

export default Card;
