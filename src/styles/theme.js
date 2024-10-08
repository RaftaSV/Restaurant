

const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  bgCard: 'rgba(209,155,123,0.28)',
  text: '#000000',
  nav: '#131313',
  modal: 'rgba(0, 0, 0, 0.1)',
  bgModal: 'white',
  input: '#F5F5F5',
  shadowInput: 'rgb(224, 224, 224)',
  Separator : 'rgba(225,114,205,0.24)',
  nameProduct: '#56321f',
  button: '#eca51e',
  price: 'rgba(206,60,97,0.53)',
};

const colorsDark = {
  ...colorsLight,
  background: '#000000',
  text: '#ffffff',
  bgCard: 'rgba(157,59,154,0.18)',
  nav: 'rgba(12,12,12,0.56)',
  bgModal: '#161616',
  input: '#161616',
  shadowInput: 'rgb(77, 77, 77)',
  Separator : 'rgba(221,114,225,0.47)',
  nameProduct: 'rgba(253,125,225,0.53)',
  price: 'rgba(191,60,206,0.37)',
  button: '#c08103',
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30
};

export const mediaQueries = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px) and (max-width: 1024px)',
  desktop: '@media screen and (min-width: 1025px)',
};

export const themeLight = {
  colors: colorsLight,
  zIndex
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark
};
