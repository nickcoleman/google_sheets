import {createMuiTheme} from '@material-ui/core';

const typography = {
  fontFamily: '"Roboto", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightHeavy: 700,
  useNextVariants: true,
};

const palette = {
  primary: { main: "#424242" },
  secondary: { main: "#00C853" },
  colors: {
    black: "black",
    gray: "#627675",
    maroon: "#812E54",
    green: "#00C853",
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
