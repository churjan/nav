<template>
  <div class="page-view">
    <div class="header-view">
      <div class="nav-view">
        <router-link :to="item.path" class="nav-item" v-for="item in navList" :key="item.title">
          {{ item.title }}
        </router-link>
      </div>
      <div class="toolbar-view">
        <div class="home-icon" @click="$router.push('/')">
          <el-icon><HomeFilled /></el-icon>
        </div>
      </div>
    </div>
    <div class="content-view">
      <div class="card-view" v-for="item in websiteList" :key="item.title">
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
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonStore } from '@/stores/common'

const route = useRoute()
const common = useCommonStore()

let navList = ref([])
let websiteList = ref([])

watch(
  () => route.path,
  () => {
    fetchWebsiteList()
  }
)

onMounted(() => {
  const catalogName = route.params.catalogName as string
  navList.value = common.navList[catalogName]
  fetchWebsiteList()
})

function fetchWebsiteList() {
  const catalogName = route.params.catalogName as string
  const typeName = route.params.typeName as string
  websiteList.value = common.websiteList[catalogName][typeName]
}
</script>

<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
}

.page-view {
  background: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .home-view {
    position: absolute;
    right: 50px;
    top: 13px;
    cursor: pointer;
  }
  .header-view {
    height: 50px;
    background-color: #fff;
    display: flex;
    .nav-view {
      flex: 1;
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
    .toolbar-view {
      display: flex;
      align-items: center;
      cursor: pointer;
      .home-icon {
        padding: 0 16px;
      }
    }
  }
  .content-view {
    flex: 1;
    overflow-x: auto;
    width: 100%;
    max-width: 1200px;
    margin: 16px auto;
    padding: 0 16px;

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
          margin-right: 16px;
          margin-left: 16px;
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
