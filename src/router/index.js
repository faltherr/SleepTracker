import Vue from 'vue'
import Router from 'vue-router'
import SleepTable from '@/components/SleepTable'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/edit',
      name: 'SleepTable',
      component: SleepTable
    }
  ]
})
