import Vue from "vue";
import VueRouter from "vue-router";

// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home/Home"),
  },
  {
    path: "/category",
    component: () => import("../views/category/Category"),
  },
  {
    path: "/cart",
    component: () => import("../views/cart/Cart"),
  },
  {
    path: "/profile",
    component: () => import("../views/profile/Profile"),
  },
];

const router = new VueRouter({
  // 配置路由和组件之间的应用关系  表示 mode: 'history' 模式
  mode: "history",
  routes,
});

// 3. 导出router
export default router;
