<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 引入TabBar组件
import MainTabBar from "@/components/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/* 引入css样式 */
@import "./assets/css/base.css";
</style>
