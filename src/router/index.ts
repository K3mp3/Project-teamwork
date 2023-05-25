import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import CreateAccountView from "../views/CreateAccountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createaccount',
      name: 'createaccount',
      component: CreateAccountView
    },
  ]
})

export default router
