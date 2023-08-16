<template>
  <div class="app-container">
    <!-- <el-button @click="add"></el-button>
    <el-dialog v-model="addVisible" title="创建" width="800px">
      <div>
        <span>是否编辑模式：</span>
        <span class="switch-container">
          <el-switch v-model="modeswitch" active-text="是" inactive-text="否"></el-switch>
        </span>
      </div>

      <el-form v-show="!modeswitch" ref="addform" :model="addForm" :rules="addRules"></el-form>
      <div v-show="modeswitch" style="width: 100%; height: 459px">
        <yaml-editor
          ref="addcodeform"
          v-model:value="cmadd.value"
          v-model:id="cmadd.id"
          @set-form="setForm"
        ></yaml-editor>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="button-grey" @click="addclose">取 消</el-button>
          <el-button type="primary" @click="addSubmit">创 建</el-button>
        </span>
      </template>
    </el-dialog> -->
    <!--编辑-->
    <!-- <yaml-editor ref="editfileform" v-model:value="cmedit.value" v-model:id="cmedit.id"> </yaml-editor> -->
  </div>
</template>

<script setup lang="ts">
// import YamlEditor from '@/components/yamlEditor.vue';
// import { ref, watch } from 'vue';
// import YAML from 'json2yaml';
// const getYAMLJS = require('yamljs');
// let Base64 = require('js-base64').Base64;
// //add
// const modeswitch = ref(false);
// const addVisible = ref(false);
// const addForm = ref({});
// const addRules = ref();
// let cmadd = ref({
//   value: 'dxvd',
//   id: 1,
// });
// addForm.value = {
//   //json
// };
// //rules
// addRules.value = {};
// //TODO创建;
// cmadd.value.value = YAML.stringify(addForm.value);
// function add() {
//   if (addform.value) addform.value.resetFields();
//   addVisible.value = true;
// }
// //change事件:code变化=>表单变化
// function setForm(val) {
//   addForm.value = getYAMLJS.parse(val);
// }
// watch(
//   () => addForm.value,
//   () => {
//     //watch监控表单变化=>code变化
//     cmadd.value.value = YAML.stringify(addForm.value);
//   },
//   {
//     deep: true,
//   }
// );

// function addclose() {
//   addVisible.value = false;
// }
// function addSubmit() {
//   let params = getYAMLJS.parse(cmadd.value.value);
//   //判断->提交
// }
// // return {
// //   addform,
// //   addForm,
// //   addRules,
// //   addVisible,
// //   add,
// //   modeswitch,
// //   addclose,
// //   cmadd,
// //   setForm,
// //   addSubmit,
// // };
</script>
