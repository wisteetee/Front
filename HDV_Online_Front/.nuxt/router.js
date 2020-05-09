import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1cb4a0a = () => interopDefault(import('../pages/Accueil.vue' /* webpackChunkName: "pages/Accueil" */))
const _52523122 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _51ffa340 = () => interopDefault(import('../pages/commandes.vue' /* webpackChunkName: "pages/commandes" */))
const _71711b41 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bd0006da = () => interopDefault(import('../pages/produits.vue' /* webpackChunkName: "pages/produits" */))
const _0b707cf9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Accueil",
    component: _e1cb4a0a,
    name: "Accueil"
  }, {
    path: "/clients",
    component: _52523122,
    name: "clients"
  }, {
    path: "/commandes",
    component: _51ffa340,
    name: "commandes"
  }, {
    path: "/inspire",
    component: _71711b41,
    name: "inspire"
  }, {
    path: "/produits",
    component: _bd0006da,
    name: "produits"
  }, {
    path: "/",
    component: _0b707cf9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
