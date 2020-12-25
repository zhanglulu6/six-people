<template>
  <div class="home" >
    <router-view></router-view>
    <van-tabbar v-model="active" route :placeholder="true" :fixed="true" active-color="#27d461">
      <van-tabbar-item
        v-for="item in footerList"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.title }}
      </van-tabbar-item>
      <img src="../assets/首页底部.png" class="home-img" @click="goToRemand" />
      <span @click="goToRemand">提交需求</span>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { LoginParamsType } from "../interface/index";
export default defineComponent ({
  data() {
    return {
      // active: 0,
      // 底部渲染可以 循环的数据
      footerList: [
        {
          icon: "wap-home",
          title: "首页",
          to: "/index",
          dot: false
        },
        {
          icon: "location",
          title: "目的地",
          to: "/address",
          dot: false
        },
        {
          // icon: "add",
          // title: "提交需求",
          to: "/demand",
          dot: false
        },
        {
          icon: "label",
          title: "每周推荐",
          to: "/reason",
          dot: false
        },
        {
          // 点击我的跳转登录页面，如果有之前注册的就直接登录，上一次没有注册的就跳转注册页面注册结束之后再登录
          icon: "friends",
          title: "我的",
          to: "/mine",
          dot: false
        }
      ],
      // obj:{
      //   username:"lili",
      //   phone:123456789
      // } as LoginParamsType
    };
  },
  methods: {
    goToRemand() {
      return this.$router.push("/demand")
    }
  },
  setup() {
    const active = ref(0);
    return { active };
  },
});
</script>

<style lang="stylus" scoped>
.home img
  width 35px
  height 35px
  position absolute
  top -8px
  left 45%
  z-index 222222

.home span
  position absolute
  top 29px
  left 43%
  font-size 0.32rem
  color rgb(100, 101, 102)
</style>
