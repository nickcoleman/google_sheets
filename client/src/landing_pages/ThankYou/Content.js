import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';

// import Facebook from 'mdi-material-ui/Facebook';
// import Instagram from 'mdi-material-ui/Instagram';
import useStyles from './Content.styles';

export const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container} align="center">
      <Typography className={classes.title}>
        Congratulations you are now entered into our monthly giveaway! We will
        be contacting you soon to schedule or confirm your free appointment!
      </Typography>

      <Button id="cta-thankyou" href="/learnmore" className={classes.cta}>
        {`Click here
Learn more about Premier Martial Arts Utah`}
      </Button>
    </Container>
  );
};

export default Content;
