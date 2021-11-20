<template>
  <!-- MainTabBar： TabBar的主组件 -->
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/首页.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/首页_2.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/分类.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/分类_2.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/购物车.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/购物车_2.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/我的.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/我的_2.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue";
import TabBarItem from "@/components/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>