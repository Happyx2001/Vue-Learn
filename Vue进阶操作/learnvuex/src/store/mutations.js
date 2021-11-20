// store 中的 mutations
import Vue from "vue";
import { INCREMENT } from "./mutations-types";
import { DECREMENT } from "./mutations-types";
import { INCREMENTCOUNT } from "./mutations-types";
import { DECREMENTCOUNT } from "./mutations-types";

export default {
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
};
