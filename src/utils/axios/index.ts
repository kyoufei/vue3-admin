import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import nProgress from 'nprogress';
// import { useUserStoreHook } from '@/store/modules/user';

const service = axios.create();

// service.defaults.baseURL = import.meta.env.VITE_APP_BASE_API;
service.defaults.timeout = 5000;
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// Request interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    nProgress.start();
    const token = window.sessionStorage.getItem('access_token');
    // const userStore = useUserStoreHook();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    nProgress.done();
    const { code, msg } = response.data;
    // 登录成功
    if (code === '200') {
      return response.data;
    }

    ElMessage.error(msg || '系统出错');
    return Promise.reject(new Error(msg || 'Error'));
  },
  (error: any) => {
    nProgress.done();
    if (error.response.data) {
      const { code, msg } = error.response.data;
      // token 过期，跳转登录页
      if (code === '401') {
        ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
        }).then(() => {
          localStorage.clear(); // @vueuse/core 自动导入
          window.location.href = '/';
        });
      } else {
        ElMessage.error(msg || '系统出错');
      }
    }
    return Promise.reject(error.message);
  }
);

export default service;
