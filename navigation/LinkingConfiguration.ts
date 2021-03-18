import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              Dasboard: 'dashboard',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'list',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
