
const routes = [

  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/IndexPage.vue'),
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('../pages/CategoryPage.vue')
          },
          {
            path: 'product/:id',
            name: 'product',
            component: () => import('../pages/ProductPage.vue')
          },
          {
            path: 'request',
            name: 'request',
            component: () => import('../pages/RequestPage.vue')
          },
          {
            path: 'about',
            name: 'about',
            component: () => import('../pages/AboutUs.vue')
          }
        ]
      },
      {
        path: '/admin',
        component: () => import('layouts/AdminPage.vue'),
        children: [
          {
            path: '',
            component: () => import('../components/adminComponents/AdminCategory.vue')
          },
          {
            path: 'orders',
            component: () => import('../components/adminComponents/AdminOrder.vue')
          },
          {
            path: 'products',
            component: () => import('../components/adminComponents/AdminProduct.vue')
          },
        ]
      },
      {
        path: 'register',
        component: () => import('../admin/RegisterPage.vue')
      },
      {
        path: 'login',
        component: () => import('../admin/LoginPage.vue')
      }
    ]

  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
