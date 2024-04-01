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
      component: () => import('../views/frontend-page.vue'),
      redirect: '/frontend/docs',
      children: [
        {
          path: 'docs',
          component: () => import('../views/frontend-page.vue')
        },
        {
          path: 'tools',
          component: () => import('../views/frontend-page.vue')
        },
        {
          path: 'tutorials',
          component: () => import('../views/frontend-page.vue')
        },
        {
          path: 'ai',
          component: () => import('../views/frontend-page.vue')
        }
      ]
    }
  ]
})

export default router
