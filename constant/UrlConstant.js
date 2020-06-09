/*
 * @Descripttion: url常理
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 09:02:48
 * @LastEditTime: 2020-06-09 11:12:20
 */ 

// 测试服务器地址
// const baseUrl = 'http://113.16.255.12:13009';

// 生产服务器地址
// const baseUrl = 'http://www.baidu.com:8080'; 

// 本地地址
const baseUrl = '/'


// 主页数据请求URL--开始: 

// 轮播图
const carouselUrl = baseUrl + 'mock/carouse.json'

// 主页数据请求URL--结束: 



// ‘我的’数据请求URL--开始

// ‘我的’数据请求URL--结束


// 登录数据请求URL--开始 
const loginByCert  = '/api/FanChan/Default/LoginToken' // 身份证 + 密码 登录接口
const loginByPhone = '/api/FanChan/Default/LoginTokenByPhone' // 手机号码 + 密码 登录接口
const loginByCode  = '/api/FanChan/Default/LoginTokenDiyZjhmPhone' // 手机号码 + 验证码 登录接口
// 登录数据请求URL--结束

export default {
  carouselUrl,
  loginByCert,
  loginByPhone,
  loginByCode
}
