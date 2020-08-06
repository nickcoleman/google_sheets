import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Card = () => {
  return (
    <Container maxWidth='md'>
      <Grid container direction='column' spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Duis ultrices arcu eu erat feugiat, in congue lorem gravida.
            Suspendisse potenti. Nullam varius lectus quis vestibulum laoreet.
            Duis sit amet ligula turpis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nam
            pellentesque nisl augue. Maecenas ultrices nisl vel congue cursus.
            Mauris hendrerit nibh sodales nibh imperdiet mollis molestie id
            justo. In gravida orci arcu, quis dictum ante viverra vel. Integer
            dolor enim, volutpat eget efficitur sed, finibus eu orci.
          </Typography>
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Typography>
            Nullam sit amet ullamcorper dolor. Maecenas egestas quam eget velit
            suscipit faucibus. Vestibulum gravida mi vel tincidunt malesuada.
            Aliquam vel eros ut diam blandit ullamcorper hendrerit vitae augue.
            Ut pharetra eros sit amet nisl laoreet accumsan. Etiam varius
            egestas ligula id rutrum. Sed mauris est, maximus ac neque ac,
            molestie vulputate nunc. Vivamus lacus lectus, porta a risus in,
            efficitur aliquet ante. Integer purus lorem, dignissim in turpis
            quis, sollicitudin consectetur quam. Nam mattis turpis tempor ex
            consectetur sodales. Mauris maximus ipsum non est venenatis
            lobortis. Nam id ornare sapien. Cras varius hendrerit finibus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Card;
