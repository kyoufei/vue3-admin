import { genMessage } from '../helper';
import en from 'element-plus/es/locale/lang/en';

const modules = import.meta.glob('./en/**/*.json', { eager: true });
export default {
  message: {
    ...genMessage(modules, 'en'),
    ...en,
  },
  dateLocale: null,
  dateLocaleName: 'en',
};
