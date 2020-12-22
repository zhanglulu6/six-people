<template>
  <div class="index">
    <van-swipe @change="onChange" class="my-swipe" :autoplay="3000">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
export default defineComponent ({
  setup() {
    const current = ref(0);
    const onChange = (index) => {
      current.value = index;
    };
    return {
      current,
      onChange,
    };
  }
})
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 250px;
  text-align: center;
  background-color: #39a9ed;
}
.custom-indicator {
    position: absolute;
    top: 40%;
    left: 20px;
    // transform: translateX(-50%);
    font-size: 20px;
  }
</style>