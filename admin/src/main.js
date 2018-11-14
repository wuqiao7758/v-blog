// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 将状态管理的文件引进
import store from '@/store'

import '@/assets/image/icon/iconfont'
// 将全局的
import '@/assets/style/index'
// 如果以后做项目，vue里面的插件都是在main入口文件引入的
import VeeValidate from 'vee-validate'
// 我们在这里引入消息提示的插件
import Notifications from 'vue-notification'
Vue.use(VeeValidate)
Vue.use(Notifications)
// 加入我们的
import '@/permission'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
