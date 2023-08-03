<template>
  <div class="flex h-100% justify-between items-center">
    <div class="flex h-100% items-center">
      <div class="w360px text-center">Logo</div>
      <el-icon :size="20">
        <Expand v-if="layoutStore.isCollapse" class="cursor-pointer" @click="layoutStore.toggleCollapse" />
        <Fold v-else class="cursor-pointer" @click="layoutStore.toggleCollapse" />
      </el-icon>
      <navigator></navigator>
    </div>
    <!-- <side-bar mode="horizontal"> </side-bar> -->
    <div>
      <el-dropdown size="small" class="mr10px">
        <el-button size="small">
          {{ langText }}
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in langMap" :key="item" @click="toggleLanguage">{{ item }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown size="small">
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
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Fold, Expand } from '@element-plus/icons-vue';
import { useLayoutStore } from '@/store/modules/layout';
import { useLocale } from '@/locales/useLocale.ts';

const { language, toggleLanguage } = useLocale();

const langMap = {
  zh_CN: '简体中文',
  en: 'English',
};
const langText = computed(() => (langMap as any)[language.value]);

const layoutStore = useLayoutStore();

const router = useRouter();
const logout = () => {
  sessionStorage.clear();
  router.push('/login');
};
</script>
