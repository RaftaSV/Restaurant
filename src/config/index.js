const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const config = {
  baseUrl
};

export const ROUTES = {
  MAIN: {
    path: 'Home',
    absolutePath: '/'
  }, SPECIAL: {
    path: 'SpecialPlatters',
    absolutePath: '/SpecialPlatters'
  }, BREAKFAST: {
    path: 'breakfast',
    absolutePath: '/breakfast'
  }, CHICKEN: {
    path: 'chicken',
    absolutePath: '/chicken'
  }, RICE: {
    path: 'rice',
    absolutePath: '/rice'
  }, TYPICAL: {
    path: 'typical',
    absolutePath: '/typical'
  }, SEAFOOD: {
    path: 'seafood',
    absolutePath: '/seafood'
  },
  SOUPS: {
    path: 'soups',
    absolutePath: '/soups'
  }, KIDS: {
    path: 'kids',
    absolutePath: '/kids'
  },
  BEVERAGES: {
    path: 'beverages',
    absolutePath: '/beverages'
  },
  CONTACT: {
    path: 'Contact',
    absolutePath: 'Contact'
  },
  QR: {
    path: 'QR',
    absolutePath: 'Ordenes'
  },
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: 'NotFound'
  }
}


export default config;
