import Vue from "vue";
import Vuex from "vuex";
// 引入mutation类型常量
import { INCREMENT } from "./mutations-types";
import { DECREMENT } from "./mutations-types";
import { INCREMENTCOUNT } from "./mutations-types";
import { DECREMENTCOUNT } from "./mutations-types";

// 1. 安装VUex插件
Vue.use(Vuex);

// a模块，模块需要放到store对象上面
const modulesA = {
  state: {
    name: "张三",
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit("updateName", "王五");
        console.log(context);
      }, 1000);
    },
  },
  getters: {
    fullName(state) {
      return state.name + "fullName1";
    },
    fullName2(state, getters) {
      return getters.fullName + "fullName2";
    },
    // 模块a中的getters 调用store对象里的state、getters:
    // rootstate就是 store对象 中的state
    fullName3(state, getters, rootstate) {
      return getters.fullName2 + rootstate.counter;
    },
  },
};

// 2. 创建对象
const store = new Vuex.Store({
  // state保存公共对象(数据)
  state: {
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
  },

  // mutations保存公共方法，可以改变state中的属性，只能是同步方法（里面的方法，第一个参数都是state）
  mutations: {
    // PS：部分使用了mutations类型常量
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    // mutations 携带其他参数的方式 ↓
    [INCREMENTCOUNT](state, count) {
      state.counter += count;
      console.log(count);
    },
    // mutations 携带的参数payload为对象时
    [DECREMENTCOUNT](state, payload) {
      state.counter -= payload.count;
      console.log(payload);
    },
    changeDateInfo(state) {
      console.log("改变数据");
      state.info.name = "盖亚";
      // state.info["address"] = "M78星云"; 无法做到响应式

      // vue响应式 添加、删除 state中的数据(属性)
      Vue.set(state.info, "address", "M78星云"); // (state中的成员, 要添加的属性, 要添加的属性值)
      Vue.delete(state.info, "height");
    },
  },

  // actions类似于mutation，是用来替代mutation进行异步操作的，例如：网络请求
  actions: {
    // 普通方式的actions方法提交 mutation的方法
    // actions中的方法接收context参数
    // context：上下文
    aUpdateInfo(context, payload) {
      // 用setTimeout模拟异步任务，并且在异步任务中提交 changeDateInfo 方法
      setTimeout(() => {
        context.commit("changeDateInfo");
        console.log(payload.message);
        payload.success();
      }, 1000);
    },
    // actions里面的函数还可以返回 promise 对象，
    bUpdateInfo(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("changeDateInfo");
          console.log(payload);
          resolve("promise返回成功");
        }, 1000);
      });
    },
  },

  // getters保存对state公共数据进行操作的函数，但不改变state中的属性
  getters: {
    doubleCounter(state) {
      return state.counter * state.counter;
    },
    more20Stu(state) {
      return state.students.filter((s) => s.age > 20);
    },
    stuLength(state, getters) {
      // 调用 getters 中的 more20age 方法
      return getters.more20Stu.length;
    },
    moreAgeStu(state) {
      // 第一个return中的 ages参数 是调用 moreAgeStu(参数) 函数时里面的参数
      return (ages) => {
        return state.students.filter((s) => s.age > ages);
      };
    },
  },

  // store模块modules：
  modules: {
    // 将 modulesA 作为模块 a 使用
    a: modulesA,
  },
});

// 3. 导出 store 对象
export default store;
