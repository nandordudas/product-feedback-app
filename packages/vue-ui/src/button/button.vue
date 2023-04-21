<script setup lang="ts">
defineOptions({
  name: 'UIButton',
})
</script>

<template>
  <button
    type="button"
    v-bind="$attrs"
    :tabindex="'disabled' in $attrs ? -1 : 0"
    class="
      p-(x-12 y-3) rounded-xl inline-block bg-teal-700 text-white
      cursor-pointer !outline-none hover:bg-teal-800 disabled:(cursor-default bg-gray-600 opacity-50)
    "
  >
    <slot />
  </button>
</template>
