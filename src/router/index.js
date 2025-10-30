import { createRouter, createWebHistory } from 'vue-router'
import PaginaPrincipal from '../views/pagina-principal.vue'
import IniciarSeccion from '../views/iniciar-seccion.vue'

const routes = [
  {
    path: '/',
    redirect: '/pagina-principal',
  },
  {
    path: '/pagina-principal',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal,
  },
  {
    path: '/iniciar-seccion',
    name: 'IniciarSeccion',
    component: IniciarSeccion,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
