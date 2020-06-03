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
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": 'off',
    "react/jsx-props-no-spreading": 'off',
    "react/sort-comp": 'off',
    "import/prefer-default-export": 'off'
  },
  overrides: [
    {
      files: './server/server.js',
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'no-console': 'off',
      }
    },
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/__mocks__/**/*",
      ],
      env: {
        jest: true,
      }
    }
  ]
};
