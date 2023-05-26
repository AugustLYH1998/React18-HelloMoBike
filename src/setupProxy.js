const { createProxyMiddleware } = require('http-proxy-middleware')

// koa
module.exports = function (app) {
    // 没有太严谨,bike1  api2也可以
    app.use(/^\/bike|\/api/, createProxyMiddleware({
        target: 'http://1.116.64.64:5004/', // 信贷接口 登录
        logLevel: 'debug',
        changeOrigin: true
    }))
    // .use('/bike',
    //     createProxyMiddleware({
    //         target: 'http://1.116.64.64:5004/', // 单车项目
    //         logLevel: 'debug',
    //         changeOrigin: true
    //     }))
    
}