import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const defaultIconUrl = ref(
    'https://ts1.cn.mm.bing.net/th?id=ODLS.A2450BEC-5595-40BA-9F13-D9EC6AB74B9F&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2'
  )

  return { defaultIconUrl }
})
