// 配置Vue相关的设置
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index"; // 引入路由 router

Vue.config.productionTip = false;

// 将各种配置挂载到Vue实例上：
new Vue({
  render: (h) => h(App),
  router, // 为Vue实例添加路由 router, 没有则使用不了router相关的操作
}).$mount("#app");
