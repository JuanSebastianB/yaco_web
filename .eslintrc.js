module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 0,
    'no-unreachable': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': 0,
    'eol-last': 0,
    indent: 0,
    'no-trailing-spaces': 0,
    'operator-linebreak': 0,
    'multiline-ternary': 0,
    'space-before-function-paren': 0,
    'react/prop-types': 0
  }
}
