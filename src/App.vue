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
  position: static;
  top: 0;
  left: 0;
  height: @header-height;
  z-index: @nav-z-index;
  background-image: radial-gradient(transparent 1px, @bg-color 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: #dcdfe6 solid 1px;
  padding-left: 0px;
  padding-right: 0px;

  @media screen {
    @media (min-width: @global-breakpoint ) {
      position: sticky;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>

