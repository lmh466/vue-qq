import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QQ from '@/components/index'
import Send from '@/components/send'

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
    },
    {
      path:'/send.html',
      name:'send',
      component:Send
    }
  ]
})
