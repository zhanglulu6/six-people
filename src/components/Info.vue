<template>
  <div>
    <van-sticky @scroll="change">
       <van-nav-bar 
       title="固东银杏村" 
       left-arrow 
       v-if="done"
       @click="go"
       />
    </van-sticky>
    <van-icon name="arrow-left" @click="go" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="https://goss2.cfp.cn/creative/vcg/800/new/VCG41N895543848.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://goss.cfp.cn/creative/vcg/800/new/VCG211282651198.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://goss.cfp.cn/creative/vcg/800/new/VCG211294433821.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- 固东银杏村 -->
  <div class="tree">
    <!-- <ul class="gink">
      <li>固东银杏村</li>
      <li>Gudong  Ginkgo  village</li>
    </ul> -->
    <h1>固东银杏村</h1>
    <h5>Gudong  Ginkgo  village</h5>
    <ul>
      <li class="into">简介</li>
      <li>全球共分布有银杏树3000多颗，其中树龄在500年以上的有50多颗，400年以上的有70多颗，珍贵的百年银杏树让这个小村庄显得古朴和深邃</li>
    </ul>
  </div>

  <!-- 基本信息 -->
  <div class="info">
    <h1>基本信息</h1>
      <ul>
        <li class="into">浏览方式</li>
        <li>购票入内</li>
      </ul>
      <ul>
        <li class="into">建议浏览</li>
        <li>2小时</li>
      </ul>
      <ul>
        <li class="into">开放时间</li>
        <li>08:00 - 17:00</li>
      </ul>
      <ul class="last">
        <li class="into">地址</li>
        <li>中国云南省保山市腾冲市固东镇</li>
      </ul>
  </div>

  <div style="height:150px"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  // setup() {
  //   return {
  //     onClickLeft
  //   }
  // },
  data() {
    return {
      done: false
    };
  },
  methods: {
    change(scrollTop) {
      if(scrollTop.scrollTop > 182) {
        this.done = true
      } else {
        this.done = false
      }    
    },
    go() {
      this.$router.go(-1)
    }
  }
});
</script>
<style lang="stylus" scoped>
.van-icon 
  position fixed 
  top 5px
  left 5px
  z-index 999   
.my-swipe
  .van-swipe-item 
    color #fff
    img
      height 260px
      width 100%
.tree
  padding 0 10px
  font-size 16px
  background #fff
  h1
    font-size 20px  
    margin 5px 0  
  h5
    margin 5px 0 10px 0
    font-size 16px
  ul li:nth-child(1) 
    text-align left
    color #ccc  
    margin-left 5px
    height 20px
    line-height 20px
    display flex
    font-size 18px
    margin-bottom 10px

  ul li:nth-child(2)
    text-align left
    padding-left 16px
  .into:before
    content ""
    display block 
    width 4px 
    height 12px
    background green
    margin 5px 10px 0 0
.info 
  background #f5f5f5
  font-size 15px
  text-align left
  padding 0 10px

  h1
    font-size 16px  
    padding-top 20px
    text-align center
  ul 
    padding-bottom 5px
    border-bottom 1px solid #777
  ul li:nth-child(1) 
    text-align left
    color #ccc  
    height 20px
    line-height 20px
    font-size 16px
    margin 10px 0
    display flex
    vertical-align middle

  ul li:nth-child(2)
    text-align left
    padding-left 16px
   
  .into:before
    content ""
    display block 
    width 4px 
    height 12px
    background green
    margin 5px 10px 0 0
    vertical-align middle
  .last li:nth-child(1)
    margin-top 30px


</style>
