<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="shadow-md b-rd-3 w-120 p-20 bg-white">
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" @keyup.enter="login">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" type="text" tabindex="1" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            type="password"
            tabindex="2"
            :prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button class="w-100" type="primary" :loading="loading" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
// import request from '@/utils/axios';
import { User, Lock } from '@element-plus/icons-vue';
import { FormInstance } from 'element-plus';
import { LoginRequestData } from '@/api/login/types.ts';
import request from '@/utils/request';

/* router */
const router = useRouter();

/** 登录表单元素的引用 */
const loginFormRef = ref<FormInstance | null>(null);

/** 登录按钮loading */
const loading = ref(false);

/** 登录表单数据 */
const loginForm: LoginRequestData = reactive({
  username: 'admin',
  password: '12345678',
});

/** 登录事件 */
const login = () => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (!valid) return;
    loading.value = true;
    request.post('/login', loginForm).then((res) => {
      console.log('login', res.token);
      sessionStorage.setItem('token', res.token);
      loading.value = false;
      router.push({ path: '/build' });
    });
  });
};

/** 登录表单验证规则 */
const loginFormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
};

// const testMock = () => {
//   request.get('/getData').then((res) => {
//     console.log(res);
//     mockData.value = res.data;
//   });
// };
</script>
