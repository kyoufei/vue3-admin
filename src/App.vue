<template>
  <ElConfigProvider :locale="local">
    <RouterView />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { useLocale } from '@/locales/useLocale.ts';
const appStore = useLocale();
const { language, local, setI18nLanguage } = appStore;
setI18nLanguage(language.value);
</script>
