import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// 导入封装好的axios request模块
import { request } from "./network/request";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

// 使用封装好的request模块
request({
  url: "/",
})
  // 由于返回的是一个promise对象，所以可以使用 then 和 catch
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
