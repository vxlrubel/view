import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const site_title = (pageTitle ='Test', mainTitle = 'Agency')=>{
    return `${pageTitle} - ${mainTitle}`;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: site_title('Home') },
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/ServiceView.vue'),
      meta: { title: site_title('Services') },
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue'),
      meta: { title: site_title('Portfolio') },
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue'),
      meta: { title: site_title('Blog')},
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: site_title('Contact Us') },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: site_title('About Us') },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'My Vue App';
  next();
});

export default router;
