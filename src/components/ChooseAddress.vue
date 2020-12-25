<template>
  <div class="choose">
    <!-- 选择目的地的头部 -->
    <van-nav-bar title="选择目的地" left-arrow @click-left="onClickLeft" :fixed="true" :placeholder="true">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 选择目的地 -->
    <van-tree-select style="height: 100%;"
      v-model:active-id="state.activeId"
      v-model:main-active-index="state.activeIndex"
      :items="items"
    />

    <!-- 选择地的底部 -->
    <div class="content">确认</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { reactive } from 'vue';
export default defineComponent ({
   setup() {
    const state = reactive({
      activeId: 1,
      activeIndex: 0,
    });
    const items = [
      {
        text: '江浙沪',
        children: [
          { text: '杭州', id: 1 },
          { text: '上海', id: 2 },
          { text: '苏州', id: 3 },
        ],
      },
      {
        text: '云南',
        children: [
          { text: '大理', id: 4 },
          { text: '丽江', id: 5 },
          { text: '西双版纳', id: 6 },
          { text: '香格里拉', id: 7 },
        ],
      },
      {
        text: '贵州',
        children: [
          { text: '黄果树', id: 8 },
          { text: '贵阳', id: 9 },
          { text: '镇远', id: 10 },
          { text: '荔波', id: 11 }, 
        ],
      },
      {
        text: '黑龙江',
        children: [
          { text: '雪乡', id: 12 },
          { text: '亚布力', id: 13 },
          { text: '哈尔滨', id: 14 },
        ],
      },
      {
        text: '四川',
        children: [
          { text: '九寨沟', id: 15 },
          { text: '成都', id: 16 },
          { text: '峨眉山', id: 17 },
          { text: '稻城', id: 18 },
          { text: '色达', id: 19 },
        ],
      },
      {
        text: '广西',
        children: [
          { text: '桂林', id: 20 },
          { text: '阳朔', id: 21 },
          { text: '北海', id: 22 },
          { text: '德天瀑布', id: 23 },
        ],
      },
       {
        text: '江浙沪',
        children: [
          { text: '杭州', id: 24 },
          { text: '上海', id: 25 },
          { text: '苏州', id: 26 },
        ],
      },
      {
        text: '云南',
        children: [
          { text: '大理', id:27 },
          { text: '丽江', id: 28 },
          { text: '西双版纳', id: 29 },
          { text: '香格里拉', id: 30 },
        ],
      },
      {
        text: '贵州',
        children: [
          { text: '黄果树', id: 31 },
          { text: '贵阳', id: 32 },
          { text: '镇远', id: 33 },
          { text: '荔波', id: 34 }, 
        ],
      },
      {
        text: '黑龙江',
        children: [
          { text: '雪乡', id: 35 },
          { text: '亚布力', id: 36 },
          { text: '哈尔滨', id: 37 },
        ],
      },
      {
        text: '四川',
        children: [
          { text: '九寨沟', id: 38 },
          { text: '成都', id: 39 },
          { text: '峨眉山', id: 40 },
          { text: '稻城', id: 41 },
          { text: '色达', id: 42 },
        ],
      },
      {
        text: '广西',
        children: [
          { text: '桂林', id: 43 },
          { text: '阳朔', id: 44 },
          { text: '北海', id: 45 },
          { text: '德天瀑布', id: 46 },
        ],
      },
      {
        text: '江浙沪',
        children: [
          { text: '杭州', id: 47 },
          { text: '上海', id: 48 },
          { text: '苏州', id: 49 },
        ],
      },
      {
        text: '云南',
        children: [
          { text: '大理', id: 50 },
          { text: '丽江', id: 51 },
          { text: '西双版纳', id: 52 },
          { text: '香格里拉', id: 53 },
        ],
      },
      {
        text: '贵州',
        children: [
          { text: '黄果树', id: 54 },
          { text: '贵阳', id: 55 },
          { text: '镇远', id: 56 },
          { text: '荔波', id: 57 }, 
        ],
      },
    ];

    return {
      state,
      items,
    };
  },
  methods: {
    onClickLeft() {
      return this.$router.go(-1)
    },
  }
})
</script>

<style lang="stylus" scoped>
.choose
  .content
    background #27d461
    color #fff
</style>
