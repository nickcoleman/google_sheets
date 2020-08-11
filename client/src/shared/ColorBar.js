import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './ColorBar.styles';

export const ColorBar = () => {
  const classes = useStyles();

  return <Toolbar className={classes.toolbar} />;
};

export default ColorBar;
