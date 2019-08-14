// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.prototype.$api = api; // 将api挂载到vue的原型上
import Cube from 'cube-ui'
import '@/utils/bridge';
import 'lib-flexible/flexible'
import '@/css/reset.css';
import base from './utils/base'
Vue.use(base)
Vue.use(Cube)
import store from './store' // 导入vuex文件
import api from './api' // 导入api接口
//复制到粘贴板
import Clipboard from 'clipboard';
Vue.prototype.Clipboard = Clipboard;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');