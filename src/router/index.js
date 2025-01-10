import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/ServiceView.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
