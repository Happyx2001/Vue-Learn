<template>
  <div>
    <!-- $store.state.counter获取store中state里的counter变量 -->
    <h2>------Hello Vuex内容------</h2>
    <h2>初始计数：{{ $store.state.counter }}</h2>
    <h2>age大于20的students：</h2>
    <h2>{{ $store.getters.more20Stu }}</h2>
    <h2>age大于20的students的个数：{{ $store.getters.stuLength }}</h2>
    <h2>age大于21的students：</h2>
    <h2>{{ $store.getters.moreAgeStu(21) }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  computed: {},
};
</script>

<style>
</style>