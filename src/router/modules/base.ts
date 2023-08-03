import { RouteRecordRaw } from 'vue-router';
import build from './buld';
import valification from './valification';
import manage from './manage';
import analyse from './analyse';

// const layout = () => import('@/layout/index.vue');

export const modulesRoutes: RouteRecordRaw[] = [...build, ...valification, ...manage, ...analyse];

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    redirect: '/build',
  },
  {
    path: '/403',
    component: () => import('@/pages/error-page/403.vue'),
    meta: {
      // hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/pages/error-page/404.vue'),
    meta: {
      // hidden: true,
    },
  },
  ...modulesRoutes,
];
