<template>
  <div>
    <div>{{ $t('login.login') }} {{ $t('public.delete') }}</div>
    <ElButton @click="test">测试国际化</ElButton>
    <ElButton @click="testMock">测试mock</ElButton>
    <div>{{ mockData }}</div>
    <SvgIcon name="noPlan" size="400px" />
  </div>
</template>
<script setup lang="ts">
import { useLocale } from '@/locales/useLocale.ts';
import request from '@/utils/axios';

const appStore = useLocale();
let count = ref(0);
const test = () => {
  count.value++;
  const lang = count.value % 2 === 0 ? 'en' : 'zh_CN';
  appStore.setI18nLanguage(lang);
  console.log(appStore.language);
};

const mockData = ref('');
const testMock = () => {
  request.get('/getData').then((res) => {
    console.log(res);
    mockData.value = res.data;
  });
};
</script>
