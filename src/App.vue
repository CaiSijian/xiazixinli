<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <headerContent></headerContent>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import headerContent from '~components/header-content.vue'
</script>
<style scoped lang="less">
.head {
  // height: var(--header-height);
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;

}
</style>

