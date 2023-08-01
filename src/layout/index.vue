<template>
  <left-mode v-if="layoutMode === 'left'"></left-mode>
  <left-top-mode v-else-if="layoutMode === 'left-top'"></left-top-mode>
  <top-mode v-else-if="layoutMode === 'top'"></top-mode>
</template>

<script lang="ts" setup>
const layoutMode = ref('left-top');
</script>
