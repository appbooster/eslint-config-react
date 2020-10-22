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
    'react/jsx-no-undef': 2,
    'react/jsx-no-bind': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
  ],
  overrides: [{
    files: ['**/*.test.js'],
    env: {
      'jest/globals': true,
    },
  }],
}
