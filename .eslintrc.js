module.exports = {
  env: {
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import', 'jest', 'prettier', 'promise'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',

    'consistent-return': 'warn',
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-shadow': 'warn',
    'promise/always-return': 'warn',

    'brace-style': 2,
    'max-len': ['error', { code: 150, ignoreComments: true }],
    'max-lines': ['error', 150],
    'no-console': 'error',
    'no-underscore-dangle': 0,
    'require-await': 'error',
  },
};
