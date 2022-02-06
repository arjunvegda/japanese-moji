module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 10,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier"
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'jest'
  ],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ["error", { allow: ["warn", "info", "error"] }],
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'tsdoc/syntax': 'warn',
    'arrow-body-style': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        trailingUnderscore: 'allow',
      },
    ],
  },
};
