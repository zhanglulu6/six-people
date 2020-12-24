<template>
  <div class="journey">
    <!-- 需求行程头部 -->
    <van-nav-bar
      title="完善需求"
      right-text="跳过"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
      :placeholder="true"
    />

    <!-- 需求行程的图片和加号 -->
    <div class="journey-main">
      <!-- <img src="https://img95.699pic.com/photo/50065/5220.jpg_wh300.jpg!/both/284x198" class="img-top" /> -->
      <div class="journey-top">
        <div class="journey-second">
          <van-icon name="add-o" size="2rem" @click="addClick" />
          <p>需求提交成功</p>
          <van-empty
            class="custom-image"
          />
        </div>
      </div>
    </div>

    <!-- 需求行程的底部 (用固定定位定在底部)-->
    <div class="footer-que" @click="querenClick">提交您的定制需求</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  methods: {
    onClickLeft() {
      return this.$router.go(-1);
    },
    onClickRight() {
      return this.$router.push("/mine")
    },
    addClick() {
      return this.$router.push("/demand")
    },
    querenClick() {
      return this.$router.push("/demand")
    }
  }
})
</script>

<style lang="stylus" scoped>
.journey

  .journey-main
    width 100%
    position relative

    .journey-top
      width 90%
      border 1px solid black
      position absolute
      top 44px
      left 50%
      transform translateX(-50%)

      .journey-second
        padding 20px 0 0 0

        .custom-image
          width 100%
          height 80%
          padding 0

          img
            width 100%
            height 60%

        p
          margin-bottom 0

  .footer-que
    position absolute
    bottom 0
    left 50%
    transform translateX(-50%)
    width 100%
    height 50px
    background #27d461
    line-height 50px
    color #fff
</style>
