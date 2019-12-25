import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/eliquids',
    name: 'Eliquids',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eliquids" */ '../views/Eliquids.vue')
  },
  {
  path: '/saltnic',
  name: 'Saltnic',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "saltnic" */ '../views/Saltnic.vue')
},
{
path: '/devices',
name: 'Devices',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "devices" */ '../views/Devices.vue')
},
{
path: '/juul',
name: 'Juul',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "juul" */ '../views/Juul.vue')
},
{
path: '/sale',
name: 'Sale',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "sale" */ '../views/Sale.vue')
},
{
path: '/stlth',
name: 'Stlth',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "stlth" */ '../views/Stlth.vue')
},
{
path: '/newarrivals',
name: 'Newarrivals',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "newarrivals" */ '../views/Newarrivals.vue')
},
{
path: '/contactus',
name: 'Contactus',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "contactus" */ '../views/Contactus.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
