<template>
  <div id="app">
    <div id="nav">
      <!-- router-link渲染出来默认是一个 a 标签 -->
      <router-link to="/">Home 首页</router-link> |
      <router-link to="/about">About 路由嵌套</router-link> |
      <!-- 动态绑定要跳转的路径 v-bind:to=    路径拼接  -->
      <router-link v-bind:to="'/user/' + userId">User 动态路由</router-link> |
      <!-- query方式传递路由参数： -->
      <router-link
        v-bind:to="{
          path: '/profile',
          query: { name: 'lisi', age: 20, height: 180 },
        }"
        >Profile 路由参数的传递</router-link
      >
    </div>
    <!-- router-view 将当前的路由映射出来 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- keep-alive 可以使被包含的组件保留状态，或者避免重新渲染 -->
  </div>
</template>

<script>
// 模拟动态路由传递的数据
export default {
  name: "App",
  data() {
    return {
      // 返回用户id ：useId
      userId: "zhangsan",
    };
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
