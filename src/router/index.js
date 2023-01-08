import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'kakaologin',
    component: () => import('../views/Kakaologin.vue')
  },
  {
    path: '/event1',
    name: 'event1',
    component: () => import('../views/Event1.vue')
  },
  {
    path: '/event2',
    name: 'event2',
    component: () => import('../views/Event2.vue')
  },
  {
    path: '/event3',
    name: 'event3',
    component: () => import('../views/Event3.vue')
  },
  {
    path: '/event4',
    name: 'event4',
    component: () => import('../views/Event4.vue')
  },
  {
    path: '/event5',
    name: 'event5',
    component: () => import('../views/Event5.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
