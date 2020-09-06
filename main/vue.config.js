const path = require('path');

module.exports = {
  transpileDependencies: ['single-spa', 'qiankun', 'import-html-entry'],
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'Element'
    },
  }
};
