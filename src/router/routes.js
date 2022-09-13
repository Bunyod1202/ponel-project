
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'category',
        component: () => import('pages/CategoryPage.vue')
      },
      {
        path: 'product',
        component: () => import('pages/ProductPage.vue')
      },
      {
        path: 'request',
        component: () => import('pages/RequestPage.vue')
      },
      {
        path: 'about',
        component: () => import('pages/AboutUs.vue')
      }
    ]
  },

  // {
  //   path: '/',
  //   component: () => import('pages/IndexPage.vue'),
  //   children: [
  //     { path: '/category', component: () => import('pages/Category.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
