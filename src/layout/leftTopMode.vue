<template>
  <el-container class="w-screen h-screen">
    <el-header height="50px" class="bg-white shadow-sm z-2">
      <top-bar></top-bar>
    </el-header>
    <el-container>
      <!-- 220px -->
      <el-aside class="h-100%" width="auto">
        <side-bar></side-bar>
      </el-aside>
      <el-main class="p0!">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup></script>
