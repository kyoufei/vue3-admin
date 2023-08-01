import { defineStore } from 'pinia';

// setup
export const useLayoutStore = defineStore('layout', () => {
  const isCollapse = ref(false);

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
  };

  return {
    isCollapse,
    toggleCollapse,
  };
});
