<template>
  <header>目的地</header>
  <van-sidebar v-model="active" class="main">
    <div class="bar">
      <van-sidebar-item @click="itemClick" :title="item" v-for="(item, index) in arealist" :key="index"/>
    </div>
    <div class="main-right">
      <ul>
        <li v-for="item in top" :key="item.id">
          <img :src="item.imgUrl" alt=""> 
          <div class="city">
            <p class="p3">{{ item.title }}</p>
          </div>
        </li>
      </ul>
    
  <div class="recommend">
    <h3>顾问推荐行程</h3>
    <div v-for="item in bottom" :key="item.id" class="line"> 
       <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3260240298,2739383164&fm=26&gp=0.jpg" alt="">
       <p class="p1">{{ item.content}}</p>
       <p class="p2">{{ item.address}}</p> 
    </div> 
  </div>
  </div>
  </van-sidebar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getAreaListApi, getCityListApi } from "../utils/api";
// import { defineComponent } from "vue";
// import { ref } from 'vue';
export default defineComponent({
    setup() {
      const active = ref(0);
      return { active };

    },
    data() {
      return {
        arealist: [],
        citylist:[],
        top: [],
        bottom: [],
        id: 1
      }
    },        
    mounted() {
       this.getArealist();
       this.getCitylist(); 
       
    },
    methods: {
      async getArealist() {
        const res = await getAreaListApi({});
        this.arealist = res.title;     
      },
       async getCitylist() {
        const res = await getCityListApi({ id: this.id });  
        this.top = res.listtop;
        this.bottom = res.listbottom;        
        console.log(res);        
      },
      itemClick(index) {
        this.id = index + 1;
        console.log(this.id);
        this.getCitylist();
      }
    } 
 })
</script>

<style lang="stylus" scoped>
header 
  height 60px
  line-height 60px
  background rgb(247, 248, 250)
  /* position: fixed; */
  width 100%

.main 
  /* background:yellow;  */
  width 100%
  display flex 
  position absolute 
  top 60px
  bottom 50px
  left 0
  right 0
  overflow hidden


.bar 
  width 100px
  height 100%
  overflow auto

.main-right 
  padding 20px
  flex 1
  height 100%
  width 100%
  overflow auto


.main-right ul 
  display flex
  flex-wrap wrap
  justify-content space-between

.main-right li{
  width 100px
  height 100px
  margin-bottom 20px
  margin-right 10px
  
}
.main-right li img 
  width 100%
  height 100%

.main-right .p3 
  font-size 12px
  width 50px
  text-align left

h3 
  margin-top 10px
  text-align left
  font-size 20px

.recommend 
  margin 20px 0


.recommend img 
  width 100%
  height 150px

.recommend .p1 
  font-size 16px
  margin 0
  height 46px
  overflow hidden

.recommend .p2
  font-size 12px
  text-align left

.recommend .line 
  border-bottom 1px solid #ccc
  margin-bottom 20px

.van-sidebar-item--select::before 
  background-color green

.main-right li 
  position relative

.city 
  position absolute
  bottom 40px
  left 10px
  padding-bottom: 6px
  /* background: red; */
  width 30px
  font-weight 600
  height 30px
  color #fff
  border-bottom 1px solid #fff
</style>
