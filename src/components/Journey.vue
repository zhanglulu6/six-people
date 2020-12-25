<template>
<!-- 定制中的行程没有定制之前的页面 -->
  <div class="journey">
    <!-- 需求行程头部 -->
    <div>
      <van-nav-bar
      title="完善需求"
      right-text="跳过"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
      :placeholder="true"
      />
    </div>
    <!-- 需求行程的图片和加号 -->
    <div class="journey-main">
      <div class="journey-top">
        <div class="journey-second">
          <!-- <van-icon name="add-o" size="2rem" @click="addClick" /> -->
          <van-icon name="passed" @click="addClick" class="bingo" />
          <p>需求提交成功</p>
          <van-empty
            class="custom-image"
          />
        </div>
      </div>
    </div>

    <!-- 需求行程的底部 (用固定定位定在底部)-->
    <div class="confirm" @click="querenClick">确定</div>
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

</style>
