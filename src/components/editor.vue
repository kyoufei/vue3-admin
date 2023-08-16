<template>
  <div>
    <textarea ref="textarea" v-model="code"></textarea>
  </div>
</template>

<script lang="ts" setup>
// 基础依赖
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
// 语法模式
import 'codemirror/mode/yaml/yaml.js';
// 自动刷新依赖
import 'codemirror/addon/display/autorefresh';
// 行高亮依赖
import 'codemirror/addon/selection/active-line';

// JSON错误检查
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';
// 需要依赖全局的jsonlint，不是很优雅
import 'codemirror/addon/lint/json-lint.js';
import 'codemirror/addon/lint/yaml-lint.js';
// 支持括号自动匹配
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/matchbrackets.js';
// 全屏
import 'codemirror/addon/display/fullscreen';

import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter.js';
// import '`codemirror`/mode/javascript/javascript';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint.css';
// 主题样式
// import 'codemirror/theme/base16-dark.css';
// import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/monokai.css'; // 主题

import jsyaml from 'js-yaml';
window.jsyaml = jsyaml;

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  mode: {
    type: String,
    default: 'yaml',
  },
  lint: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: 'monokai',
  },
  styleActiveLine: {
    type: Boolean,
    default: true,
  },
  autoRefresh: {
    type: Boolean,
    default: true,
  },
  // height: {
  //   type: Number,
  //   default: 500,
  // },
});

const emit = defineEmits(['update:modelValue']);
const textarea = ref(null);
const code = ref(props.modelValue);

let coder: { setValue: (arg0: string) => void; on: (arg0: string, arg1: (coder: any) => void) => void };
watch(
  () => props.modelValue,
  (val) => {
    console.log(coder, props.mode, props.readonly, 'coder');
    coder?.setValue(val);
  }
);
const options = {
  mode: props.mode,
  // 缩进格式
  tabSize: 2,
  // 主题，对应主题库 JS 需要提前引入
  theme: props.theme,
  // 行号码
  lineNumbers: true,
  line: true,
  // extraKeys: { Ctrl: 'autocomplete' }, //自定义快捷键
  readOnly: props.readonly,
  lint: props.lint,
  // 光标背景行高亮
  styleActiveLine: props.styleActiveLine,
  // 自动刷新
  autoRefresh: props.autoRefresh,
  // height: '1000px',
  gutters: [
    'CodeMirror-linenumbers',
    'CodeMirror-foldgutter',
    'CodeMirror-lint-markers', // 实现语法报错
  ],
};
const initialize = async () => {
  //   try {
  //     // 动态引入相关依赖
  //     await import(`codemirror/theme/${props.theme}.css`);
  //     if (props.mode) {
  //       await import(`codemirror/mode/${props.mode}/${props.mode}.js`);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
  coder = CodeMirror.fromTextArea(textarea.value, options);
  coder.on('blur', (coder) => {
    const newValue = coder.getValue();
    emit('update:modelValue', newValue);
  });
};
onMounted(() => {
  initialize();
});
const checkYaml = async (val: any) => {
  jsyaml.load(val);
};
defineExpose({
  code,
  options,
  textarea,
  checkYaml,
});
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-class-pattern */
.CodeMirror {
  height: 100% !important;
}
</style>
