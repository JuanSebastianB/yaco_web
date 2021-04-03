const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
/*    app.use(
        '/site',
        createProxyMiddleware({
            target: 'http://localhost:9000',
            changeOrigin: true,
        })
    );*/
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:9090',
      changeOrigin: true,
    })
  );
};