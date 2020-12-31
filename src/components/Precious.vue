<template>
<!-- 个人中心的定制中的行程点击之后进去的页面 -->
  <div class="precious">
    <!-- 全部定制行程的头部 -->
    <van-nav-bar title="定制中的行程" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

     <!-- 全部定制行程的主体 -->
    <div class="pro">
      <div class="start">
        <ul>
          <li>{{ address }}</li>
          <li>v685456</li>
        </ul>
        <ul>
          <li>{{ data }}  出发  | {{ people }}</li>
          <li>有效</li>
        </ul>
      </div>
      <img src="../assets/cat.jpg" alt="">
      <div class="ok">
        <div class="left">
          <van-icon name="chat-o" color="green" size="20" class="info"/>
          好的,呢先给你关闭了
        </div>
      </div>    
    </div>  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Toast } from "vant";
import { useRouter, stringifyQuery } from "vue-router";
import { useStore } from "vuex";
import { key } from "./../store/index";
export default defineComponent ({
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      Toast('返回');
      router.push("/index");
    };

    const store = useStore(key);
    let address = localStorage.getItem("confirmCity");
    let people = localStorage.getItem("str");
    let data = `2020年${localStorage.getItem("date").substring(0,6)}`;

    return {
        onClickLeft,
        address,
        people,
        data,
    };
  }
});
</script>
<style lang="stylus" scoped>
.precious
  background #f5f5f5
.icon 
  color: #000
.pro
  padding: 0 6px
  position relative
  margin-bottom 10px
  .start
    font-size 12px 
    margin-top 10px
    background #fff
    height 60px
    ul 
      display flex  
      justify-content space-between
      font-size 16px
      height 30px
      line-height 30px
   img 
      width 100%
  .ok
    background #fff
    height 40px
    line-height 40px
    position absolute 
    bottom 0
    left 50%
    transform translateX(-50%)
    width 97%
    font-size 18px
    .left
      position absolute 
      width 97%
      box-shadow 1px 1px 5px 5px #ccc
      left 50%
      transform translateX(-50%)
</style>
