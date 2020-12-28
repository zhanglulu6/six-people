<template style="height:2000px">
  <div class="person">
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
              <span><img src="../assets/personimg/图层 1@2x.png" alt="" style="width:100px;height:35px"></span>
            </div>
            <div class="edit"><img src="../assets/personimg/编 辑@2x.png" alt="" style="width:30px;height:30px;"/></div>
            <!-- 关于用户信息 -->
            <div class="person-show" >
              <div class="show-img">
                <img src="../assets/personimg/图层 11@2x.png" alt="" style="width:50px;height:50px;" />
              </div>
              <p style="font-size:17px">{{ permsg.username }}</p>
              <div class="show-word">
                <p>{{ permsg.phone }}&nbsp;&nbsp;{{ permsg.address }}</p>
                <p>会员卡号 v{{ permsg.phone }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 定制行程 -->
          <div class="route" style="position:relative;">
            <!-- icon图标 -->
            <div class="icon"><img src="../assets/personimg/图层 5@2x.png" alt="" style="width:25px;height:25px;" /></div>
            <van-cell title="定制中的行程" is-link value="全部行程" @click="Journey()" />
            <!-- 我的旅游基金 -->
            <div class="icon" style="position:absolute;top:25%;left:5%;z-index:999;font-size: 25px"><img src="../assets/personimg/图层 7@2x.png" alt="" style="width:25px;height:25px;" /></div>
            <van-cell title="我的旅游基金" is-link value="0元" style="margin-bottom:-9px;" class="travel" @click="TravelFund()"/>
            <!-- 成为会员 -->
            <div class="VIP">
              <div>
                <div class="icon"><img src="../assets/personimg/优惠券@2x.png" alt="" style="width:25px;height:25px;" /></div>
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
              <p style="padding:10px" @click="Moreget()">更多领取记录</p>
              <div class="commit">
              <van-button type="primary" size="large" @click="Demand()">提交新的需求</van-button>
            </div>
            </div>
            <!-- 提交新的需求按钮 -->
          </div>
        <!-- 我的旅游基金 -->
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
// import { onBeforeRouteLeave } from 'vue-router';
export default {
  data() {
    return {
    };
  },
  computed: {
    //返回的数据
    permsg() {
      return this.$store.state.per.Perdata;
    }
  },
  mounted(){
    // beforeRouterEnter(to,from,next){
      this.$store.dispatch("per/getPeractions",{
          // email: this.email,
          // phone: this.phone
          //将存到local storage里面的数据取出来.而这个里面的数据是在登录的时候存到里面的
          email: localStorage.getItem('email'),
          phone: localStorage.getItem('phone')
      });
      // next();
    // }; 
    // console.log(this.$store.state.per.Perdata)
  },
  methods: {
    //点击左边的箭头跳转到登录页
    onClickLeft() {
      this.$router.push("/mine");
    },
    //点击定制行程进入定制行程(完善的需求)
    Journey(){
      this.$router.push("/journey");
    },
    //在个人中心点击提交提交需求
    Demand(){
      this.$router.push("/demand");
    },
    //我的旅游基金
    TravelFund(){
      this.$router.push("/travelFund");
    },
    //更多领取记录
    Moreget(){
      this.$router.push("/travelFund");
    }
  }
};
</script>
<style lang="stylus" scoped>
.person 
    // 信息背景图
    background  #eee
  .person-infor
    // 图标
  .person-icon
    width 350px
    height 200px
    background #27d461
    margin 10px 15px
    // position absolute
    // top 45px
    border-radius 10px
    position relative
  // logo图
    span 
      font-size 15px
      float left
      padding-top 5px
      padding-left 5px 
      position absolute
      top 10px
      left  10px
  // 编辑图
    .edit 
      float right
      position absolute
      top 10px
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
  //定制中的行程
  .route
     margin-top 20px
     margin-bottom -30px
    //  border-top 20px solid #eee
    //  position relative
     .icon
      position absolute
      top 1%
      left 4%
      z-index 999
    // 会员
    .VIP
      display flex
      font-size 15px
      background #fff
      margin-top 1px
      height 60px
      padding 10px
      border-bottom 1px solid #bbb
      position relative
      margin-bottom -14px
      // 优惠卷图标
      .icon
        position absolute
        top 27px
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
          margin 15px auto 
          line-height 30px
    .more
      font-size 14px
      color #27d461
      background #fff
    .commit .van-button--large 
      width 88%
    .commit .van-button--primary 
      background #27d461
      border-radius 7px
</style>
