import Vue from 'vue'
import App from './App.vue'

// Vue的产品提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render渲染：渲染 App 组件
}).$mount('#app')
