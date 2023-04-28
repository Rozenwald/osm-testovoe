import { createRouter, createWebHistory } from 'vue-router'
import CharacterList from '~/pages/CharacterList.vue'

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharacterList,
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import ('~/pages/Charts.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
