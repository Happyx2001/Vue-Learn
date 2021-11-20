// vue.config.js文件：vue的自定义配置文件，需要自定义配置时，就得在该文件下面修改

module.exports = {
    publicPath: "./",//打包后的位置(如果不设置这个静态资源会报404)
    // publicPath: process.env.NODE_ENV === "production" ? "http://47.92.237.225:8080/dist" : "./",
    outputDir: "dist",//打包后的目录名称
    assetsDir: "static",//静态资源目录名称
    productionSourceMap: false,  //去掉打包的时候生成的map文件
    lintOnSave: true,
    filenameHashing: false,
    devServer: {
        //sockHost: "http://192.168.2.22:8080/",
        //disableHostCheck: true,
        host: "0.0.0.0",  //不清楚主机和目的网络
        port: 8080, // 源地址端口，自行修改
       // disableHostCheck: true,
        //hotOnly: false,
       // useLocalIp: false,
               proxy: {
            '/api': {
                target: "http://localhost:8888",//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                    //这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
                    //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
                }
            }
        }
    }
}