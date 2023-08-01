import { Location } from '@element-plus/icons-vue';
import { shallowRef } from 'vue';

const layout = () => import('@/layout/index.vue');
const build = [
  {
    path: '/build',
    redirect: '/build/index',
    component: layout,
    meta: {
      title: '环境构建',
      elIcon: shallowRef(Location),
    },
    children: [
      {
        path: 'index',
        name: 'Build',
        meta: {
          title: '场景列表',
          keepAlive: true,
          requireAuth: true,
          // svgIcon: 'icon-huanjinggoujian',
        },
        component: () => import('@/pages/build/index.vue'),
      },
      {
        path: 'editBuild',
        name: 'EditBuild',
        meta: {
          title: '编辑场景',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/build/index.vue'),
      },
    ],
  },
];
export default build;
