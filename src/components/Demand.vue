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
    <img
      src="../assets/demand1.png"
      class="img-top"
    />

    <!-- 需求页的选择项 -->
    <div class="main-first">
      <van-cell-group>
        <van-cell title="目的地" to="chooseaddress" :value="confirmCity==''?'请输入目的地':confirmCity" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="出行日期" :value="date?date:'选填'" @click="show = true" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="人数" :value="str?str:'选填'" @click="showsecond = true" />
        <!-- <van-field label = "人数" :value = "value" @click="showsecond = true" /> -->
      </van-cell-group>
      <van-cell-group>
        <!-- <van-cell title="联系人" value="姓名" /> -->
        <van-field v-model="value" label="姓名" placeholder="选填" />
      </van-cell-group>
      <van-cell-group>
        <!-- <van-cell title="联系电话" :value="phone1?phone1:'选填'" /> -->
        <van-field v-model="value1" label="联系电话" placeholder="选填" />
      </van-cell-group>
      <van-button round type="info" color="#27d461" @click="goToJourney">免费获取旅行方案</van-button>
    </div>

    <!-- 点击日期出现的弹框 -->
    <van-calendar v-model:show="show" type="range" @confirm="onConfirmFirst" class="show-data" />

    <!-- 点击人数出现的弹框 -->
    <van-action-sheet v-model:show="showsecond" @select="onSelect">
      <div class="content" style="position:relative">
        <van-picker show-toolbar  :columns="columns" @confirm="onConfirm"></van-picker>
        <div class="text-first">
          <span style="margin-right:150px;">成人</span>
          <span>儿童</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Toast } from "vant";
import { useRouter, stringifyQuery } from "vue-router";
import { useStore } from "vuex";
import { key } from "./../store/index";
export default defineComponent({
  setup() {
    // 人数数据
    let showsecond = ref(false);
    const columns = [
      // 第一列
      {
        values: [
          "1人",
          "2人",
          "3人",
          "4人",
          "5人",
          "6人",
          "7人",
          "8人",
          "9人",
          "10人",
          "11人",
          "12人",
          "13人",
          "14人",
          "15人",
          "16人",
          "17人",
          "18人",
          "19人",
          "20人",
          "21人",
          "22人",
          "23人",
          "24人",
          "25人",
          "26人",
          "27人",
          "28人",
          "29人",
          "30人"
        ],
        defaultIndex: 0
      },
      // 第二列
      {
        values: [
          "0人",
          "1人",
          "2人",
          "3人",
          "4人",
          "5人",
          "6人",
          "7人",
          "8人",
          "9人",
          "10人",
          "11人",
          "12人",
          "13人",
          "14人",
          "15人",
          "16人",
          "17人",
          "18人",
          "19人",
          "20人",
          "21人",
          "22人",
          "23人",
          "24人",
          "25人",
          "26人",
          "27人",
          "28人",
          "29人",
          "30人"
        ],
        defaultIndex: 0
      }
    ];
    let pick = ref(null);
    let str = ref("");
    const onConfirm = arr => {
      str.value = `成人${arr[0]},儿童${arr[1]}`;
      localStorage.setItem("str", str.value);
    };
    const onSelect = (item) => {
      showsecond.value = false;
    };

    // 地址选择
    const store = useStore(key);
    let confirmCity = localStorage.getItem("confirmCity");
    if (!confirmCity) {
      confirmCity = store.state.choose.confirmCity;
    }

    // 日期
    let date = ref("");
    let show = ref(false);
    const formatDate = date => `2020年${date.getMonth() + 1}月${date.getDate()}日`;
    const onConfirmFirst = date1 => {
      const [start, end] = date1;
      show.value = false;
      // date.value = `${formatDate(start)} - ${formatDate(end)}`;
      date.value = `${formatDate(start)}`;
      localStorage.setItem("date", date.value);
    };
    
    const value = ref("");
    const value1 = ref("");
    // let phone1 = localStorage.getItem("phone");

    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    const goToJourney = () => {
      if(confirmCity) {
        router.push("/journey");
      } else {
        Toast('请输入目的地');
      }
    };

    return {
      date,
      show,
      onConfirmFirst,
      confirmCity,
      onConfirm,
      showsecond,
      columns,
      str,
      onClickLeft,
      onSelect,
      goToJourney,
      // phone1,
      value,
      value1,
    };
  }
});
</script>
<style lang="stylus" scoped>
.demand {
  position: relative;

  .img-top {
    width: 100%;
    height: 200px;
  }

  .main-first {
    position: absolute;
    top: 210px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 285px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px #ccc;

    .div {
      border-bottom: 1px solid black;
    }
  }

  .show-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .content {
      padding: 16px 16px 160px;
    }

    .text-first {
      display: flex;
      justify-content: space-between;
      align-items: center;
      display: inline-block;
    }
  }
}
</style>