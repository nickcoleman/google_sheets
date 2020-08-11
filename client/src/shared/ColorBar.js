import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './ColorBar.styles';

export const ColorBar = ({backgroundColor}) => {
  const classes = useStyles();

  return <Toolbar className={classes.toolbar} />;
};

ColorBar.propTypes = {
  backgroundColor: PropTypes.string,
};

export default ColorBar;
