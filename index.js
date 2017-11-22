module.exports = {
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalDecorators: true,
    },
  },
  rules: {
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
  },
  plugins: [
    'react',
    'jest',
  ],
  overrides: {
    files: ['**/*.test.js'],
    env: {
      'jest/globals': true,
    },
  },
}
