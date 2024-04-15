import { createRouter, createWebHashHistory } from 'vue-router'
import { useCommonStore } from '@/stores/common'

import HomePage from '../views/HomePage.vue'
import CommonPage from '../views/CommonPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

let hasFetched = false

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/:catalogName(common|frontend)/:typeName?',
      component: CommonPage
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
  ]
})

router.beforeEach(async (to, from, next) => {
  const common = useCommonStore()
  if (!hasFetched) {
    await common.fetchNavList()
    await common.fetchWebList()
  }
  hasFetched = true

  next()
})

export default router
