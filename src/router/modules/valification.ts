import { shallowRef } from 'vue';
import { TakeawayBox } from '@element-plus/icons-vue';

const layout = () => import('@/layout/index.vue');
const valification = [
  {
    path: '/valification',
    redirect: '/valification/index',
    component: layout,
    meta: {
      title: '仿真验证',
      elIcon: shallowRef(TakeawayBox),
    },
    children: [
      {
        path: 'businessConf',
        name: 'BusinessConf',
        meta: {
          title: '业务配置',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/valification/businessConf.vue'),
      },
      {
        path: 'index',
        name: 'Valification',
        meta: {
          title: '仿真列表',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/valification/index.vue'),
      },
    ],
  },
];
export default valification;
