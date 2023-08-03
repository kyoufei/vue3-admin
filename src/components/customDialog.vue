<script setup lang="ts">
//定义props接口
interface IProps {
  isShow: boolean;
}

//初始化props withDefaults、defineProps是编译器宏，无需引入
const props = withDefaults(defineProps<IProps>(), {
  isShow: false, //是否展示
});

const { isShow } = toRefs(props);

//定义发布事件 defineEmits是编译器宏，无需引入
const emit = defineEmits<{
  (e: 'close'): void;
}>();

//关闭弹窗
const closeDialog = () => {
  emit('close');
};
</script>

<template>
  <el-dialog v-model="isShow" title="自定义弹窗" @close="closeDialog"></el-dialog>
</template>
