<template>
  <div class="demand" style="position: relative">

    <!-- 提交需求页的头部 -->
    <van-nav-bar
      title="提交需求"
      :fixed="true"
      :placeholder="true"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />

    <!-- 需求页的图片 -->
    <img src="https://img95.699pic.com/photo/50065/5220.jpg_wh300.jpg!/both/284x198" class="img-top" />

    <!-- 需求页的选择项 -->
    <div class="main-first">
      <van-cell-group>
        <van-cell title="目的地" to="chooseaddress" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="出行日期" :value="date" @click="show = true" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="人数" value ="选填" @click="showsecond = true" />
        <!-- <van-field label = "人数" :value = "value" @click="showsecond = true" /> -->
      </van-cell-group>
      <van-cell-group>
        <van-cell title="联系人" value="姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="联系电话" value="电话" />
      </van-cell-group>
      <van-button round type="info" color="#27d461" to="journey">免费获取旅行方案</van-button>
    </div>

    <!-- 点击日期出现的弹框 -->
    <van-calendar v-model:show="show" type="range" @confirm="onConfirmFirst" class="show-data" />

    <!-- 点击人数出现的弹框 -->
    <van-action-sheet v-model:show="showsecond" @select="onSelect">
      <div class="content" style="position:relative">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
        >
        </van-picker>
        <div class="text-first">
          <span style="margin-right:150px;">成人</span>
          <span>儿童</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
// import { DemandType } from "../interface/index";
// import { reactive } from "vue";
// import DataList from "./demand/DataList.vue"
export default defineComponent ({
  data() {
    return {
      showsecond: false,
      columns:[
        // 第一列
        {
          values: ["1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人", "9人", "10人", "11人", "12人", "13人", "14人", "15人", "16人", "17人", "18人", "19人", "20人", "21人", "22人", "23人", "24人", "25人", "26人", "27人", "28人", "29人", "30人"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["0人", "1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人", "9人", "10人", "11人", "12人", "13人", "14人", "15人", "16人", "17人", "18人", "19人", "20人", "21人", "22人", "23人", "24人", "25人", "26人", "27人", "28人", "29人", "30人"],
          defaultIndex: 1,
        }
      ]
    };
  },
  setup() {
    const date = ref("选填");
    const show = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirmFirst = (date1) => {
      const [start, end] = date1;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    };

    return {
      date,
      show,
      onConfirmFirst,
    };

    // 人数
    // const columns = [
    //   {
    //     values: ["1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人", "9人", "10人", "11人", "12人", "13人", "14人", "15人", "16人", "17人", "18人", "19人", "20人", "21人", "22人", "23人", "24人", "25人", "26人", "27人", "28人", "29人", "30人"],
    //     defaultIndex: 2,
    //   },
    //   // 第二列
    //   {
    //     values: ["0人", "1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人", "9人", "10人", "11人", "12人", "13人", "14人", "15人", "16人", "17人", "18人", "19人", "20人", "21人", "22人", "23人", "24人", "25人", "26人", "27人", "28人", "29人", "30人"],
    //     defaultIndex: 1,
    //   }
    // ];

    // const state = reactive ({
    //   value: "选填",
    //   showsecond: false
    // }) as DemandType;

    // const onConfirm = (value) => {
    //   state.value = value;
    //   state.showsecond = false;
    // };

    // return {
    //   state,
    //   columns,
    //   onConfirm,
    // }
  },
  methods: {
    onClickLeft() {
      return this.$router.go(-1)
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showsecond = false;
    }
  }
  // 检验是否有日期
  // mounted() {
  //   setInterval(() => {
  //     console.log(this.date)
  //   }, 1000)
  // }
});
</script>
<style lang="stylus" scoped>
.demand
  position relative

  .img-top
    width 100%
    height 200px

  .main-first
    position absolute
    top 210px
    left 50%
    transform translateX(-50%)
    width 90%
    height 285px
    background #fff
    border-radius 10px
    box-shadow 3px 3px 3px 3px #ccc

    .div
      border-bottom 1px solid black

  .show-data
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

    .content
      padding 16px 16px 160px

    .text-first
      display flex
      justify-content space-between
      align-items center
      display inline-block
</style>