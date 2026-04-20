import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/bible-verses',
      component: () => import('../views/BibleVersesPage.vue'),
    },
    {
      path: '/poetry',
      component: () => import('../views/PoetryPage.vue'),
    },
    {
      path: '/quotes',
      component: () => import('../views/QuotesPage.vue'),
    },
    {
      path: '/youtube-quotes',
      component: () => import('../views/YouTubeQuotesPage.vue'),
    },
    {
      path: '/ted-talks',
      component: () => import('../views/TedTalksPage.vue'),
    },
  ],
})

export default router
