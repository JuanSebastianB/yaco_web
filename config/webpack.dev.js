const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const apiMocker = require('connect-api-mocker');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    port: 3000,
    onBeforeSetupMiddleware: ({ app }) => {
      app.use(apiMocker('/login', 'mocks/login'));
    },
  },
});
