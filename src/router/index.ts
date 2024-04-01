import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/home-page.vue')
    },
    {
      path: '/frontend',
      redirect: '/frontend/docs'
    },
    {
      path: '/frontend/:type',
      component: () => import('../views/frontend-page.vue')
    }
  ]
})

export default router
