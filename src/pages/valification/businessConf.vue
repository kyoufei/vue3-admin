<template>
  <div class="app-container flex h100%">
    <el-card
      v-loading="yarmLoading"
      shadow="never"
      :body-style="{ paddingBottom: '2px', height: '100%', maxHeight: 'calc(100vh - 110px)' }"
      class="mr20px w50%"
    >
      <!-- <el-button type="text" @click="btnClick">点击</el-button> -->
      <editor ref="yamlRef" v-model="code" class="h100% border-rd-4px" mode="yaml"></editor>
    </el-card>
    <el-card
      v-loading="yarmLoading"
      shadow="never"
      :body-style="{ paddingBottom: '2px', height: '100%' }"
      class="flex-1"
    >
      <div ref="flow" class="h100%"></div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
// import Editor from '@/components/editor.vue';
const yarmLoading = ref(false);
const yamlRef = ref(null);
const code = ref('');
code.value = ` apiVersion: extensions/v1beta1
 kind: Deployment
 metadata:
   name: kube-node
 spec:
   replicas: 2
   template:
     metadata:
       labels:
         app: web
     spec:
       containers:
         - name: kube-node-demo-instance
           image: wucong60/kube-node-demo1:v1
           ports:
             - containerPort: 8081`;
const btnClick = () => {
  yamlRef.value.checkYaml(code).then(() => {
    console.log(11);
  });
};

// 流程图
const flow = ref(null);
onMounted(() => {
  const lf = new LogicFlow({
    container: flow.value as any,
    grid: true,
  });

  lf.render({
    nodes: [
      {
        id: '1',
        type: 'rect',
        x: 100,
        y: 100,
        text: '节点1',
      },
      {
        id: '2',
        type: 'circle',
        x: 300,
        y: 200,
        text: '节点2',
      },
    ],
    edges: [
      {
        sourceNodeId: '1',
        targetNodeId: '2',
        type: 'polyline',
        text: '连线',
      },
    ],
  });
});
</script>
