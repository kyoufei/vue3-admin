<template>
  <template v-if="menuItem.meta.invisible"></template>
  <el-sub-menu v-else-if="menuItem.children" :index="menuItem.path">
    <template #title>
      <svg-icon v-if="menuItem.meta.svgIcon" :name="menuItem.meta.svgIcon" size="10"></svg-icon>
      <el-icon v-else-if="menuItem.meta.elIcon" :size="20">
        <component :is="menuItem.meta.elIcon" />
      </el-icon>
      <span>
        {{ menuItem.meta.title }}
      </span>
    </template>
    <side-bar-item
      v-for="item in menuItem.children"
      :key="item.path"
      :menu-item="{ ...item, basePath: resolvePath(menuItem.basePath, menuItem.path) }"
    ></side-bar-item>
  </el-sub-menu>
  <el-menu-item v-else :index="resolvePath(menuItem.basePath, menuItem.path)">
    <svg-icon v-if="menuItem.meta.svgIcon" :name="menuItem.meta.svgIcon" size="10"></svg-icon>
    <el-icon v-else-if="menuItem.meta.elIcon" :size="20">
      <component :is="menuItem.meta.elIcon" />
    </el-icon>
    <template v-if="menuItem.meta.title" #title>
      {{ menuItem.meta.title }}
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
  },
});

const resolvePath = (basePath: string | undefined, path: string) => {
  if (basePath) {
    return `${basePath}/${path}`;
  }
  return path;
};

const menuItem = reactive(props.menuItem);
</script>
