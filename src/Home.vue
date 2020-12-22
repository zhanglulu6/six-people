<template>
  <div>
    <index></index>
    <login></login>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Index from "./components/Index.vue";
import Login from "./components/Login.vue";
export default defineComponent({
  components: {
    Index,
    Login
  }
});
</script>
