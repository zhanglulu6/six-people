<template>
  <div class="deepplay">
    <!-- 深度玩法的头部 -->
     <van-nav-bar
      title="深度玩法-6人游"
      :fixed="true"
      :placeholder="true"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 深度玩法的主体 -->
    <div class="plan">
      <ul class="plan-photo-ul">
        <li v-for="item in deepPlayList" :key="item.id">
          <img v-lazy="item.imgUrl" />
          <p>{{ item.title }}</p>
          <span>{{ item.content }}</span>
          <van-icon name="location" color="#eee" class="deepplay-address" />
          <span class="deepplay-span">{{ item.address }}</span>
        </li>
      </ul>
      <!-- <van-loading v-else size="24px" vertical></van-loading> -->
    </div>

    <!-- 深度玩法的底部 -->
    <div class="footer">没有更多内容了</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent ({
  setup() {
    const router = useRouter();
    const store = useStore(key);

    // 触发vuex里的请求数据函数
    const getDeepPlayApi = () => {
      store.dispatch("deepplay/getDeepPlayApi");
    }

    // 获取vuex里的state里的deepPlayList的数据
    const deepPlayList = computed(() => {
      return store.state.deepplay.deepPlayList;
    });

    // 解决复用组件出现跳转到中间的问题,每次都进行一次清除
    const beforeUnmount = () => {
      store.state.deepplay.deepPlayList = [];
    };

    // 跳转页面
    const onClickLeft = () => {
      router.go(-1);
    };

    return {
      onClickLeft,
      getDeepPlayApi,
      deepPlayList,
      beforeUnmount,
    }
  },
  // 在mounted里调用触发vuex里的请求数据函数
   mounted() {
    this.getDeepPlayApi();
  }
  // computed: {
  //   // 2.深度玩法
  //   deepPlayList() {
  //     return this.$store.state.deepplay.deepPlayList;
  //   }
  // },
  //  mounted() {
  //   this.fn();
  // }
  // methods: {
    // beforeUnmount() {
    //   // 组件复用导致每次跳转到此页面时会自动跳到中间点,用这个生命周期销毁组件复用照成的问题
    //   this.$store.state.deepplay.deepPlayList = [];
    // },
  // }
});
</script>

<style lang="stylus" scoped>
.deepplay
  .plan
    padding 0 20px

    .plan-photo-ul
      padding-top 20px
      display flex
      flex-wrap wrap

      li
        list-style none
        width 167px
        height 270px
        flex 1
        position relative
        margin-bottom 30px

        p
          margin 0
          text-align left
          color black
          font-size 0.53rem
          margin-top 10px
          margin-bottom 10px
          font-weight 700
          margin-left 12px

        img
          width 140px
          height 170px
          border-radius 8px

        span
          display block
          font-size 15px
          text-align left
          color black
          margin-left 12px

        .deepplay-address
          position absolute
          top 144px
          left 25px
          font-size 15px
          height 20px

        .deepplay-span
          position absolute
          top 140px
          left 30px
          color #eee

  .footer
    font-size 16px
    padding-bottom 20px
    color black
</style>
