<template>
  <div class="register">
    <!-- 注册表的头部 -->
    <van-nav-bar
      class="reg-nav"
      title="注册"
    />
    <!-- 注册表 -->
    <van-form class="reg-form" >
      <div class="reg-name">
        <van-icon name="friends-o" style="position:absolute; top:32%;;left:25px;z-index:999;font-size:30px"/>
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </div>
      <!-- 地址 -->
      <div class="reg-address">
        <van-icon name="home-o" style="position:absolute; top:30%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="address"
          name="地址"
          label="地址"
          placeholder="地址"
          
        />
      </div>
      
      <!-- 手机号 -->
      <div class="reg-phone">
        <van-icon name="records" style="position:absolute; top:30%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
      </div>

      <!-- 邮箱 -->
      <div class="reg-email">
        <van-icon name="envelop-o" style="position:absolute; top:33%;;left:25px;z-index:999;font-size:30px"/>
        <van-field
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
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
            <van-button size="small" type="primary" class="code-button" @click="sendcode()" :color="isfalse" >获取验证码</van-button>
            <!-- <van-count-down :time="time" /> -->
            <span style="font-size:14px;position: absolute;top:9px;right:-45px;" class="code-timer">{{ count }}s</span>
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

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      phone: "",
      email:"",
      address: "",
      code: "",
      istrue: "#d3d80c",
      // istrue: "true",
      isfalse:"#17c25c",
      // time:  60 * 1000,
      // yzm: "获取验证码"
      show: true,
	    count: '',
	    timer: null,
    };
  },
  computed: {
    msg(){
      // 信息取到了
      return this.$store.state.reg.Regdata;
    }
  },
  mounted() {
    
  },

  methods: {
    // 发送来获取验证码
    sendcode(){
      this.$store.dispatch("codes/getCodeactions",{
        // 获取验证码需要将电话传过去
       email: this.email
      });
      // this.$store.state.reg.Regdata = this.time;

          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            // this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count -= 1;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                this.count = "";
              }
            // }, 1000); 
          }
        
    },
    //注册
    reg(){
      // this.$router.push("/mine");
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
        // 注册成功跳转登录页面然后再进入个人中心
        this.$router.push("./Mine");
      }else{
        Toast('注册信息不全请重新输入');
      }
    },
    radio(){
      Toast('验证码已经发送到你的手机上');
    }
  }
};

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
      margin-right -10px
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
