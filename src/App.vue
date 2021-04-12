<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home"  activeColor='blue'>
        <img slot="item-icon" src="./assets/image/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item link="/category">
        <img slot="item-icon" src="./assets/image/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="./assets/image/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="./assets/image/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./components/content/tabbar/tabbar";
import TabBarItem from "./components/content/tabbar/tabbaritem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
