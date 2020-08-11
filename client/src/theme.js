import {createMuiTheme} from '@material-ui/core';

const typography = {
  fontFamily: '"Oswald", "Open Sans", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightHeavy: 700,
  useNextVariants: true,
};

const palette = {
  primary: {main: '#424242'},
  secondary: {main: '#00C853'},
  colors: {
    black: 'black',
    gray: '#627675',
    maroon: 'rgb(112, 19, 112)',
  },
};

const overrides = {};

const breakpoints = {};

const defaultTheme = {
  breakpoints,
  palette,
  typography,
  overrides,
};

export default createMuiTheme({...defaultTheme});
