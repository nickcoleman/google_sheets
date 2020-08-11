import React, {Fragment} from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './ColorBar.styles';

export const Header = () => {
  const classes = useStyles();

  return <Toolbar className={classes.toolbar} />;
};

export default Header;
