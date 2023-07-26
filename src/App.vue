<template>
  <ElConfigProvider :locale="appStore.local">
    <RouterView />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { useLocale } from '@/locales/useLocale.ts';
const appStore = useLocale();
</script>
