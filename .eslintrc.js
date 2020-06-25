module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": 0,
    "indent": 0,
    "no-tabs": 0,
    "react/jsx-indent": 0,
    "import/extensions": 0,
    "react/no-unknown-property": 0,
    "react/self-closing-comp": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/button-has-type": 0,
    "linebreak-style": 0,
    "camelcase": 0,
    "arrow-body-style": 0,
    "no-alert": 0,
    "react/prop-types": 0,
    "no-useless-return": 0,
    "consistent-return": 0,
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
  },
};
