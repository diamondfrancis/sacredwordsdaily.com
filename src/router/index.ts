import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
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
    {
      path: '/sacred-words',
      component: () => import('../views/SacredWordsPage.vue'),
    },
    {
      path: '/sacred-names',
      component: () => import('../views/SacredNamesPage.vue'),
    },
    {
      path: '/sacred-places',
      component: () => import('../views/SacredPlacesPage.vue'),
    },
    {
      path: '/sacred-numbers',
      component: () => import('../views/SacredNumbersPage.vue'),
    },
    {
      path: '/sacred-fruits',
      component: () => import('../views/SacredFruitsPage.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/contact',
      component: () => import('../views/ContactPage.vue'),
    },
  ],
})

export default router
