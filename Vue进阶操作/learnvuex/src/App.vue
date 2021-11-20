<template>
  <div id="app">
    <h2>------App内容（简易计数器）------</h2>
    <!-- $store.state.counter获取store中state里的counter变量 -->
    <h2>初始计数：{{ count }}</h2>
    <h2>平方计数：{{ $store.getters.doubleCounter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="deCount(5)">-5</button>
    <!-- <button @click="subtraction">-5</button> -->
    <h2>students的数据：</h2>
    <div>{{ $store.state.students }}</div>
    <hello-vuex></hello-vuex>
    <h2>------Vuex数据的响应式原理------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="changeDateInfo">通过mutation同步改变数据</button>
    <br />
    <button @click="updateInfo">通过actions异步改变数据</button>
    <br />
    <button @click="updateInfo_promise">
      通过actions异步改变数据(使用promise)
    </button>
    <h2>------Vuex：module中的内容------</h2>
    <!-- 获取模块a中的state中的属性 -->
    <h2>模块a中的state：{{ $store.state.a.name }}</h2>
    <!-- 使用模块a中的mutations -->
    <button @click="updateName">修改名字</button>
    <!-- 使用模块a中的getters -->
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <!-- 使用模块a中的actions -->
    <button @click="asyncUpdateName">异步修改信息</button>

    <h2>------------Vue中axios模块的使用-------------------</h2>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
// 引入mutation常量
import { INCREMENT } from "./store/mutations-types";
import { DECREMENT } from "./store/mutations-types";
import { INCREMENTCOUNT } from "./store/mutations-types";
import { DECREMENTCOUNT } from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  computed: {
    count() {
      // $store.state.counter获取store中state里的counter变量
      return this.$store.state.counter;
    },
  },
  methods: {
    // 使用mutation公共方法需要调用 this.$store.commit() “提交” 方法, 来更新 Vuex 中的store
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit(DECREMENT);
    },
    changeDateInfo() {
      this.$store.commit("changeDateInfo");
    },
    // count为接收的参数
    addCount(count) {
      // 提交方法，传递参数
      this.$store.commit(INCREMENTCOUNT, count);
    },
    deCount(count) {
      // mutation的提交风格
      // 1. 普通的提交风格 ↓ （提交的参数 就是参数本身）
      // this.$store.commit("decrementCount", count);

      // 2. 特殊的提交风格 ↓ （提交的参数 是包含了 type 和 count 的参数对象)
      this.$store.commit({
        type: DECREMENTCOUNT,
        count,
      });
    },
    updateInfo() {
      // 使用actions里的方法，需要使用this.$store.dispatch('目标方法', payload)
      this.$store.dispatch("aUpdateInfo", {
        // 将一个对象作为 payload 传递过去
        message: "我是携带的信息",
        success: () => {
          console.log("里面已经完成了");
        },
      });
    },
    updateInfo_promise() {
      this.$store.dispatch("bUpdateInfo", "我是携带的信息").then((res) => {
        console.log("里面完成了提交");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "李四");
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
