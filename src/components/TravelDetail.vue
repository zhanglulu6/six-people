<template>
  <div class="travel-detail" v-for="item in travelDetailList" :key="item.id">
    <!-- 旅游详情页的头部 -->
    <van-nav-bar
      :title="item.detail"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="share-o" size="18" @click="showPopup" />
      </template>
    </van-nav-bar>
    <!-- 点击图标出现的模态框 -->
    <van-popup v-model:show="show" class="detail-popup">
      <div>
        <p>分享微信好友</p>
        <p>分享微信朋友圈</p>
      </div>
    </van-popup>

    <!-- 详情页的主体 -->
    <ul class="detail-top">
      <li v-for="item in travelDetailList" :key="item.id">
        <lazy-component class="reason-img">
          <img v-lazy="item.imgUrl" />
        </lazy-component>
        <div class="top-first">
          <span>{{ item.title }}</span>
          <h6>{{ item.content }}</h6>
        </div>
        <p class="top-second">{{ item.detail }}</p>
      </li>
    </ul>

    <!-- 详情页的介绍(固定) -->
    <div class="detail-main">
      <p class="detail-main-first">就是要玩不一样的</p>
      <div class="detail-main-second">
        <p>今天给大家带来5条</p>
        <p>超适合东游的(不与陌生人拼)专属小团</p>
        <p>专属用车、专属线路、专属私导</p>
        <p>5天4晚,一个周未加三天假期</p>
        <p>享慵懒、舒适、尽兴度假范儿</p>
      </div>
      <div class="detail-main-third">
        <h4>西双版纳</h4>
        <p class="top">雨林、博物、传承</p>
        <p>寒假带孩子去西双版纳，呼吸热带雨林中的空气，和大象交朋友，与少数民族多元文化交流碰撞。</p>
        <p>西双版纳是联合国生物多样性保护圈的成员，境内植物种类占全国的1/6，动物种类占全国的1/4，带孩子探访遮天蔽日的热带雨林植物王国，上一堂身临其境的博物课。</p>
        <img src="../assets/xsbl1.jpg" />
        <h5>倾听大象絮语</h5>
        <p>孩子们将与小象一同漫步雨林，亲密接触。我们将会加入野象谷保育员的牧象之旅，陪着还未成年的小象在雨林中漫步，一路上与小象同行，还可以在保育员的指导下给小象喂食、与它互动，留下珍贵的影像记忆。</p>
        <img src="../assets/xsbl2.jpg" />
        <p
          class="top-five"
        >野象谷森林公园就建立在亚洲象常去饮水的河谷里，在树与树之间架起6米高的空中观象长廊，又修建了穿越雨林的空中索道，既不影响亚洲象的生活，保障了彼此的安全，又给我们近距离观察野象的机会。</p>
        <img src="../assets/xsbl3.jpg" />
        <h5>感受雨林脉动</h5>
        <p>中科院热带植物园中生活着12000多种热带植物，是我国面积最大、物种最丰富的5A级植物园区。</p>
        <img src="../assets/xsbl4.jpg" />
        <p
          class="top-five"
        >孩子们将会跟着向导探索雨林，邂逅植物王国的月升日落。我们将在科普讲解员的带领下进入中科院西双版纳热带植物园的热带雨林徒步，讲解员会为我们翻开这本活着的动植物百科全书，路上邂逅的奇花异草都叫什么名字？藤蔓如何与寄主共生？一直在鸣叫的鸟长什么样子？</p>
        <img src="../assets/xsbl5.jpg" />
        <p
          class="top-five"
        >孩子们将会在雨林的开阔处野餐，大家一起就地取材准备“餐桌”，硕大的芭蕉叶层层叠叠就是桌子，碗筷皆由竹子和木头做成，呼吸着雨林中清新纯净的空气，耳中虫鸣鸟叫不绝，这样的一餐定会让孩子难以忘怀。</p>
        <p>孩子们也可以在晚间进入雨林探秘，夜晚的热带雨林较之白日更为奇幻，神奇生物纷纷苏醒，迎来另一番喧嚣与吵闹，蜗牛、蛞蝓、竹节虫、被风吹落的果实、月光下发出荧荧微光的蘑菇……跟着讲解员在丛林中缓步前进，了解雨林的夜晚。</p>
        <img src="../assets/xsbl6.jpg" />
        <h5>见证非遗传承</h5>
        <p>孩子们做客山林里的傣寨人家，和当地的手工匠人学习传统的非遗技艺。</p>
        <p>我们将在傣家手工艺匠人的指导下，体验慢轮制陶工艺，这种纯靠手工的制陶方式在当地也并不常见，当我们仅凭双手堆叠，在木头齿轮上逐渐盘好一件陶器并敲打均匀，成就感不言而喻。</p>
        <img src="../assets/xsbl7.jpg" />
        <p class="top-five">我们还将和傣族阿哥学跳象鼓舞，这些传统的技艺与舞蹈既是国家级的非遗项目，也是当地人沿袭千年的生活方式。</p>
        <img src="../assets/xsbl8.jpg" />
      </div>
    </div>

    <!-- 详情页的底部 -->
    <div class="footer">
      <van-button type="primary" block color="#27d461">咨询旅行顾问</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent({
  props: ["id"],
  setup() {
    // 模态框
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };

    // const store = useStore(key);
    // const id = ;
    // const getDetailApi = (props) => {
    //   store.dispatch("detail/getDetailApi");
    // };
    // const detailList = computed(() => {
    //   return store.state.detail.detailList;
    // });

    // 跳转页面
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    return {
      show,
      showPopup,
      onClickLeft,
      // getDetailApi,
      // detailList,
    };
  },
  mounted() {
    this.$store.dispatch("getTravelDetailApi", {
      id: this.id
    });
    // this.getDetailApi();
  },
  computed: {
    travelDetailList() {
      return this.$store.state.traveldetail.travelDetailList;
    }
  },
  // methods: {
  //   onClickLeft() {
  //     return this.$router.go(-1);
  //   }
  // },
  // beforeUnmount() {
  //   // 组件复用导致每次跳转到此页面时会自动跳到中间点,用这个生命周期销毁组件复用照成的问题
  //   this.$store.state.traveldetail.travelDetailList = [];
  // },
  beforeRouteUpdate(to, from, next) {
    // 监听路由传的参数id
    this.$store.dispatch("getTravelDetailApi", {
      id: this.$route.params.id
    });
    next();
  }
});
</script>

<style lang="stylus" scoped>
.travel-detail {
  .detail-popup {
    div {
      width: 100%;
      height: 100%;
      padding: 0 270px 0 20px;

      p {
        font-size: 18px;
        text-align: left;
      }
    }
  }

  .detail-top {
    width: 100%;

    li {
      width: 100%;
      height: 220px;
      margin-bottom: 15px;
      position: relative;

      .reason-img {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .top-first {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding-top: 30px;
        color: #fff;

        span {
          display: inline-block;
          padding-bottom: 8px;
          border-bottom: 2px solid #fff;
          font-size: 30px;
          font-weight: 500;
        }

        h6 {
          margin-top: 8px;
          font-size: 22px;
          font-weight: 400;
        }
      }

      .top-second {
        text-align: left;
        padding: 0 20px;
        color: black;
        font-weight: 600;
        font-size: 22px;
      }
    }
  }

  .detail-main {
    padding: 0 20px 50px 20px;

    .detail-main-first {
      margin-top: 100px;
      text-align: left;
      width: 100%;
      height: 100%;
      background: #f7f7f7;
      padding: 10px 0 10px 10px;
      font-size: 20px;
      box-sizing: border-box;
    }

    .detail-main-second {
      p {
        margin: 0;
        font-size: 16px;
        color: black;
      }
    }

    .detail-main-third {
      color: black;

      h4 {
        margin-bottom: 0;
      }

      .top {
        margin-top: 0;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
      }

      p {
        margin-top: 0;
        font-size: 0.45rem;
        text-align: left;
      }

      img {
        width: 100%;
        height: 230px;
        border-radius: 10px;
      }

      h5 {
        text-align: left;
        margin-bottom: 0;
        margin-bottom: 15px;
        font-size: 20px;
      }

      .top-five {
        margin: 20px 0;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10px -20px 20px #fff;
  }
}
</style>
