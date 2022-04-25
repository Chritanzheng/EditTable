import Vue from 'vue'
import Router from 'vue-router'
// import nurseSheet from '@/components/nurseSheet'
// import nurseSheet2 from '@/components/nurseSheet2'
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
