<template>
  <el-dialog v-model="innerVisible" title="Tips" width="30%" :before-close="handleClose">
    <el-form :model="form">
      <el-input v-model="form.name" autocomplete="off" />
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleClose"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
//定义props接口
interface IProps {
  modelValue: boolean;
}

// //初始化props withDefaults、defineProps是编译器宏，无需引入
const props = withDefaults(defineProps<IProps>(), {
  modelValue: false, //是否展示
});

const emit = defineEmits(['update:modelValue']);
const innerVisible = ref(false);
watch(
  () => props.modelValue,
  (val) => {
    innerVisible.value = val;
  }
);

const handleClose = () => {
  emit('update:modelValue', false);
};

/** 表单 */
const formLabelWidth = '140px';
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
</script>
