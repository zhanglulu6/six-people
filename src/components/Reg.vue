<template>
  <div class="register">
    <!-- 注册表的头部 -->
    <!-- <van-nav-bar
      class="reg-nav"
      title="注册"
    /> -->
    <van-nav-bar
      title="注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 注册表 -->
    <van-form class="reg-form" >
      <div class="reg-name">
        <van-icon name="friends-o" style="position:absolute; top:32%;;left:25px;z-index:999;font-size:30px"/>
        <!-- 用户名 -->
        <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{pattern: /^[\u4E00-\u9FA5]+$/, message: '*用户名只能为中文' }]"
        />
      </div>
      <!-- 地址 -->
      <div class="reg-address">
        <van-icon name="home-o" style="position:absolute; top:30%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="address"
          label="地址"
          placeholder="地址"
          :rules="[{ required:true, message: '*请填写省和市' }]"
        />
      </div>
      
      <!-- 手机号 -->
      <div class="reg-phone">
        <van-icon name="records" style="position:absolute; top:30%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ pattern:/^1[3|4|5|7|8][0-9]{9}$/, message: '*请输入11位有效的号码' }]"
        />
      </div>

      <!-- 邮箱 -->
      <div class="reg-email">
        <van-icon name="envelop-o" style="position:absolute; top:33%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="email"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '*请输入有效得邮箱' }]"
        />
      </div>

      <!-- 验证码 -->
      <div class="reg-code">
        <van-icon name="ecard-pay" style="position:absolute; top:30%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="code"
          center
          clearable
          label="验证码"
          placeholder="短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary" class="code-button" @click="sendcode()" :color="isfalse" :disabled="done1">{{ getcode }}</van-button>
          </template>
        </van-field>
      </div>
      
      <p style="font-size:15px">收不到验证码？点击<span style="color:#27d461;font-size:15px" @click="radio()">语音收听</span></p>
      <div style="margin-top: 10px; padding:15px;" class="reg-button">
        <van-button type="primary" size="large" @click="reg()" :color="istrue">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import { defineComponent } from 'vue';
export default defineComponent ({
  data() {
    return {
      username: "",
      phone: "",
      email:"",
      address: "",
      code: "",
      istrue: "#ddd",
      isfalse:"#17c25c",
      show: true,
	    count: '',
      timer: null,
      getcode:"获取验证码",
      done1: false
    }
  },
  computed: {
    // 响应式数据的变化
    msg(){
      // 信息取到了
      return this.$store.state.reg.Regdata;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/reason");
      Toast('返回');
    },
    // 发送来获取验证码
    sendcode(){
      this.$store.dispatch("codes/getCodeactions",{
        // 获取验证码需要将电话传过去
       email: this.email,
       phone:this.phone
      });
      Toast("验证码已发送到邮箱，请注意查收!");
      // 倒数秒数
      //初始的时间从60开始
      const TIME_COUNT = 60;
      // 标记法做个标记是正确的
      this.done = true;
      // 将初始的时间赋值给我需要的
      this.count = TIME_COUNT;
      // 使用定时器，将获取验证码替换成倒计时
      const timer = setInterval(() => {
        this.done1 = true;
        this.getcode = `${this.count}s后可再次发送`;
        this.count --;
        if(this.count == 0){
          // 关闭定时器将内容又替换成发送验证码
          clearInterval(timer);
          this.getcode = "发送验证码";
          // 标记是错误的情况
          this.done = false;
          this.done1 = false;
          this.count = 60;
        }
      },1000);       
    },
    //注册来跳转页面
    reg(){
      this.$store.dispatch("reg/getRegactions",{
        // 传入的参数
        username: this.username,
        phone: this.phone,
        email: this.email,
        address:this.address,
        code:this.code
      });
      //msg就相当于是从获取数据结束之后返回的提示信息
      if(this.msg === '注册成功'){
        Toast('注册成功');
        localStorage.setItem('phone', this.phone);
        localStorage.setItem('username', this.username);
        localStorage.setItem('email', this.email);
        localStorage.setItem('address', this.address);
        this.istrue = "#d3d80c";
        // 注册成功跳转登录页面然后再进入个人中心
        this.$router.push("./Person");
      }else{
        // Toast('注册信息错误无法登录哦');
      }
    },
    radio(){
      Toast('验证码已发送到你的手机上');
    }
  }
});

</script>
<style lang="stylus" scoped>
// 最大的注册类名
.register
  // background #eee
.register .reg-nav
  // font-size 15px
  border-bottom: 1px solid #bbb;
  box-shadow 1px 1px 1px #eee
  padding-bottom: 5px;
.register .van-nav-bar__left
  color  #ccc
  
  // 对于表单的类名
.reg-form 
  margin-top 20px
  border-top 1px solid #bbb
  .van-cell
    line-height 40px
  .reg-name, .reg-email, .reg-phone, .reg-address, .reg-code
    border-bottom 1px solid #bbb
  .reg-name
    position relative
  .reg-email
    position relative
  .reg-phone
    position relative
  .reg-address
    position relative
  .reg-code
    position relative
    // 获取验证码的按钮
    .code-button
      margin-right -50px
    //定时器
    .code-timer
      // margin-right 10px
      width 32px
      height 32px
      text-align center
      line-height 32px
      // background red
  // 注册按钮
  .reg-button .van-button--primary
    background #ddd
    border none
    border-radius 10px
</style>
