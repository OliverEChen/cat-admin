<template>
  <div class="logo">
    <span>Cat </span>
    <span v-if="!collapsed">Admin</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['collapsed']
})
</script>

<style scoped lang="scss">
.logo {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: white;
}
</style>
