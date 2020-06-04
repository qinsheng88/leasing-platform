/*
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 16:00:45
 * @LastEditTime: 2020-06-03 17:42:26
 */ 
// import proxy from './mock/index'
// const path = require('path')
// const webpackApiMocker = require('mocker-api');
// D:/web/uniApp/leasing-platform/mock 
module.exports = {
  devServer: {
    open: true, //在运行自动打开浏览器
    host: "localhost", //主机号
    port: 8080, //端口号
    https: false, //是否以https模式启动
    proxy: {  
      '/api': {
        'target': "http://113.16.255.12:13009", //http://113.16.255.12:13009/FanChan/FYXXB/GetIndexGpList  //192.168.1.57:12345  //192.168.1.126:20472
        'changeOrigin' : true,  //是否跨域
        'secure' : false,  // 设置支持https协议的代理
        'pathRewrite': {
          '^/api': ''
        }
      }
    }
    // ,
    // before (app) {
    //   webpackApiMocker(app, path.resolve('./mock/index.js'))
    // }
  }
}
