<template>
<!-- 点开我的页面进入登录页面 -->
  <div class="mine" >
    <p>手机号登录</p>
    <p></p>
    <div class="login-main" >
      <van-cell-group>
        <van-icon name="records" style="position:absolute;left:-35px;top:7px;"/>
        <van-field
          :required="false"
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
        />
        
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <!-- <span class="iconfont icon-iconset0227
        "></span> -->
        <van-field
          :required="false"
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        />
      </van-cell-group>
      
    </div>
    <van-button type="primary" size="large" @click="login()"  :color="istrue" >登录</van-button>
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
      username: '',
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
    //登录的事件触发跳转到个人中心
   login() {
      // 从组件出发分发是actions里面的，也就是从数据接口来回去数据
      this.$store.dispatch("mine/getLoginactions",{
        username: this.username,
        phone: this.phone
      });
      if(this.msg === '登入成功'){
        Toast('登入成功');
        // 登录成功进入个人中心
        this.$router.push("./Person");
      }else{
        Toast('用户名或手机号码错误');
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.mine p
    font-size 15px
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  .van-button--large
    width 90%
</style>
