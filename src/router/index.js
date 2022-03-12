import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Browse from '../views/Browse.vue'
import Saved from '../views/Saved.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
