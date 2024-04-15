import { defineStore } from 'pinia'
import axios from 'axios'

export const useCommonStore = defineStore('common', {
  state: () => ({
    defaultIconUrl:
      'https://ts1.cn.mm.bing.net/th?id=ODLS.A2450BEC-5595-40BA-9F13-D9EC6AB74B9F&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
    navList: {},
    websiteList: {}
  }),
  actions: {
    async fetchNavList() {
      await axios.get(import.meta.env.BASE_URL + 'configs/navList.json').then(({ data }) => {
        this.navList = data
      })
    },

    async fetchWebList() {
      await axios.get(import.meta.env.BASE_URL + 'configs/websiteList.json').then(({ data }) => {
        this.websiteList = data
      })
    }
  }
})
