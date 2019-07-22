const { override, fixBabelImports } = require('customize-cra');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = override(
   fixBabelImports('import', {
    libraryDirectory: 'es',
    style: 'css',
  }),
);