<template>
  <el-menu
    :default-active="defaultActive"
    :collapse="layoutStore.isCollapse"
    class="h-100%"
    :class="layoutStore.isCollapse ? 'w-60px' : 'w-380px'"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="menuItem in menu">
      <side-bar-item v-if="!menuItem.meta?.hidden" :key="menuItem.path" :menu-item="menuItem"></side-bar-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { modulesRoutes } from '@/router/modules/base.ts';
import { useLayoutStore } from '@/store/modules/layout';

const router = useRouter();
const route = useRoute();

const defaultPath = '/build/index';
const defaultActive = computed(() => {
  return route.path === '/' ? defaultPath : route.path;
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const layoutStore = useLayoutStore();

const handleSelect = (key: string) => {
  router.push(key);
};

const menu = modulesRoutes.filter((route) => !route.meta?.invisible);
</script>

<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    content: '';
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

:deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.el-menu--collapse {
  :deep(.el-sub-menu) {
    &.is-active {
      /* stylelint-disable-next-line selector-class-pattern */
      .el-sub-menu__title {
        @include tip-line;
      }
    }
  }
}
</style>
