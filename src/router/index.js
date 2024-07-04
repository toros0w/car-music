import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/ServicesView.vue')
    },
    {
      path: '/ui',
      name: 'UiKit',
      component: () => import('@/views/UiKitView.vue')
    }
  ]
})

export default router
