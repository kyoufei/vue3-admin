import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './modules/base';

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if (to.path !== '/login' && !token) {
    return next('/login');
  }
  next();
});

export default router;
