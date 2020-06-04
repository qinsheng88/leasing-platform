/*
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-04 09:43:51
 * @LastEditTime: 2020-06-04 10:36:37
 */ 
import context from '../../context'

class HomeService {
  
  constructor() {}

  getPageListAllSearch() {
    const { http } = context.factory
    const url = '/api/FanChan/FYXXB/GetPageListAllSearch_fyzs'
    const data = http.get(url, {
      pagination: {"page": 1,"rows": 10,"sidx":"up_at", "sord":"desc"},
      queryJson: {"status": 1,"category": 2,"up_status": 2}
    })
  }
}

export default new HomeService();