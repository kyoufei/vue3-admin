import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

// setup
export const useLangStore = defineStore('app', () => {
  const defaultLang = 'zh_CN';
  const language = useStorage('language', defaultLang);

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    return language?.value == 'en' ? en : zhCn;
  });

  /**
   * 切换语言
   */
  function changeLanguage(val: string) {
    language.value = val;
  }

  return {
    language,
    locale,
    changeLanguage,
  };
});
