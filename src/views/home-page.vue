<template>
  <router-link :to="item.path" v-for="item in navList" :key="item.path">
    {{ item.title }}
  </router-link>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const navList = reactive([
  {
    title: '通用',
    path: 'common'
  },
  {
    title: '前端',
    path: 'frontend'
  }
])
</script>

<style scoped></style>
