<template>
  <div class="detail">
    <!-- 详情页的头部 -->
    <van-nav-bar title="辩题" left-arrow :fixed="true" :placeholder="true">
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <!-- 详情页的主体 -->
    <ul class="detail-top">
      <li v-for="item in detailList" :key="item.id">
        <lazy-component class="reason-img">
          <img v-lazy="item.imgUrl" />
        </lazy-component>
        <div class="top-first">
          <span>{{ item.title }}</span>
          <h6>{{ item.content }}</h6>
        </div>
        <p>{{ item.detail }}</p>
      </li>
    </ul>

    <!-- 详情页的介绍(固定) -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  props: ["id"],
  mounted() {
    this.$store.dispatch("getDetailApi", {
      id: this.id
    });
  },
  computed: {
    detailList() {
      return this.$store.state.detail.detailList;
    }
  },
})
</script>

<style lang="stylus" scoped>
.detail-top
  width 100%

  li
    width 100%
    height 220px
    margin-bottom 15px
    position relative

    .reason-img
      width 100%
      height 100%
      
      img
        width 100%
        height 100%

    .top-first
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      width 100%
      padding-top 30px
      color #fff

      span
        display inline-block
        padding-bottom 8px
        border-bottom 2px solid #fff
      
      h6
        margin-top 8px
        font-size 16px
        font-weight 400

    p
      text-align left
      padding 0 20px
      color black
      font-weight 600
      font-size 22px
</style>
