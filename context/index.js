/*
 * @Descripttion: 上下文对象,再其他文件调用常量 方法 时间工具类 业务服务时 只引入上下文文件
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-02 10:34:26
 * @LastEditTime: 2020-06-04 09:47:26
 */ 
import constant from '../constant'
import factory from '../factory'
import utils from '../utils'
import service from '../service'

export default {
  constant,
	utils,
  factory,
  service
}