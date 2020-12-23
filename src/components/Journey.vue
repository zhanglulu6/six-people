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
      <img src="https://img95.699pic.com/photo/50065/5220.jpg_wh300.jpg!/both/284x198" class="img-top" />
      <div class="journey-top">
        <van-icon name="add-o" />
        <p>需求提交成功</p>
      </div>
    </div>

    <!-- 需求行程的底部 (用固定定位定在底部)-->
    <div class="footer-que">确认</div>
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
    }
  }
})
</script>
