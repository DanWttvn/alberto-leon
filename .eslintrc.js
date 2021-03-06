module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'commonjs': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'react/prop-types': [
      'off'
    ],
    'no-extra-boolean-cast':[
      'off'
    ],
    'no-unused-vars': 'warn',
    'padded-blocks': [
      'off',
      'never'
    ],
    'block-spacing': [
      'warn',
      'always'
    ],
    'array-bracket-spacing': [
      'warn',
      'always'
    ],
    'no-irregular-whitespace': [
      'off',
      'never'
    ]
  }
}
