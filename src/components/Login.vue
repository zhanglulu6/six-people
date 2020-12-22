<template>
  <div class="login">
    <p>手机号登录</p>
    <p></p>
    <div class="login-main">
      <van-cell-group>
        <!-- <span class="iconfont icon-iconset0227"></span> -->
        <van-field
          class="login-phone"
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <!-- <span class="iconfont icon-iconset0227
        "></span> -->
        <van-field
          class="login-user"
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        />
      </van-cell-group>
      
    </div>
    <van-button type="primary" size="large" @click="login()">登录</van-button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: '',
      password: '',
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
      this.$router.push("./Mine");
    },
  }
};
</script>
<style lang="stylus" scoped>
.login p
    font-size 15px
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  .van-button--large
    width 90%
</style>
