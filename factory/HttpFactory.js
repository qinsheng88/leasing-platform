/*
 * @Descripttion: 重构uni-app请求方法
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 08:35:47
 * @LastEditTime: 2020-06-02 13:13:34
 */ 
class HttpFactory {
  constructor() {}

  // http get method
  getSync(_httpHeader, _url, _data) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: _url,
        method: 'GET',
        header: _httpHeader,
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

  // http post method
  postSync(_httpHeader, _url, _data) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: _url,
        method: 'POST',
        header: _httpHeader,
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
}

export default new HttpFactory()