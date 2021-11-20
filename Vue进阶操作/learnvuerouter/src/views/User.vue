<template>
  <div class="user">
    <h1>我是用户界面，是用户相关的信息</h1>
    <h1>利用计算属性返回 userId，动态用户是{{ userName }}</h1>
    <h1>$route.params. 返回useId: {{ $route.params.userId }}</h1>
    <!-- $route为当前router跳转对象，里面可以获取name、path、query、params等 -->
  </div>
</template>

<script>
export default {
  name: "User",
  // 利用计算属性返回 userId
  computed: {
    userName() {
      // 接收活跃的路由传递过来的数据，$route是当前活跃的路由
      return this.$route.params.userId;
    },
  },
  // 利用生命周期函数 created 当Vue组件被加载时调用
  // created() {
  //   console.log("当前在用户界面");
  //   document.title = "用户";
  // },
  created() {
    console.log("User created");
  },
  destroyed() {
    console.log("User destroyed");
  },
};
</script>
