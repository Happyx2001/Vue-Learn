import Vue from "vue";
import Vuex from "vuex";
// 引入mutation类型常量
// import { INCREMENT } from "./mutations-types";
// import { DECREMENT } from "./mutations-types";
// import { INCREMENTCOUNT } from "./mutations-types";
// import { DECREMENTCOUNT } from "./mutations-types";

// 导入store的核心
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import modulesA from "./modules/modulesA";

// 1. 安装VUex插件
Vue.use(Vuex);

// store中的state 一般情况下state直接写在index中即可
const state = {
  counter: 0,
  students: [
    { id: 100, name: "张三", age: 21 },
    { id: 101, name: "李四", age: 19 },
    { id: 102, name: "王五", age: 22 },
  ],
  info: {
    name: "迪迦",
    age: "未知",
    height: "很高",
  },
};

// 2. 创建对象
const store = new Vuex.Store({
  // state保存公共对象(数据)
  state,

  // mutations保存公共方法，可以改变state中的属性，只能是同步方法（里面的方法，第一个参数都是state）
  mutations,

  // actions类似于mutation，是用来替代mutation进行异步操作的，例如：网络请求
  actions,

  // getters保存对state公共数据进行操作的函数，但不改变state中的属性
  getters,

  // store模块modules：
  modules: {
    // 将 modulesA 作为模块 a 使用
    a: modulesA,
  },
});

// 3. 导出 store 对象
export default store;
