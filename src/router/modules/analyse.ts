import { shallowRef } from 'vue';
import { DataAnalysis } from '@element-plus/icons-vue';

const layout = () => import('@/layout/index.vue');
const analyse = [
  {
    path: '/analyse',
    redirect: '/analyse/index',
    component: layout,
    meta: {
      title: '分析验证',
      elIcon: shallowRef(DataAnalysis),
    },
    children: [
      {
        path: 'index',
        name: 'Analyse',
        meta: {
          title: '分析列表',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/analyse/index.vue'),
      },
    ],
  },
];
export default analyse;
