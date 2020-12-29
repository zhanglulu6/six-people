<template>
  <div class="profile">
    <!-- 我的资料头部 -->
    <van-nav-bar
      title="我的资料"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 我的资料编辑修改内容 -->
    <!-- 输入任意文本 -->
    <div class="edit-context">
      <van-field 
        label="姓名" 
        v-model="text"
        placeholder="请输入修改的用户名"
      />
      <van-field  label="性别" />
      <div class="sexselect">
        <input type="radio" :checked="checkedone"  @click="radioone()" value="0" v-model="picked" >&nbsp;&nbsp;&nbsp;保密
        <input type="radio" :checked="checkedtwo" @click="radiotwo()" value="1" v-model="picked" >&nbsp;&nbsp;&nbsp;男
        <input type="radio" :checked="checkedthree"  @click="radiothree()" value="2" v-model="picked" >&nbsp;&nbsp;&nbsp;女
      </div>
      <!-- 输入手机号，调起手机号键盘 -->
      <div class="phone">
        <van-field  type="tel" label="手机号"  />
        <span style="font-size:15px;position:absolute;top:31%;left:31%;color:#27d461;">{{ tel }}</span>
        <span class="changephone" @click="toreg()">更换</span>
        <span style="position:absolute;top:19%;right:5%;font-size:23px;color:#ccc;">></span>
      </div>
      
      <!-- 邮箱 -->
      <van-field v-model="email" type="email" label="邮箱" placeholder="请输入修改的邮箱" />
    </div>
    <!-- 保存的按钮 -->
    <div>
      <van-button type="primary" size="large" @click="toperson()">保存</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
// import router from '../router';
// import { useRouter } from 'vue-router';
export default {
  // setup(){
  //   const router = useRouter();
  //   const tel = ref(localStorage.getItem("tel"));
  // },
  data() {
    return {
      tel: localStorage.getItem("phone"),
      email:"",
      text:"",
      checkedone:false,
      checkedtwo:false,
      checkedthree:false,
      picked:""//存入的实际是value的值,因为双向绑定
    };
  },
  methods: {
    // 左边点击进入个人中心的页面
    onClickLeft() {
      this.$router.push("/person");
    },
    // 保存的按钮单击进入个人中心 
    // onSave(contactInfo) {
    //   Toast('保存');
    // },
    // 跳转到注册页面
    toreg(){
      this.$router.push("/reg");
    },
    // 去到个人中心页面
    toperson(){
      //保存跳转的前提是有号码存在于当前页面,如果没有的话就不会跳转,而是在个人中心有数据之后才能实现跳转
      // 如果是更改之后的电话号码就可以进行新的注册
      if( localStorage.getItem("phone")){
        this.tel = localStorage.getItem("phone");
        localStorage.setItem('email', this.email);
        localStorage.setItem('picked', this.picked);
        this.$router.push("/person");
      }else{
        Toast("您的信息还没有修改,无需保存");
      }
    },
    // 第一个按钮
    radioone(){
      // 点击第一个按钮第二个和第三个消失
      this.checkedone = true;
      this.checkedtwo = false;
      this.checkedthree = false;
    },
    // 第二个按钮
    radiotwo(){
      // 点击第二个按钮第一个按钮消失
      this.checkedone= false;
      this.checkedtwo= true;
      this.checkedthree = false;
    },
    // 第三个按钮
    radiothree(){
      // 点击第三个按钮前两个消失
      this.checkedone = false;
      this.checkedtwo = false;
      this.checkedthree = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
