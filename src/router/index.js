import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: () => import('../views/LandingPageView.vue')
    },
    {
      path: '/control',
      name: 'control',
      component: () => import('../views/ControlView.vue')
    }
  ]
})

export default router
