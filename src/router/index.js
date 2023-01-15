import { createRouter, createWebHashHistory } from "vue-router";
import Login from '@/views/Login/index.vue'
import Products from '@/views/Products/index.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router