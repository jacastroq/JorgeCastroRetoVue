import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CreateDepartment from '../components/CreateDepartment.vue'
import CreateEmployee from '../components/CreateEmployee.vue'
import CreateEnterprise from '../components/CreateEnterprise.vue'
import EditDepartment from '../components/EditDepartment.vue'
import EditEmployee from '../components/EditEmployee.vue'
import EditEnterprise from '../components/EditEnterprise.vue'
import ListDepartment from '../components/ListDepartment.vue'
import ListEmployee from '../components/ListEmployee.vue'
import ListEnterprise from '../components/ListEnterprise.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createDepartment',
    name: 'CreateDepartment',
    component: CreateDepartment
  },
  {
    path: '/createEmployee',
    name: 'CreateEmployee',
    component: CreateEmployee
  },
  {
    path: '/createEnterprise',
    name: 'CreateEnterprise',
    component: CreateEnterprise
  },
  {
    path: '/editDepartment/:id',
    name: 'EditDepartment',
    component: EditDepartment
  },
  {
    path: '/editEmployee/:id',
    name: 'EditEmployee',
    component: EditEmployee
  },
  {
    path: '/editEnterprise/:id',
    name: 'EditEnterprise',
    component: EditEnterprise
  },
  {
    path: '/listDepartment',
    name: 'ListDepartment',
    component: ListDepartment
  },
  {
    path: '/listEmployee',
    name: 'ListEmployee',
    component: ListEmployee
  },
  {
    path: '/listEnterprise',
    name: 'ListEnterprise',
    component: ListEnterprise
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
