import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/home-page.vue')
    },
    {
      path: '/common',
      redirect: '/common/resources'
    },
    {
      path: '/common/:type',
      component: () => import('../views/common-page.vue')
    },
    {
      path: '/frontend',
      redirect: '/frontend/ai'
    },
    {
      path: '/frontend/:type',
      component: () => import('../views/frontend-page.vue')
    }
  ]
})

export default router
