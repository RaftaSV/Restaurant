const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const config = {
  baseUrl
};

export const ROUTES = {
  MAIN: {
    path: 'Home',
    absolutePath: '/'
  }, INDEX: {
    path: 'index',
    absolutePath: '/index'
  },
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: 'NotFound'
  }
}


export default config;
