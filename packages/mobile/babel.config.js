module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          _app: './src',
          _assets: './assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
