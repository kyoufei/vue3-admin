interface DefaultSetting {
  /*
   * @description: 系统标题
   */
  title: string;
  /*
   * @description: 默认语言
   */
  lang: string;
}

export const defaultSettings: DefaultSetting = {
  title: 'Vue3 Admin',
  lang: 'zh_CN',
};
