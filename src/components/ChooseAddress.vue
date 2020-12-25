<template>
  <div class="choose">
    <!-- 选择目的地的头部 -->
    <van-nav-bar
      title="选择目的地"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :placeholder="true"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 选择目的地 -->
    <van-tree-select
      style="height: 100%;"
      v-model:active-id="item.activeIndex"
      v-model:main-active-index="item.activeId"
      :items="items"
      @click-item="fn"
    />

    <!-- 选择地的底部 -->
    <div class="content" @click="goback">确认</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore(key);
    const item = store.state.choose.item;
    const items = store.state.choose.items;
    const fn = () => {
      store.dispatch("choose/changeCity", item);
      localStorage.setItem("confirmCity", store.state.choose.confirmCity.text);
    };
    const goback = () => {
      router.go(-1);
    };
    const onClickLeft = () => {
      router.go(-1);
    };
    return {
      item,
      fn,
      items,
      goback,
      onClickLeft
    };
  }
});
</script>

<style lang="stylus" scoped>
.choose {
  .content {
    background: #27d461;
    color: #fff;
  }
}
</style>
