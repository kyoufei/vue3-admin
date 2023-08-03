<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" :body-style="{ paddingBottom: '2px' }" class="mb20px">
      <el-form ref="searchFormRef" :inline-message="true" :inline="true" :model="searchData">
        <el-form-item prop="sceneName" label="场景名称">
          <el-input v-model="searchData.sceneName" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-loading="loading" shadow="never">
      <!-- <div class="toolbar-wrapper">
        <el-button type="primary" :icon="CirclePlus" @click="addScene">新增场景</el-button>
      </div> -->
      <div class="table-wrapper">
        <el-table :data="tableData">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column prop="sceneName" label="场景名称" align="center" />
          <el-table-column prop="sceneName" :label="t('login.login')" align="center" />
          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button type="danger" text bg size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pager-wrapper mt10px">
        <el-pagination
          background
          :layout="paginationData.layout"
          :page-sizes="paginationData.pageSizes"
          :total="paginationData.total"
          :page-size="paginationData.pageSize"
          :current-page="paginationData.currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { Search, Refresh } from '@element-plus/icons-vue';

interface TableData {
  sceneName: string;
  [key: string]: any;
}

const { t } = useI18n();
const searchData = ref({
  sceneName: '',
});

const loading = ref(false);

const handleSearch = () => {
  console.log(searchData.value);
};

const resetSearch = () => {
  searchData.value = {
    sceneName: '',
  };
};

const tableData = ref<TableData[]>([]);

const handleUpdate = (row: TableData) => {
  console.log(row);
};

const handleDelete = (row: TableData) => {
  console.log(row);
};

const paginationData = ref({
  layout: 'total, sizes, prev, pager, next, jumper',
  pageSizes: [10, 20, 30, 40],
  total: 0,
  pageSize: 10,
  currentPage: 1,
});

const handleSizeChange = (val: number) => {
  console.log(val);
};

const handleCurrentChange = (val: number) => {
  console.log(val);
};
</script>
