import { createRouter, createWebHistory } from 'vue-router'
import PaginaPrincipal from '../views/pagina-principal.vue'

const routes = [
  {
    path: '/',
    redirect: '/pagina-principal', // Redirige a la vista de estudiantes
  },
  {
    path: '/pagina-principal',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
