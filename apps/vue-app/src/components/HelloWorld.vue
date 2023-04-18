<script setup lang="ts">
// import type { User } from '@product-feedback-app/database'

defineProps<{ msg: string }>()

// const API_URL = 'http://localhost:3001/api/v1'

// const result = await fetch(API_URL, {
//   mode: 'cors',
//   credentials: 'omit',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
// const { data: users } = await result.json() as { data: User[] }
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- <p v-if="users.length">
    {{ users.at(0) }}
  </p>
  <p v-else>
    No users found
  </p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
