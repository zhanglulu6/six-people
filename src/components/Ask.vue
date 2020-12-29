<template>
  <div class="ask">
    <div class="title" v-for="item in askList.header" :key="item.id">
      <van-icon class="icon1" name="arrow-left" color="#fff" @click="onClickLeft" size="25" />
      <img :src="item.imgUrl" />
      <div>
        <h1>{{ item.title }}</h1>
        <p>
          <van-icon name="location-o" />
          <span>{{ item.travel }}</span>
          <span>|</span>
          <van-icon name="flag-o" />
          <span> {{ item.play }}</span>
        </p>
      </div>
    </div>

    <!-- 头部改变 -->
    <van-sticky @scroll="changeScroll">
      <div v-if="done" class="detail-top-first11" v-for="item in askList.header" :key="item.id">
        <van-nav-bar
          :title= item.title
          left-arrow
          @click-left="onClickLeft"
          :fixed="true"
          :placeholder="true"
        />
      </div>
    </van-sticky>
    
    <div class="play">
      <h3>必玩推荐</h3>
      <div>
        <ul>
          <li v-for="item in askList.willplay" :key="item.id">
            <img :src="item.imgUrl" >
            <p>{{ item.content }} </p>
            <h5>{{ item.title }}</h5>
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <h3>顾问推荐行程</h3>
      <ul>
        <li v-for="item in askList.recommend" :key="item.id" @click="goToAddressDetail">
          <lazy-component class="reason-img">
            <img v-lazy="item.imgUrl" />
          </lazy-component>
          <p>{{ item.content }}</p>
          <p class="reason-second-p">{{ item.address }}</p>
          <p class="date">
            <span>{{ item.date }}</span>
            <span>天</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="footer">
      <van-button type="primary" block color="#27d461">咨询旅行顾问</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent ({
  props: ["id"],
  setup() {
    const done = ref(false);
    const changeScroll = (scrollTop) => {
      if(scrollTop.scrollTop > 200) {
        done.value = true;
      } else {
        done.value = false;
      }
    };

    const router = useRouter();
    const onClickLeft = () => {
      router.push("/index");
    };
    const goToAddressDetail = () => {
      router.push("/addressdetail");
    };

    return {
      onClickLeft,
      changeScroll,
      done,
      goToAddressDetail,
    };
  },
  mounted() {
    this.$store.dispatch("getAskListApi", {
      id: this.id
    });
  },
  computed: {
    askList() {
      return this.$store.state.ask.askList;
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 监听路由传的参数id
    this.$store.dispatch("getAskListApi", {
      id: this.$route.params.id
    });
    next();
  }
});
</script>
<style lang="stylus" scoped>
.ask
  .title
    .icon1
      position absolute
      top 20px
      left 20px

    img
      width 100%
      height 200px

    div
      h1
        position absolute
        left 20px
        top 80px
        color #fff
        font-size 30px
        margin-bottom 20px
      p
        display flex
        align-items center
        font-size 14px
        color #fff
        position absolute
        top 135px
        left 20px
        
        span
          display inline-block
          margin-right 5px
          margin-left 5px

  .play
    padding 0 20px

    h3
      text-align left
      font-size 25px
      color black

    div
      ul
        display flex
        flex-wrap wrap
        justify-content flex-start

        li
          width 160px
          position relative
          margin-bottom 20px   
          margin-right 10px

          img
            width 160px
            height 100px
            border-radius 10px

          p
            margin 0
            font-size 12px
            text-align left
            position absolute
            top 0
            left 0
            color #fff
            padding 3px 5px
            background rgba(0, 0, 0, 0.4)
            border-radius 10px 0 0 0

          h5
            margin 0
            text-align left
            padding-left 3px
            font-size 16px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            color black

        li:nth-of-type(2)
          margin-right 0

        li:nth-of-type(4)
          margin-right 0

  .content
    padding 0 20px 45px 20px

    h3
      text-align left
      font-size 25px
      color black

    ul
      

      li
        width 100%
        height 285px
        padding-bottom 10px
        border-bottom 1px solid #ccc
        position relative

        .reason-img
          padding-top 10px
          width 100%
          height 68%

          img
            width 100%
            height 100%
            border-radius 10px

        p
          margin-top 0
          margin-bottom 0
          font-size 16px
          color black
          text-align left

        p:nth-of-type(1)
          margin 8px 0

        .reason-second-p
          text-align left

        .date
          position absolute
          top 165px
          left 20px
          font-size 15px
          color #fff

          span:nth-of-type(1)
            font-size 25px

  .footer
    position fixed
    bottom 0
    left 0
    width 100%  
</style>

