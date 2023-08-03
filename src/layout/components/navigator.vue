<template>
  <el-breadcrumb class="ml20px" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcumbs" :key="item.path">
      <span v-if="index === breadcumbs.length - 1">{{ item.meta.title }}</span>
      <a v-else href="javascript: void(0)" @click.prevent="handleLink(item.path)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
const route = useRoute();
const breadcumbs = computed(() => {
  const matched = route.matched;
  return matched;
});
const handleLink = (path: string) => {
  console.log('handleLink', path);
};
</script>
