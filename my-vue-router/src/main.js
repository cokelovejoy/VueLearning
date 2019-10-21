import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// 导入自己的路由配置文件
import router from './zrouter.js'

// import store from './vuex/store.js'
// 导入自己的store配置文件
import store from './zstore.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
