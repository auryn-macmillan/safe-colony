
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/tokens', component: () => import('pages/tokens.vue') },
      { path: '/all', component: () => import('pages/tokens.vue') },
      { path: '/rewards', component: () => import('pages/tokens.vue') },
      { path: '/root', component: () => import('pages/tokens.vue') },
      { path: '/2', component: () => import('pages/tokens.vue') },
      { path: '/3', component: () => import('pages/tokens.vue') },
      { path: '/permissions', component: () => import('pages/permissions.vue') },
      { path: '/rewards', component: () => import('pages/rewards.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push(
    {
      path: '*',
      component: () => import('pages/Error404.vue')
    })
}

export default routes
