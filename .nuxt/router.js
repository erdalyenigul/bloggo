import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _afa27204 = () => interopDefault(import('../pages/database.vue' /* webpackChunkName: "pages/database" */))
const _7a545cf6 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _c16411a6 = () => interopDefault(import('../pages/newPost.vue' /* webpackChunkName: "pages/newPost" */))
const _1d6444ba = () => interopDefault(import('../pages/posts/edit/_editPost.vue' /* webpackChunkName: "pages/posts/edit/_editPost" */))
const _c5749aaa = () => interopDefault(import('../pages/posts/_postID.vue' /* webpackChunkName: "pages/posts/_postID" */))
const _9ea68c42 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a583b092 = () => interopDefault(import('../pages/*.vue' /* webpackChunkName: "pages/*" */))

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
    path: "/database",
    component: _afa27204,
    name: "database"
  }, {
    path: "/login",
    component: _7a545cf6,
    name: "login"
  }, {
    path: "/newPost",
    component: _c16411a6,
    name: "newPost"
  }, {
    path: "/posts/edit/:editPost?",
    component: _1d6444ba,
    name: "posts-edit-editPost"
  }, {
    path: "/posts/:postID?",
    component: _c5749aaa,
    name: "posts-postID"
  }, {
    path: "/",
    component: _9ea68c42,
    name: "index"
  }, {
    path: "/*",
    component: _a583b092,
    name: "*"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
