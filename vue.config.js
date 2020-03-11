module.exports = {  
    devServer: {
        // host: '0.0.0.0',
        // port: 8080,
        https: false,
        open: true, //配置自动启动浏览器
        
        // 配置代理
        proxy: {
            "/api": {
                target: "http://bourse.yidonghuayuan.com", //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                  "^/api": "" // 去掉接口地址中的api字符串
                }      
            }
        }
    }
}