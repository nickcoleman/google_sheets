import { createMuiTheme } from "@material-ui/core";

const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightHeavy: 700,
  useNextVariants: true,
};

const palette = {
  primary: { main: '#424242' },
  secondary: { main: '#00C853' }
}

const overrides = {}

const breakpoints = {}

const defaultTheme = {
  breakpoints,
  palette,
  typography,
  overrides,
}

export default createMuiTheme({ ...defaultTheme });