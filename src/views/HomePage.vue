<template>
  <button @click="getUrl(item.path)" v-for="item in navList" :key="item.path">
    {{ item.title }}
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useCommonStore } from '@/stores/common'
const common = useCommonStore()

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

function getUrl(catalogName) {
  router.push({
    path: `/${catalogName}/${common.navList[catalogName][0].path}`
  })
}
</script>

<style scoped></style>
