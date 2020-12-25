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
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent ({
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    
    // 请求数据
    // const store = useStore(key);
    // const fn = () => {
    //   store.dispatch("getDeepPlayApi");
    // }
    // const deepPlayList = () => {
    //   return store.state.deepplay.deepPlayList;
    // }

    return {
      onClickLeft,
      // fn,
      // deepPlayList
    }
  },
  computed: {
    // 2.深度玩法
    deepPlayList() {
      return this.$store.state.deepplay.deepPlayList;
    }
  },
  mounted() {
    this.$store.dispatch("getDeepPlayApi");
  }
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
