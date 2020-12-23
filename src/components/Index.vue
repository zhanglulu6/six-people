<template>
  <div class="index">
    <div style="position:relative">
       <!-- 轮播图 -->
      <van-swipe @change="onChange" class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="item in bannerList" :key="item">
          <img :src="item" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/3</div>
        </template>
      </van-swipe>
      <!-- 轮播图里的文字 -->
      <!-- <div class="text-top" v-for="item in bannerText" :key="item.title">
        <h4 style="margin-top: 0;margin-bottom: 0;">{{ item.title }}</h4>
        <p>{{ item.detitle }}</p>
      </div> -->
      <!-- 轮播图里的按钮 -->
      <van-button icon="plus" type="primary" to="demand" color="#58d18a" class="button-first">提交需求</van-button>
      <van-button icon="notes-o" type="primary" to="journey" color="#58d18a" class="button-second">我的行程方案</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
export default defineComponent ({
  data() {
    return {
      bannerList: [],
      // bannerText: [
      //   {
      //     title:"莫高千佛·敦煌",
      //     detitle:"壁画临摹,飞天旅拍,沙漠下午茶"
      //   },
      //   {
      //     title:"北国童话",
      //     detitle:"雪中小镇,雾凇温泉,冰湖冬捕"
      //   },
      //   {
      //     title:"彩云之南,西双版纳",
      //     detitle:"孔雀雨林,傣寨金佛,假装在泰国"
      //   }
      // ],
      // bannerTextIndex: 0
    }
  },
  setup() {
    const current = ref(0);
    const onChange = (index) => {
      current.value = index;
    };
    return {
      current,
      onChange,
    };
  },
  methods: {
    getBannerList() {
      fetch("http://10.31.162.61:8888/home/swiper")
        .then(response => response.json())
        .then(res => {
          if (res.status === 0) {
            this.bannerList = res.list;
          }
        });
    }
  },
  mounted() {
    this.getBannerList();
  }
})
</script>

<style lang="stylus" scoped>
// .index .text-top {
//   position: absolute;
//   bottom: 70px;
//   left: 20px;
//   font-size: 25px;
    
// }
.index .button-first {
  position: absolute;
  bottom: 25px;
  left: 26px;
  width: 150px;
  font-size: 16px;
}

.index .button-second {
  position: absolute;
  bottom: 25px;
  right: 26px;
  font-size: 16px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  height: 250px;
  background-color: #39a9ed;

  img {
    width: 100%;
    height: 100%;
  }
}
.custom-indicator {
    position: absolute;
    top: 40%;
    left: 20px;
    // transform: translateX(-50%);
    font-size: 20px;
  }
</style>
