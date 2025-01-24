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
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/policies/PrivacyPolicy.vue'),
      meta: { title: site_title('Privacy policy') },
    },
    {
      path: '/terms-conditions',
      name: 'terms-conditions',
      component: () => import('../views/policies/TermsConditions.vue'),
      meta: { title: site_title('Terms Conditions') },
    },
    {
      path: '/refund-policy',
      name: 'refund-policy',
      component: () => import('../views/policies/RefundPolicy.vue'),
      meta: { title: site_title('Refund Policy') },
    },
    {
      path: '/service-provision-policy',
      name: 'service-provision-policy',
      component: () => import('../views/policies/ServiceProvisionPolicy.vue'),
      meta: { title: site_title('Service Provision Policy') },
    },
    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: () => import('../views/policies/CookiePolicy.vue'),
      meta: { title: site_title('Cookie Policy') },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'My Vue App';
  next();
});

export default router;
