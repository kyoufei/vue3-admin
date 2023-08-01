import { Setting } from '@element-plus/icons-vue';
import { shallowRef } from 'vue';

const layout = () => import('@/layout/index.vue');
const manage = [
  {
    path: '/manage',
    redirect: '/manage/index',
    component: layout,
    meta: {
      title: '集中管理',
      elIcon: shallowRef(Setting),
    },
    children: [
      {
        path: 'index',
        name: 'Manage',
        meta: {
          title: '管理列表',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/manage/index.vue'),
      },
    ],
  },
];
export default manage;
