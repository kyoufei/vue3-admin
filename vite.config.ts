import { defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';
import UnoCSS from 'unocss/vite';
import requireTransform from 'vite-plugin-require-transform';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import transformerDirective from '@unocss/transformer-directives';

// https://vitejs.dev/config/
export default defineConfig(({ mode: ConfigEnv }): UserConfig => {
  const env = loadEnv(ConfigEnv, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
        eslintrc: {
          enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false
          filepath: './.eslintrc-auto-import.json', // 指定自动导入函数 eslint 规则的文件
        },
        dts: resolve(resolve(__dirname, 'src'), 'types', 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路
        vueTemplate: true, // 是否在 vue 模板中自动导入
        resolvers: [
          ElementPlusResolver(), // 自动导入图标组件
          IconsResolver({}),
        ],
      }),
      Components({
        dirs: ['src/components/', 'src/layout/'],
        extensions: ['vue', 'tsx'],
        dts: resolve(resolve(__dirname, 'src'), 'types', 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径
        resolvers: [
          ElementPlusResolver(), // 自动注册组件
          IconsResolver({
            enabledCollections: ['ep'], // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          }),
        ],
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true,
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
          },
        ],
      }),
      UnoCSS({
        /* options */
        transformers: [transformerDirective()],
      }),
      requireTransform({
        fileRegex: /\.vue$|\.js$|.cjs$/,
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    // 引用使用sass的库要配置一下
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       javascriptEnabled: true,
    //       // additionalData: `@use "@/styles/variables.scss" as *;`,
    //     },
    //   },
    // },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        comps: resolve(__dirname, 'src/components'),
        apis: resolve(__dirname, 'src/apis'),
        views: resolve(__dirname, 'src/views'),
        utils: resolve(__dirname, 'src/utils'),
        routes: resolve(__dirname, 'src/routes'),
        styles: resolve(__dirname, 'src/styles'),
        // 'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js', // vue-i18n使用cjs引入,做tree-shaking
      },
    },
    server: {
      // 配置前端服务地址和端口
      //服务器主机名
      host: '127.0.0.1',
      //端口号
      port: 3088,
      //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
      open: true,
      //自定义代理规则
      proxy: {
        // 选项写法
        [env.VITE_APP_BASE_API]: {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
  };
});
