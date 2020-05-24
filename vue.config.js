const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        src: path.join(__dirname, 'src'),
        '@': path.join(__dirname, 'src/GUI'),
        '@@': path.join(__dirname, 'src/GUI/components'),
      },
    },
  },
};
