// 配置路由相关的信息
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2. 创建VueRouter路由对象
const routes = [
  {
    // 对应路径
    path: "/", // '/' 表示项目默认是 Home 页面
    name: "Home",
    // 对应组件
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 下面就是路由懒加载的应用
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // 设置路由嵌套: About路由下的子路由
    children: [
      // 嵌套的默认路径
      {
        path: "",
        redirect: "news",
      },
      {
        path: "news",
        component: () => import("../components/AboutNews"),
      },
      {
        path: "message",
        component: () => import("../components/AboutMessage"),
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("../components/Profile"),
    meta: {
      title: "Profile",
    },
  },
  // 配置动态路由路径 path:'/user/:userId'
  {
    path: "/user/:userId",
    name: "User",
    // 下面就是路由懒加载的应用
    component: () => import("../views/User.vue"),
    meta: {
      title: "User",
    },
  },
];

const router = new VueRouter({
  // 配置路由和组件之间的应用关系  表示 mode: 'history' 模式
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全局前置守卫：beforeEach是一个钩子函数(), 路由跳转前回调，to指向的是将要跳转的路由, 且next()必须调用
//  -----用法1. 可以快速设置当前页面的标题----
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // 由于子路由中的meta属性会和父路由中的meta属性，一起存放在matched数组中
  // 因此matched[0]会取得第一个也就是父路由的meta属性
  document.title = to.matched[0].meta.title;
  next();
});

// 3. 将router对象传入到Vue实例
export default router;
