<template>
  <!-- 封装TabBar组件 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
// 暴露组件
export default {
  name: "TabBar",
};
</script>

<style>
/* 组件的css */
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>