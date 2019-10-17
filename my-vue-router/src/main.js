import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// 导入自己的路由配置文件
import router from './zrouter.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
