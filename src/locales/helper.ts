import { set } from 'lodash-es';

export function setHtmlPageLang(lang: string) {
  document.querySelector('html')?.setAttribute('lang', lang);
}

export function genMessage(langs: any, prefix = 'lang') {
  const obj = {};
  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
    const lastIndex = fileName.lastIndexOf('.');
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    const objKey = keyList.join('.');

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, (obj as any)[moduleName] || {});
        set((obj as any)[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}
