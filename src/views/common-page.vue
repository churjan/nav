<template>
  <div class="page-view">
    <div class="nav-view">
      <router-link :to="item.path" class="nav-item" v-for="item in navList" :key="item.title">
        {{ item.title }}
      </router-link>
    </div>
    <div class="content-view">
      <div class="card-view" v-for="item in list" :key="item.title">
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">
          <a
            class="card-item"
            :href="subItem.url"
            target="_blank"
            v-for="subItem in item.subList"
            :key="subItem.title"
            :title="subItem.desc"
          >
            <img class="card-img mr5" :src="subItem.iconUrl || common.defaultIconUrl" />
            <span>{{ subItem.title }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import axios from 'axios'

const route = useRoute()
const common = useCommonStore()

let websiteList = []
let list = ref([])

const navList = reactive([
  {
    title: '资源',
    path: 'resources'
  },
  {
    title: '工具',
    path: 'tools'
  },
  {
    title: '教程',
    path: 'tutorials'
  }
])

watch(
  () => route.path,
  (newRoutePath) => {
    getList(newRoutePath)
  }
)

onMounted(() => {
  axios.get(import.meta.env.BASE_URL + 'configs/commonList.json').then((res) => {
    websiteList = res.data
    getList(route.path)
  })
})

function getList(path) {
  const typeName = path.match(/\/(\w+)$/)?.[1]
  list.value = websiteList[typeName]
}
</script>

<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
}

.page-view {
  background: #f5f5f5;
  min-height: 100vh;

  .nav-view {
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-item {
      padding: 16px;
      &.router-link-active {
        color: #1e80ff;
        font-weight: 700;
      }
    }
  }
  .content-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
    a:visited {
      color: #999;
    }
    .card-view {
      background: #fff;
      padding: 8px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      .card-header {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid #f5f5f5;
      }
      .card-body {
        display: flex;
        flex-wrap: wrap;
        .card-item {
          display: flex;
          align-items: center;
          min-width: 100px;
          margin-right: 16px;
          font-size: 14px;
          .card-img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
