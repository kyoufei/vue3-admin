<template>
  <div class="flex h-100% justify-between items-center">
    <div class="flex h-100% items-center">
      <div class="w200px text-center">Logo</div>
      <el-icon :size="20">
        <Fold v-if="layoutStore.isCollapse" class="cursor-pointer" @click="layoutStore.toggleCollapse" />
        <Expand v-else class="cursor-pointer" @click="layoutStore.toggleCollapse" />
      </el-icon>
      <navigator></navigator>
    </div>
    <!-- <side-bar mode="horizontal"> </side-bar> -->
    <el-dropdown>
      <div class="text-center">
        <el-icon class="mr5px vertical-mid" size="20">
          <Avatar />
        </el-icon>
        <span>root</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Fold, Expand } from '@element-plus/icons-vue';
import { useLayoutStore } from '@/store/modules/layout';
import router from '@/router';

const layoutStore = useLayoutStore();

const logout = () => {
  console.log('logout');
  sessionStorage.clear();
  router.push('/login');
};
</script>
