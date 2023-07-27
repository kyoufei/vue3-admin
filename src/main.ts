import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/locales';
//导入mock
import './mock/index';
import '@/style.css';
import 'uno.css';
// 注册svg
import 'virtual:svg-icons-register';

const app = createApp(App);
// 挂载pinia
app.use(store);
app.use(router);
app.use(i18n);

app.mount('#app');
