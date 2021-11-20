<template>
  <div>
    <h2>我是Profile组件，路由的参数传递</h2>
    <!-- $route为当前router跳转对象，里面可以获取name、path、query、params等 -->
    <h2>{{ $route.query }}</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
    <h3>当前路径下的 ?name=lisi&age=20&height=180 就是 query</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  // 利用生命周期函数 created 当Vue组件被加载时调用
  //   created() {
  //     console.log("当前在Profile");
  //     document.title = "Profile";
  //   },
};
</script>

<style>
</style>