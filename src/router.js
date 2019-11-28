import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //一级路由
    {
      path: '/',
      redirect: 'discovery',
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: () => import ('views/discovery'),
      children: [
        {
          path: 'recommend',
          component: () => import ('views/discoveryMenu/recommend/index')
        },
        {
          path: 'songList',
          component: () => import ('views/discoveryMenu/songList')
        },
        {
          path: 'DJstation',
          component: () => import ('views/discoveryMenu/station')
        },
        {
          path: 'rank',
          component: () => import ('views/discoveryMenu/rank')
        },
        {
          path: 'singers',
          component: () => import ('views/discoveryMenu/singers')
        },
        {
          path: 'newMusic',
          component: () => import ('views/discoveryMenu/newMusic')
        }
      ]
    },
    {
      path: '/FM',
      name: 'FM',
      component: () => import ('views/FM')
    },
    {
      path: '/live',
      name: 'live',
      component: () => import ('views/live')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import ('views/video')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import ('views/friends')
    },
    {
      path: '/local',
      name: 'local',
      component: () => import ('views/local')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import ('views/download')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import ('views/like')
    }
  ]
})
