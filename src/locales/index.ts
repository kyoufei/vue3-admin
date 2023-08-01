import { createI18n } from 'vue-i18n';
import zh from './lang/zh_CN';
import en from './lang/en';
import { defaultSettings } from '@/setting';

const storeLang = localStorage.getItem('lang') || defaultSettings.lang;

const localeData = {
  locale: storeLang, // 设置当前语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: {
    zh_CN: zh.message,
    en: en.message,
  },
};

const i18n = createI18n(localeData);

export default i18n;
