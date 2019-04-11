import Vue from 'vue'
import Router from 'vue-router'
import loginContainer from '@/components/login'
import mainContainer from '@/components/main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginContainer',
      component: loginContainer
    },
    {
      path:'/main',
      name:'mainContainer',
      component:mainContainer
    }
  ]
})
