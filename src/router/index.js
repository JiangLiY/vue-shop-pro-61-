import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome' // 具体是home的子组件
import User from '@/components/User'

// 导入权限列表的路由
import Rights from '@/components/Rights' //具体是home的子组件

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home, redirect: '/welcome',children: [
        {path: '/welcome', component: Welcome},
        {path: '/users', component: User},
        {path: '/rights', component: Rights}
      ]
    }
  ]
})
