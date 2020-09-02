import React from 'react';

import useStyles from './Footer.styles';

const Footer = ({logo}) => {
  const classes = useStyles();
  return (
    <footer className={classes.bar}>
      <div>
        <a href="/terms">Terms of Service and Privacy Policy</a>
      </div>
      <div>
        <a href="https://refinedharmonypremier.com">Refined Harmony Premier</a> 
        {' '}doing business as{' '}
        <a href="https://pmautah.com">Premier Martial Arts</a>
      </div>
    </footer>
  );
};

export default Footer;
