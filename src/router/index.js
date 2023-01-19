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
    path: '/products/1',
    name: 'Products',
    component: Products,
    children: [
      {
        path: '/products/:id', component: Products
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router