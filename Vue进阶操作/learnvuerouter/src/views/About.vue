<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 路由嵌套：设置嵌套路径 -->
    <router-link to="/about/news" tag="button">新闻</router-link>
    <router-link to="/about/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  // 利用生命周期函数 created 当Vue组件被加载时调用
  // created() {
  //   console.log("当前在About页面");
  //   document.title = "About";
  // },
};
</script>

