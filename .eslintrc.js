module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 8,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
