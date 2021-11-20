<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  // 利用生命周期函数 created 当Vue组件被加载时调用
  // created() {
  //   console.log("当前在首页");
  //   document.title = "首页";
  // },
  // 路由被加载前调用
  created() {
    console.log("Home created");
  },
  // 路由被销毁前调用
  destroyed() {
    console.log("Home destroyed");
  },
};
</script>
