import { genMessage } from '../helper';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const modules = import.meta.glob('./zh-CN/**/*.json', { eager: true });
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    ...zhCn,
  },
};
