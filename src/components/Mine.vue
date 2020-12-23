<template>
<!-- 登录页面 -->
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
    <van-button type="primary" size="large" @click="login()" >登录</van-button>
  </div>


  <!-- 个人中心的页面 -->
</template>

<script lang="ts">
// 定义组件和一些vue3里面可以用到的东西
import { defineComponent,ref, PropType} from "vue";
//登录传给后端的参数类型的数据接口
import { LoginParamsType } from "../interface/index";

export default defineComponent({
  name: "Mine",
  data() {
    return {
      username: '',
      phone: ''
    };
  },
  
  methods: {
    login() {
    //   beforeEnter: (to, from, next) => {
    //   if (!localStorage.getItem("token")) {
    //     next("/mine");
    //   } else {
    //     next();
    //   }
    // }
      this.$router.push("./Person");
    },
  },
  // setup(){
  //   // 数据
  //   // 事件
    
  // }
});
</script>
<style lang="stylus" scoped>
.mine p
    font-size 15px
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  .van-button--large
    width 90%
</style>
