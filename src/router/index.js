import Vue from 'vue'
import Router from 'vue-router'
import editTable from '@/components/editTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editTable',
      component: editTable
    }
  ]
})
