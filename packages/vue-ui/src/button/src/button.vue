<script setup lang="ts">
defineOptions({
  name: 'UIButton',
  inheritAttrs: false,
})
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  color: tomato;
}
</style>
