/*
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-01 16:47:15
 * @LastEditTime: 2020-06-08 17:12:04
 */ 
import Vue from 'vue'
import App from './App'
import lpContext from './context'
import md5 from 'js-md5'

Vue.prototype.$md5 = md5
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.lpContext = lpContext;  
Vue.prototype.lpConstant= lpContext.constant; 
Vue.prototype.lpFactory = lpContext.factory; 
Vue.prototype.lpUtil = lpContext.util;

const app = new Vue({
    ...App,
})
app.$mount()
