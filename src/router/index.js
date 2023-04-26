import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AjouteView from '../views/AjouteView.vue'
import DashboardView from '../views/DashboardView.vue'
import  DashboardViewENSG from '../views/ENSG/DashboardViewENSG.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about?:user',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/ajoute',
    name: 'ajoute',
    component: AjouteView
  },
  {
    path: '/',
    name: 'dash',
    component: DashboardView,
    children: [
      {
        path: 'matr',
        component: () => import('../views/MatrView.vue')
      },{
        path: 'forn',
        component: () => import('../views/FornView.vue')
      },
      {
        path: '',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/HomeView.vue')
      },
      {
        path: 'tech',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/TechView.vue')
      },
      {
        path: 'ensg',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/EnsgView.vue')
      },

      {
        path: 'demande',
        component: () => import('../views/DemandView.vue')
      },
    ],   
  },{
    path: '/infos',
    name: 'dashens',
    component: DashboardViewENSG,
    children:[
      {
        path:'/infos',
        name:'Informations',
        component: () => import('../views/ENSG/InformationView.vue')

      },
      {
        path:'/demandeMatr',
        name:'demande_matr',
        component: () => import('../views/ENSG/DemandMatrView.vue')

      },
      {
        path:'/demandeFourn',
        name:'demande_fourn',
        component: () => import('../views/ENSG/DemandFourView.vue')

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
