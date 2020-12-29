<template>
  <div class="index">
    <!-- 轮播图 -->
    <div style="position:relative">
       <!-- 轮播图 -->
      <van-swipe @change="onChange" class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" />
          <!-- 轮播图里的文字 -->
          <span class="imgWord">
            <span class="imgtitle">{{ item.title }}</span>
            <p class="imgWordWidth">{{ item.content }}</p>
          </span>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/3</div>
        </template>
      </van-swipe>
      <!-- 轮播图里的放大镜 -->
      <van-icon name="search" class="index-img" />
      <!-- 轮播图里的按钮 -->
      <van-button icon="plus" type="primary" to="demand" color="#58d18a" class="button-first">提交需求</van-button>
      <van-button icon="notes-o" type="primary" to="journey" color="#58d18a" class="button-second">我的行程方案</van-button>
    </div>

    <!-- 首页的目的地 -->
    <div class="address">
      <div class="address-title">
        <span>目的地</span>
        <span class="address-title-second" @click="goToaddress">更多</span>
      </div>
      <ul class="address-text">
        <li v-for="item in addressList" :key="item.index" @click="goToaddress" class="address-first-li">{{ item }}</li>
      </ul>
    </div>

    <!-- 首页目的地图片 -->
    <div class="address-photo">
      <ul class="address-photo-ul">
        <li v-for="item in addressPhotoList" :key="item.id" @click="goToAsk(item.id)">
          <img :src="item.imgUrl" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>

    <!-- 首页的深度策划 -->
    <div class="plan">
      <div class="plan-title">
        <span>深度策划</span>
        <span class="plan-title-second" @click="goToDeepPlay">更多</span>
      </div>
      <ul class="plan-photo-ul">
        <li v-for="item in planList" :key="item.id">
          <img :src="item.imgUrl" />
          <p>{{ item.title }}</p>
          <span>{{ item.content }}</span>
          <van-icon name="location" color="#eee" class="deepplay-address" />
          <span class="deepplay-span">{{ item.address }}</span>
        </li>
      </ul>
    </div>

    <!-- 首页的旅游灵感 -->
    <div class="travel">
      <h4>旅游灵感</h4>
      <ul class="travel-top">
        <li v-for="item in travelList" :key="item.id" @click="goToTravelDetail(item.id)">
          <lazy-component class="reason-img">
            <img v-lazy="item.imgUrl" />
          </lazy-component>
          <div class="top-first">
            <span>{{ item.title }}</span>
            <h6>{{ item.content }}</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
import { Toast } from "vant";
export default defineComponent ({
  setup() {
    // 轮播图指示器
    const current = ref(0);
    const onChange = (index) => {
      current.value = index;
    };

    // 获取轮播图
    const store = useStore(key);
    const getBannerListApi = () => {
      store.dispatch("banner/getBannerListApi");
    };
    const bannerList = computed(() => {
      return store.state.banner.bannerList;
    });

    // 目的地
    const getHomeAddressApi = () => {
      store.dispatch("address/getHomeAddressApi");
    };
    const addressList = computed(() => {
      return store.state.address.addressList;
    });

    // 目的地图片
    const getHomeAddressPhotoApi = () => {
      store.dispatch("photo/getHomeAddressPhotoApi");
    };
    const addressPhotoList = computed(() => {
      return store.state.photo.addressPhotoList;
    });

    // 策划
    const getHomePlanApi = () => {
      store.dispatch("plan/getHomePlanApi");
    };
    const planList = computed(() => {
      return store.state.plan.planList;
    });

    // 旅游灵感
    const getHomeTravelApi = () => {
      store.dispatch("travel/getHomeTravelApi");
    };
    const travelList = computed(() => {
      return store.state.travel.travelList;
    });

    // 跳转页面
    const router = useRouter();
    const goToDeepPlay = () => {
      router.push("/deepplay");
    };
    const goToaddress = () => {
      router.push("/address");
    };
    const goToTravelDetail = (id) => {
      router.push("/traveldetail/" + id);
    };
    const goToAsk = (id) => {
      router.push("/ask/"+ id);
    };

    // 加载中
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });

    return {
      current,
      onChange,
      getBannerListApi,
      bannerList,
      getHomeAddressApi,
      addressList,
      getHomeAddressPhotoApi,
      addressPhotoList,
      getHomePlanApi,
      planList,
      getHomeTravelApi,
      travelList,
      goToaddress,
      goToDeepPlay,
      goToTravelDetail,
      // goToAddressDetail,
      goToAsk,
    };
  },
  // 1.轮播图接收用传统方式
  // methods: {
  //   getBannerList() {
  //     fetch("http://10.31.162.61:8888/home/swiper")
  //       .then(response => response.json())
  //       .then(res => {
  //         if (res.status === 0) {
  //           this.bannerList = res.list;
  //         }
  //       });
  //   }
  // },
  computed: {
    // 2.轮播图接收state数据用vuex
    // bannerList() {
    //   return this.$store.state.banner.bannerList;
    // },
    // 目的地
    // addressList() {
    //   return this.$store.state.address.addressList;
    // },
    // addressPhotoList() {
    //   return this.$store.state.photo.addressPhotoList;
    // },
    // 策划
    // planList() {
    //   return this.$store.state.plan.planList;
    // },
    // 旅游灵感
    // travelList() {
    //   return this.$store.state.travel.travelList;
    // }
  },
  mounted() {
    // 1.轮播图接收用传统方式
    // this.getBannerList();
    // 2.轮播图触发actions用vuex
    // this.$store.dispatch("getBannerListApi");
    this.getBannerListApi();
    // setTimeout(() => {
    //   console.log(this.bannerList)
    // }, 2000)

    // 首页的目的地
    this.getHomeAddressApi();
    // this.$store.dispatch("getHomeAddressApi");

    // 首页目的地图片
    this.getHomeAddressPhotoApi();
    // this.$store.dispatch("getHomeAddressPhotoApi");

    // 首页的策划
    this.getHomePlanApi();
    // this.$store.dispatch("getHomePlanApi");

    // 首页的旅游灵感
    this.getHomeTravelApi();
    // this.$store.dispatch("getHomeTravelApi");

  },
  methods: {
    // addressClick() {
    //   return this.$router.push("/address")
    // },
    // addressPhotoClick() {
    //   return this.$router.push("/detail/2")
    // },
    // goToDeepPlay() {
    //   return this.$router.push("/deepplay")
    // },
    // goToDetail(id) {
    //   return this.$router.push("/detail/" + id)
    // }
  }
})
</script>

<style lang="stylus" scoped>
.index
  .index-img
    position absolute
    top 15px
    left 15px
    font-size 25px
    color #fff
    font-weight 700

  .button-first 
    position absolute
    bottom 25px
    left 26px
    width 150px
    font-size 16px
  

  .button-second 
    position absolute
    bottom 25px
    right 26px
    font-size 16px
  

  .my-swipe .van-swipe-item 
    color #fff
    height 250px
    background-color #39a9ed

    img
      width 100%
      height 100%
    

    .imgWord
      position absolute
      top 43%
      left 20px
      width 100%
      text-align left

      .imgtitle
        font-size 22px
      

      .imgWordWidth 
        margin-top 0
        margin-bottom 0
        font-size 16px    

  .custom-indicator 
    position absolute
    top 35%
    left 20px
    font-size 20px
  
  .address
    .address-title
      padding 20px
      display flex
      justify-content space-between
      align-items center

      span:nth-of-type(1)
        font-weight 700
        font-size 22px
        color black

      .address-title-second
        font-size 16px

    .address-text
      display flex
      flex-wrap wrap
      justify-content center
      align-items center

      
      .address-first-li
        width 72px
        height 41px
        line-height 41px
        font-size 16px
        border 1px solid #ccc
        border-radius 10px
        background #f9f9f9
        color black

      .address-first-li:nth-of-type(1)
        margin-bottom 10px
        margin-right 10px

      .address-first-li:nth-of-type(2)
        margin-bottom 10px
        margin-right 10px

      .address-first-li:nth-of-type(3)
        margin-bottom 10px
        margin-right 10px

      .address-first-li:nth-of-type(4)
        margin-bottom 10px
      
      .address-first-li:nth-of-type(5)
        margin-right 10px
        
      .address-first-li:nth-of-type(6)
        margin-right 10px

      .address-first-li:nth-of-type(7)
        margin-right 10px

  .address-photo
    padding 0 20px

    .address-photo-ul
      display flex
      overflow auto

      li
        list-style none
        margin-right 10px
        flex 1
        position relative

        img
          width 100px
          height 100px

        span
          position absolute
          left 5px
          bottom 5px
          font-size 18px
          color #fff

  .plan
    padding 0 20px

    .plan-title
      padding 15px 0
      display flex
      justify-content space-between
      align-items center

      span:nth-of-type(1)
        font-weight 700
        font-size 22px
        color black

      .plan-title-second
        font-size 16px

    .plan-photo-ul
      display flex
      overflow auto

      li
        list-style none
        margin-right 10px
        flex 1
        position relative

        .deepplay-address
          position absolute
          top 148.5px
          left 10px
          font-size 15px
          height 15px

        .deepplay-span
          position absolute
          top 145px
          left 30px
          color #eee

        img
          width 140px
          height 170px
          // border 2px solid #eee

        span
          display inline-block
          font-size 14px
          text-align left
          color black

  .travel
    padding 0 20px

    h4
      text-align left
      color black
      font-size 22px
    
    .travel-top
      width 100%

      li
        width 100%
        height 180px
        margin-bottom 15px
        position relative

        .reason-img
           width 100%
           height 100%
           
          img
            width 100%
            height 100%
            border-radius 10px
            // opacity 0.95
            // background #ccc
            // background rgba(0, 0, 0, 0.9)

        .top-first
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          width 100%
          padding-top 30px
          color #fff

          span
            display inline-block
            padding-bottom 8px
            border-bottom 2px solid #fff
          
          h6
            margin-top 8px
            font-size 16px
            font-weight 400
</style>
