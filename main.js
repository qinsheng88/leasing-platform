import Vue from 'vue'
import App from './App'
import lpContext from './context'

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
