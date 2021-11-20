// store 中的 getters
export default {
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
};
