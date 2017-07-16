import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QQ from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/index.html',
    	name:'index',
    	component:QQ
    }
  ]
})