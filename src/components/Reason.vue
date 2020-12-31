<template>
  <div class="reason">
    <!-- 每周推荐的头部 -->
    <van-nav-bar
      title="每周推荐"
      :fixed="true"
      :placeholder="true"
    />

    <!-- 每周推荐的主体 -->
    <ul>
      <li v-for="item in reasonList" :key="item.content" @click="reasonClick">
        <lazy-component class="reason-img">
          <img v-lazy="item.imgUrl" />
        </lazy-component>
        <p>{{ item.content }}</p>
        <p class="reason-second-p">{{ item.date }}</p>
      </li>
    </ul>

    <!-- 每周推荐的底部 -->
    <div class="footer">
      <span>没有更多</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  computed: {
    // 每日推荐页
    reasonList() {
      return this.$store.state.reason.reasonList;
    }
  },
  mounted() {
    // 每日推荐页
    this.$store.dispatch("getReasonApi");
  },
  methods: {
    reasonClick() {
      return this.$router.push("/traveldetail/5")
    }
  }
})
</script>

<style lang="stylus" scoped>
.reason

  .footer
    font-size 16px
    color black 
    padding 20px 0

  ul
    padding 0 20px

    li
      width 100%
      height 285px
      padding-bottom 10px
      border-bottom 2px solid #ccc

      .reason-img
        padding-top 10px
        width 100%
        height 68%

        img
          width 100%
          height 100%

      p
        margin-top 0
        margin-bottom 0
        font-size 16px
        color black
        text-align left

      p:nth-of-type(1)
        margin 8px 0

      .reason-second-p
        width 100px
        height 20px
        border 1px solid #eee
        background #eee
        text-align center
        line-height 20px
        border-radius 5px

</style>
