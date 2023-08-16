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
          hidden: true,
        },
        component: () => import('@/pages/build/index.vue'),
      },
      {
        path: 'subSystem',
        name: 'SubSystem',
        meta: {
          title: '分系统',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/pages/build/index.vue'),
        children: [
          {
            path: 'meshSys',
            name: 'MeshSys',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
          {
            path: 'meshSys1',
            name: 'MeshSys1',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
          {
            path: 'meshSys2',
            name: 'MeshSys2',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
          {
            path: 'meshSys3',
            name: 'MeshSys3',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
          {
            path: 'meshSys4',
            name: 'MeshSys4',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
          {
            path: 'meshSys5',
            name: 'MeshSys5',
            meta: {
              title: 'MESH去中心化自组网分系统',
              keepAlive: true,
              requireAuth: true,
            },
            component: () => import('@/pages/build/index.vue'),
          },
        ],
      },
    ],
  },
];
export default build;
