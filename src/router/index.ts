import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    meta: { title: '内容', icon: 'el-icon-location' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: { title: 'About' }

      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    meta: { title: 'Table', icon: 'el-icon-menu' },
    children: [
      {
        path: '/table',
        component: () => import('@/views/Table.vue'),
        meta: { title: 'Table' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
