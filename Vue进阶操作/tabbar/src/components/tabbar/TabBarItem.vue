<template>
  <!-- 所有item都展示一个图片和文字，用两个具名插槽 -->
  <!-- 给item设置点击事件，切换视图 -->
  <div class="tab-bar-item" @click="itemClick">
    <!-- 插槽一般需要装到一个div盒子中 方便进行类似 v-if 的操作 ↓ -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      // TabBarItem组件颜色动态控制
      // 在当前的活跃路由路径中 查找是否有 自身组件的path
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    //   设置点击事件函数
    itemClick() {
      //   this.$router.push(this.path) 点击之后在路由路径加上 自身组件的path
      this.$router.push(this.path).catch((err) => err);
      console.log(this.$route.path, this.$router);
    },
  },
};
</script>

<style scoped>
/* 设置插槽样式 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>