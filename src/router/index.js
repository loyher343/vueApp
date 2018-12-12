import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import users from '/components/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path:'/users',
      name: 'users',
      component: users
    }
  ]
})
