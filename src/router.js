import Vue from 'vue'
import Router from 'vue-router'

import { auth } from "@/firebase";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "about" */ './views/Ingreso.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "about" */ './views/Chat.vue'),
      meta: {requiresAuth: true}
    }, 
  ] 
}) 
 
router.beforeEach((to, from, next) => {

  const user = auth.currentUser

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user) {
      next()
    } else {
      next({name:'ingreso'})
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
