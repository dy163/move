module.exports = {
  publicPath: './', // 默认 /, 打包移动应用中需要将他配置为./
  devServer: {
    // host: '0.0.0.0',
    // port: 8080,
    https: false,
    open: true, //配置自动启动浏览器

    // 配置代理
    // proxy: {
    //   "/api": {
    //     target: "http://bourse.yidonghuayuan.com",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  }
}
