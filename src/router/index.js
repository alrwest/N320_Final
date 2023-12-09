//creating our router
import { createRouter, createWebHistory } from 'vue-router'

import SessionsHome from '../views/SessionsHome.vue'
import UserSessions from '../views/UserSessions.vue'

//setting up our routes
const routes = [
  //path for home page
  {
    path: '/',
    name: 'SessionsHome',
    component: SessionsHome
  },
  //path to load user sessions
  {
    path: '/UserSessions',
    name: 'UserSessions',
    //lazy loading
    component: UserSessions
  }
]

//creating the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
