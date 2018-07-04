import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '../components/about.vue'
import departments from '../components/departments.vue'
import api from '../components/api.vue'
import Joke from '../components/joke.vue'
import List from '@/components/List'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
        path: '/about',
          name: 'About',
          component: about
      },
      {
        path: '/departments',
          name: 'departments',
          component: departments
      },
      {
          path: '/api',
          name: 'api',
          component: api
      },
      {
          path: '/api/joke/:id',
          name: 'jokes',
          component: Joke
      },
      {
          path: '/list',
          name: 'list',
          component : List
      }

  ]}
)
