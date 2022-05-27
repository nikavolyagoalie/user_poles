import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from '@/pages/UsersPage.vue'
import CurrentUserPage from '@/pages/CurrentUserPage.vue'

const routes = [
  {
    path: '/',
    component: UsersPage
  },

  {
    path: '/:id',
    component: CurrentUserPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
