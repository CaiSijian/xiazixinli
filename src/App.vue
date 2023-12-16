<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <header-content></header-content>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>
<script setup lang="ts">
import headerContent from '~components/header-content.vue'
</script>
<style scoped lang="less">
.head {
  position: sticky;
  height: @header-height;
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>

