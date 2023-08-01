<template>
  <el-container class="w-screen h-screen">
    <el-header height="50px" class="bg-white shadow-sm z-2">
      <top-bar></top-bar>
    </el-header>
    <el-container>
      <el-aside class="h-100%" width="220px">
        <side-bar></side-bar>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup></script>
