import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tab',
    },
    {
      path: '/tab',
      redirect: '/tab/index',
      name: 'tab',

      component: () => import('@/views/tab/tab'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            index: 0
          },
          component: () => import('@/views/tab/index'),
        },
        {
          path: 'mine',
          name: 'mine',
          meta: {
            index: 0
          },
          component: () => import('@/views/tab/mine'),
        }
      ]
    },
    {
      path: '/assemble',
      name: 'assemble',
      meta: {
        index: 1
      },
      component: () => import('@/views/assemble/assemble'),
    },
    {
      path: '/itemDetail',
      name: 'itemDetail',
      meta: {
        index: 1
      },
      component: () => import('@/views/item/itemDetail'),
    },
    {
      path: '/selection',
      name: 'selection',
      meta: {
        index: 2
      },
      component: () => import('@/views/item/selection'),
    },
    {
      path: '/addressList',
      name: 'addressList',
      meta: {
        index: 4
      },
      component: () => import('@/views/address/addressList'),
    },
    {
      path: '/addressInfo',
      name: 'addressInfo',
      meta: {
        index: 5
      },
      component: () => import('@/views/address/addressInfo'),
    },
    
    {
      path: '/observerList',
      name: 'observerList',
      meta: {
        index: 2
      },
      component: () => import('@/views/observer/observerList'),
    },
    {
      path: '/observerInfo',
      name: 'observerInfo',
      meta: {
        index: 3
      },
      component: () => import('@/views/observer/observerInfo'),
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      meta: {
        index: 2
      },
      component: () => import('@/views/order/myOrder'),
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      meta: {
        index: 3
      },
      component: () => import('@/views/order/orderDetail'),
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      meta: {
        index: 3,
        keepAlive:true
      },
      component: () => import('@/views/order/orderConfirm'),
    },
    {
      path: '/buyerList',
      name: 'buyerList',
      meta: {
        index: 5
      },
      component: () => import('@/views/buyer/buyerList'),
    },
    {
      path: '/buyerInfo',
      name: 'buyerInfo',
      meta: {
        index: 6
      },
      component: () => import('@/views/buyer/buyerInfo'),
    },
    {
      path: '/addressListChose',
      name: 'addressListChose',
      meta: {
        index: 5
      },
      component: () => import('@/views/buyer/addressList'),
    },
    {
      path: '/addressInfoChose',
      name: 'addressInfoChose',
      meta: {
        index: 6
      },
      component: () => import('@/views/buyer/addressInfo'),
    },

    {
      path: '/observerListChose',
      name: 'observerListChose',
      meta: {
        index: 5
      },
      component: () => import('@/views/buyer/observerList'),
    },
    {
      path: '/observerInfoChose',
      name: 'observerInfoChose',
      meta: {
        index: 6
      },
      component: () => import('@/views/buyer/observerInfo'),
    },
    {
      path: '/payState',
      name: 'payState',
      meta: {
        index: 8
      },
      component: () => import('@/views/order/payState'),
    },
    {
      path: '/payment',
      name: 'payment',
      meta: {
        index: 7
      },
      component: () => import('@/views/order/payment'),
    }
  ]
})

