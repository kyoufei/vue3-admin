// src/store/modules/user.ts
import { loginApi } from '@/api/auth';
import { LoginData } from '@/api/auth/types';

/**
 * 登录调用
 *
 * @param {LoginData}
 * @returns
 */
export function login(loginData: LoginData) {
  return new Promise<void>((resolve, reject) => {
    loginApi(loginData)
      .then((response) => {
        const { tokenType, accessToken } = response.data;
        const token = ref('');
        token.value = tokenType + ' ' + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
