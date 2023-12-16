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
  top: 0;
  left: 0;
  height: @header-height;
  z-index: @nav-z-index;
  background-image: radial-gradient(transparent 1px, @bg-color 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: rgb(220, 223, 230) solid 1px;
}
</style>

