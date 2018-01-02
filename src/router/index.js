import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/components/HomeView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'Post',
      component: PostView
    }
  ]
})
