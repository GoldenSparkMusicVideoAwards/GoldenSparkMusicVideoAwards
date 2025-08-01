import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import DefaultView from '../views/DefaultView.vue'
import HaveMV from '../components/register/HaveMV.vue'
import HaveMusic from '../components/register/HaveMusic.vue'
import GSMVLibrary from '../components/register/GSMVLibrary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      // redirect: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TestView,
    },
    {
      path: '/register',
      component: DefaultView,
      children: [
        {
          path: 'HaveMV',
          name: 'HaveMV',
          component: HaveMV,
        },
        {
          path: 'HaveMusic',
          name: 'HaveMusic',
          component: HaveMusic,
        },
        {
          path: 'GSMVLibrary',
          name: 'GSMVLibrary',
          component: GSMVLibrary,
        },
      ]
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: () => import('../views/NewsDetailView.vue')
    },
    // 捕獲所有不存在的路徑並重定向到首頁
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }

  ],
  scrollBehavior() {
    // 始終滾動到頂部
    return { top: 0 }
  },
})

export default router
