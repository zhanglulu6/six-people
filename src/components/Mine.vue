<template>
<!-- 点开我的页面进入登录页面 -->
  <div class="mine" >
    <p>手机号登录</p>
    <p></p>
    <div class="login-main" >
      <van-cell-group>
       
        <div class="van-icon" style="position:absolute;left:-32px;top:3px;">
          <img src="../assets/loginimg/图层 1@3x.png" alt="" style="width:25px;height:35px;"/>
        </div>
        <van-field
          :required="false"
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
        />
        
        <div class="van-icon"><img src="../assets/loginimg/图层 2@3x.png" alt="" style="width:30px;height:35px;" /></div>
        <van-field
          :required="false"
          v-model="email"
          label="邮箱"
          placeholder="请输入邮箱"
        />
      </van-cell-group>
    </div>
    <p @click="goreg()" style="margin:20px;" class="goreg">点击去注册?</p>
    <van-button type="primary" size="large" @click="login()"  :color="istrue" >登录</van-button>
    <!-- <van-field
      readonly
      clickable
      :value="value"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard
      v-model="value"
      :show="show"
      :maxlength="6"
      @blur="show = false"
    /> -->
  </div>
</template>

<script lang="ts">
// 定义组件和一些vue3里面可以用到的东西
// import { defineComponent,ref, PropType} from "vue";
//登录传给后端的参数类型的数据接口
import { LoginParamsType } from "../interface/index";
//引入接口请求
import { getlogindataApi } from "../utils/api";

// import { Mine } from "../store/Mine";
import { Toast } from 'vant';
import { store } from '../store/index';
// import MineModule from '../store/Mine/index';
export default {
  name: "Mine",
  data() {
    return {
      email: '',
      phone: '',
      istrue: "#d3d80c"
    };
  },
  mounted(){
    
  },
  computed:{
    msg() {
      //返回的数据可以在页面中使用
      return this.$store.state.mine.Logindata;
    }
  },
  methods: {
    // 没有注册去注册
    goreg(){
      this.$router.push("/reg");
      Toast('跳转至注册页面');
    },
    //登录的事件触发跳转到个人中心
    login() {
      Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration:600
        });
      // 从组件出发分发是actions里面的，也就是从数据接口来回去数据
      this.$store.dispatch("mine/getLoginactions",{
        email: this.email,
        phone: this.phone
      })
      if(this.msg === '登入成功'){
        
        localStorage.setItem('email', this.email);
        localStorage.setItem('phone', this.phone);
        // 登录成功进入个人中心
        this.$router.push("./Person");
        // 跳转完登录页面进入个人中心之后就请求个人中心的数据接口
        // this.$store.dispatch("per/getPeractions",{
        //   // 跳转的时候传递的参数
        //   email:this.email
        //   // phone:this.phone
        // })
      }else{
        // 登录失败跳转注册页面
        Toast('你还没有注册，去注册?');
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
// 我的页面
.mine 
  position relative
  p
    font-size 15px
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  .van-button--large
    width 90%
  .goreg
    position absolute
    top 66%
    right 3%
    font-size 14px
    // font-weight 600
    color skyblue 
    line-height 10px
    border none
</style>
