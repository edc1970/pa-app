
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/Index.vue')
      },
      { 
        path: 'login',
        component: () => import('pages/Login.vue')
      },
      { 
        path: 'application',
        component: () => import('pages/Application.vue')
      },
      { 
        path: 'application-done',
        component: () => import('pages/Application-Done.vue')
      },
      { 
        path: 'bux_redirect',
        component: () => import('pages/Bux_Redirect.vue')
      },
      { 
        path: 'bux_notif',
        component: () => import('pages/Bux_Notif.vue')
      },
      { 
        path: 'privacy-policy',
        component: () => import('pages/Privacy-Policy.vue')
      },
      { 
        path: 'cookie',
        component: () => import('pages/Cookie.vue')
      },
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
