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
          icon: "add",
          title: "提交需求",
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
          icon: "friends",
          title: "我的",
          to: "/reg",
          dot: false
        }
      ],
      obj:{
        username:"lili",
        phone:123456789
      } as LoginParamsType
    };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
});
</script>
