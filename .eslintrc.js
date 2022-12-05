module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    tsconfigRootDir: "./",
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'promise'
  ],
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': 'webpack',
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      },
    },
  },
};
