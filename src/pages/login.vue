<template>
  <div>{{ $t('login.login') }} {{ $t('public.delete') }}</div>
  <ElButton @click="test">修改store值1</ElButton>
</template>
<script setup lang="ts">
import { useLocale } from '@/locales/useLocale.ts';
const appStore = useLocale();
let count = ref(0);
const test = () => {
  count.value++;
  const lang = count.value % 2 === 0 ? 'en' : 'zh_CN';
  appStore.setI18nLanguage(lang);
  console.log(appStore.language);
};
</script>
