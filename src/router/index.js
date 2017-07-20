import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QQ from '@/components/index'
import Send from '@/components/send'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path:'index',
          name:'index',
          component:QQ
        },
        {
          path:'send',
          name:'send',
          component:Send
        }
      ]
    }
  ]
})
