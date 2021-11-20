// store中模块的 modulesA
export default {
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
