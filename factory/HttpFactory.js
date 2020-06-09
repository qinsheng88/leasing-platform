/*
 * @Descripttion: 重构uni-app请求方法
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 08:35:47
 * @LastEditTime: 2020-06-08 17:19:01
 */ 
import context from '../context'

const GET_METHOD  = 'GET'
const POST_METHOD = 'POST'

class HttpFactory {
  constructor() {}

  _getHeader = function() {
    return {
      app_id: context.constant.app.appId,
      transaction_id: context.utils.core.getWXuuid(),
      req_time: context.utils.date.getDateYYYYMMDDHHMISS(),
      sign: '1234567',
      user_id: '-1',
      // cookie: '_leasing_token_=' + uni.getStorageSync('token')
    }
  }

  _request = function(_url, _data, _httpHeader, _method) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: _url,
        method: _method,
        header: {...this._getHeader(), ..._httpHeader},
        data: _data,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
    
  }

  // get method
  get = function(_url, _data, _httpHeader) {
    return this._request(_url, _data, _httpHeader, GET_METHOD)
  }

  // post method
  post = function(_url, _data, _httpHeader) {
    return this._request(_url, _data, _httpHeader, POST_METHOD)
  }

  // promise all

}

export default new HttpFactory()