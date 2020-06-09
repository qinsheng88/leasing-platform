/*
 * @Descripttion: webpack配置文件
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 16:00:45
 * @LastEditTime: 2020-06-05 19:23:34
 */ 
const webpackApiMocker = require('webpack-api-mocker')
const path = require('path') //PS 运行路径：'D:\software\HBuilderX\plugins\uniapp-cli\mocker\index.js'
module.exports = {
  devServer: {
    open: true, //在运行自动打开浏览器
    host: "localhost", //主机号
    port: 8080, //端口号
    https: false, //是否以https模式启动
    proxy: {  
      '/api': {
        'target': "http://113.16.255.12:13009", //http://113.16.255.12:13009  //192.168.1.57:12345  //192.168.1.126:20472
        'changeOrigin' : true,  //是否跨域
        'secure' : false,  // 设置支持https协议的代理
        'pathRewrite': {
          '^/api': ''
        }
      }
    }
    ,
    before (app) {
      webpackApiMocker(app, path.resolve('./mocker/index.js'))
    }
  }
}
