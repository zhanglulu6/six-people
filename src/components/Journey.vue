<template >
<!-- 定制中的行程没有定制之前的页面 -->
  <div class="journey">
    <!-- 需求行程头部 -->
    <div>
      <van-nav-bar
      title="完善需求"
      right-text="跳过"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
      :placeholder="true"
      />
    </div>
    <!-- 需求行程的图片和加号 -->
    <div class="journey-main">
        <div class="journey-top">
          <div class="journey-second">
            <!-- 完成的图标 -->
            <!-- <van-icon name="passed" /> -->
            <svg class="icon van-icon" aria-hidden="true" >
              <use xlink:href="#icon-wancheng" style="width:40px;height:40px;"></use>
            </svg>
            <p>需求提交成功</p>
            <!-- <van-empty
              class="custom-image"
            /> -->
          </div>
        </div>
    </div>
    <!-- 完善需求 -->
    <div class="journey-mid">
      <p>-- 完善需求 --</p>
    </div>
    <!-- 酒店，机票 -->
    <div class="journey-end">
      <!-- 酒店星级 -->
      <div>
        <h3 style="margin-left:-167px;">酒店星级<span style="color:#ccc;">(选填)</span></h3>
        <div style="display:flex;">
          <div style="justify-content:space-around;align-items:center;width:33%">
            <input type="checkbox" style="border-radius:50%">三星级
          </div>
          <div style="justify-content:space-around;align-items:center;width:33%">
            <input type="checkbox" style="border-radius:50%">四星级
          </div>
          <div style="justify-content:space-around;align-items:center;width:33%">
            <input type="checkbox" style="border-radius:50%">五星级
          </div>
        </div>
      </div>
      <!-- 机票 -->
      <div style="margin-top:30px;">
        <h3 style="margin-left:-200px;">机票<span style="color:#ccc">(选填)</span></h3>
        <div style="display:flex;">
          <div style="justify-content:space-around;align-items:center;width:33%">
            <input type="checkbox" style="border-radius:50%">经济舱
          </div>
          <div style="justify-content:space-around;align-items:center;width:33%">
            <input type="checkbox" style="border-radius:50%">商务舱
          </div>
          <div style="justify-content:space-around;align-items:center;width:33%">
            <!-- <input type="checkbox">头等舱 -->
            <input type="checkbox" style="border-radius:50%">商务舱
          </div>
        </div>
      </div>
      <!-- 需求内容填写 -->
      <div class="textneed">
       <div style="width:85%;margin:0 20px;margin-top:20px;">
         <!-- <input type="text" placeholder="你是否还有其他需求" style="width:98%;height:40%"> -->
         <textarea name="" id="" cols="15" rows="5" style="width:100%;border-radius:10px" placeholder="你是否还有其他需求?(140字内)" class="text"></textarea>
       </div>
      </div>
    </div>
    
    <!-- 需求行程的底部 (用固定定位定在底部)-->
    <div class="confirm" @click="querenClick">确定</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import photo from '../store/photo/index';
export default defineComponent ({
  data(){
    return{
       checked: false
    }
  },
  methods: {
    //左边点击进入首页
    onClickLeft() {
      return this.$router.push("/index");
    },
    // 点击右边直接进入定制中的行程
    onClickRight() {
      return this.$router.push("/precious");
    },
    querenClick() {
      return this.$router.push("/precious");
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
