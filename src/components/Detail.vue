<template>
  <div class="detail">
    <ul>
      <li v-for="item in detailList" :key="item.id">
        <img :src="item.imgUrl"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  props: ["id"],
  mounted() {
    this.$store.dispatch("getDetailApi", {
      id: this.id
    });
  },
  computed: {
    detailList() {
      return this.$store.state.detail.detailList;
    }
  },
})
</script>
