<template>
<!-- 我的旅游基金 -->
  <div class="travelfund">
    <van-nav-bar
      title="我的旅游基金"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 旅游基金的轮播图 -->
    <div class="travellunbo">
      <div class="travelmoney">
        <p style="color:#fff;opacity:0.5;font-size:14px;">我的旅游基金总计</p>
        <p style="text-align:left;color:#fff;opacity:0.5;"><span style="font-size:24px;">{{ value }}</span>元</p>
      </div>
      <img src="../assets/图层 2_slices/图层 2@3x.png" alt="" style="width:100%;height:190px"/>
    </div>
    <!-- 旅游基金的获取的切换 -->
    <div class="getfund">
      <van-tabs v-model="active">
        <van-tab title="如何获取">
          <!-- 如何获取 -->
          <div class="howget">
            <h3>
              <span></span> 如何获取?
            </h3>
            <div style="margin-top:20px;">
              <p>1.新用户见面礼∶可在个人中心【我的】中领取</p>
              <p>2.通过参加6人游的官方活动可获得相应旅游基金;</p>
              <p>
                3.协助监督和提升6人游服务,回程之后,向旅游顾
              </p>
              <p>问反馈行程中的问题和改进建议。</p>
            </div>
            
          </div>
          <!-- 如何使用 -->
          <div class="howuse">
            <h3>
              <span></span>如何使用?
            </h3>
            <p style="color:#000;margin-top:20px">1.抵旅行费用基金</p>
            <p>在定制旅行路线时,可以抵行程费用,但最多不超过5%</p>
          </div>
        </van-tab>
        <!-- 如何领取 -->
        <van-tab title="领取记录">
          <div class="VIP">
              <div>
                <div class="icon"><img src="../assets/personimg/优惠券@2x.png" alt="" style="width:25px;height:25px;" /></div>
              </div>
              <div>
                <p style="font-size:16px">成为会员即送{{ value }}元旅游基金</p>
                <p style="font-size:12px;float:left;color:#bbb;margin-top:-7px">仅限初次注册会员领取</p>
              </div>
              <div>
                <div class="VIP-get" >{{ receiveaward }}</div>
              </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  props: ["value"],
  data() {
    return {
      active: 2,
      receiveaward:"已领取"
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/person");
    }
  }
});
</script>

<style lang="stylus" scoped>
.VIP
  display flex
  font-size 15px
  background #fff
  // margin-top 1px
  height 60px
  // padding 1px
  // border-bottom 1px solid #bbb
  position relative
  margin-bottom -14px
  // 优惠卷图标
  .icon
    position absolute
    top 14px
    left 2%
    z-index 999
    font-size 25px
  div:nth-child(1)
    width 50px
    height 45px
    justify-content space-around
    align-items center
  div:nth-child(2)
  // width 200px
    height 45px
    justify-content space-around
    align-items center
  div:nth-child(3)
    width 90px
    height 45px
    justify-content space-around
    align-items center
    // background #ccc
    color #40d76e
    .VIP-get
      width 60px
      height 30px
      background #fff
      border 1px solid #27d461
      float right
      margin 25px auto 
      line-height 30px
</style>
