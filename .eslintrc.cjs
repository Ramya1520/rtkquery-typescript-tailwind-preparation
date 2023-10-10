module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint-config-airbnb", "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  },
};