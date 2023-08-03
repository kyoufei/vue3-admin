import { useStorage } from '@vueuse/core';
import { setHtmlPageLang } from './helper';
import { useI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import { defaultSettings } from '@/setting';

// setup
export function useLocale() {
  const { locale } = useI18n();
  const language = useStorage('LANG', defaultSettings.lang);

  /**
   * 根据语言标识读取对应的语言包(element-plus)
   */
  const local = computed(() => (language.value === 'en' ? en : zhCn));

  /**
   * 设置语言
   */
  function setI18nLanguage(val: string) {
    console.log('setI18nLanguage', val);
    language.value = val;
    locale.value = val;
    setHtmlPageLang(val);
  }

  /**
   * 切换语言
   */
  function toggleLanguage() {
    const val = language.value === 'en' ? 'zh_CN' : 'en';
    setI18nLanguage(val);
  }

  return {
    language,
    local,
    setI18nLanguage,
    toggleLanguage,
  };
}
