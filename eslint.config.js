const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node
      }
    }
  }
];
