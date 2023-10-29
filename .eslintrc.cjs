module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['#src', './src'],
        ],
      },
    },
  },
};
