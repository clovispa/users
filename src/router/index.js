import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/dashboardComponent',
    name: 'dashboardComponent',
    component: () => import(/* webpackChunkName: "ComponentMain" */ '../components/DashboardComponent.vue'),
    children: [
      {
        path: '/',
        name: 'tabla',
        component: () => import(/* webpackChunkName: "TableUser" */ '../components/componentUser/TableUser'),

      },
        {
      path: '/todos',
      name: 'todos',
      component: () => import(/* webpackChunkName: "componentTodos" */ '../components/componentUser/componentTodos'),

    },]
  },
  {
    path: '/new',
    name: 'newForm',
    component: ()=> import(/*webpackChunkName: "new"*/ '../views/newForm')
  }
]

const router = new VueRouter({
  mode : "history",
  routes,


})
export default router
