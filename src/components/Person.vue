<template >
  <div class="person" >
        <!-- 我的导航栏 -->
        <van-nav-bar
          title="我的"
          left-text=""
          left-arrow
          @click-left="onClickLeft"
        />
        <!-- 详细信息 -->
        <div  class="person-infor" style="background:#fff;height: 223px;
          padding-top: 1px;">
          <!-- 关于LOGO的 -->
          <div class="person-icon" >
            <div style="width:100px">
              <img src="" alt="">
              <span>6人游旅行网</span>
            </div>
            <van-icon class="edit" name="edit" />
            <!-- 关于用户信息 -->
            <div class="person-show" >
              <div class="show-img"></div>
              <p style="font-size:17px">蒋粤</p>
              <div class="show-word">
                <p>17793495806 甘肃 庆阳</p>
                <p>会员卡号 v177 9349 5806</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 定制行程 -->
          <div class="route">
            <!-- icon图标 -->
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-line_hanglixiang"></use>
            </svg>
            <van-cell title="定制中的行程" is-link value="全部行程"  to="/precious" />
            <!-- 我的旅游基金 -->
            <svg class="icon" aria-hidden="true" style="position:absolute;top:52%;left:5%;z-index:999;font-size: 25px">
            <use xlink:href="#icon-qiandai"></use>
            </svg>
            <van-cell title="我的旅游基金" is-link value="0元" style="margin-bottom:-19px" class="travel"/>
            <!-- 成为会员 -->
            <div class="VIP">
              <div>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youhuiquan"></use>
                </svg>
              </div>
              <div>
                <p style="font-size:16px">成为会员即送60元旅游基金</p>
                <p style="font-size:12px;float:left;color:#bbb;margin-top:-7px">仅限初次注册会员领取</p>
              </div>
              <div>
                <div class="VIP-get">领取</div>
              </div>
            </div>
            <!-- 更多领取记录 -->
            <div class="more">
              <p>更多领取记录</p>
            </div>
            <!-- 提交新的需求按钮 -->
            <div class="commit">
              <van-button type="primary" size="large">提交新的需求</van-button>
            </div>
          </div>
        <!-- 我的旅游基金 -->
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    },
  }
};
</script>
<style lang="stylus" scoped>
.person 
    // 信息背景图
  .person-infor
    // 图标
  .person-icon
    width 350px
    height 200px
    background #27d461
    margin 15px
    // position absolute
    // top 45px
    border-radius 10px
  // logo图
    span 
      font-size 15px
      float left
      padding-top 15px
      padding-left 15px 
  // 编辑图
    .edit 
      float right
      position absolute
      top 68px
      right 20px
      color #fff
  // 显示的信息
  .person-show 
    font-size 15px
    color #fff
    // 显示的图片
    .show-img
      width 50px
      height 50px
      background #fff
      margin 0 auto
      border-radius 50%
    // 显示的文字
    .show-word
      width 250px
      margin  0 auto
      line-height 10px
  .route
     margin-top 20px
     margin-bottom -30px
     border-top 20px solid #eee
     .icon
      position absolute
      top 41%
      left 4%
      z-index 999
    .VIP
      display flex
      font-size 15px
      background #fff
      margin-top 10px
      height 60px
      padding 10px
      border-bottom 1px solid #bbb
      .icon
        position absolute
        top 59%
        left 5%
        z-index 999
        font-size 25px
      div:nth-child(1)
        width 50px
        height 45px
        justify-content space-around
        align-items center
        // background red
        
      div:nth-child(2)
        width 200px
        height 45px
        justify-content space-around
        align-items center
        // background #ddd
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
          margin 15px auto 
          line-height 30px
    .more
      font-size 14px
      color #27d461
    .commit .van-button--large 
      width 88%
    .commit .van-button--primary 
      background #27d461
      border-radius 7px
</style>
