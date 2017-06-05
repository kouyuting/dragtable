// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['vue'],
  // required to lint *.vue files
  plugins: [
    'vuefix'
  ],
  // add your custom rules here
  'rules': {
    'vuefix/vuefix': [2, {"auto": true}],
    'vue/jsx-uses-vars': 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": ["error", 4],
  }
}
