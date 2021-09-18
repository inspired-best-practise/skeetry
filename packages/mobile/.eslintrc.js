module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    curly: 0,
    'no-bitwise': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
