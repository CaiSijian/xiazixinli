<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <navbarWrapper></navbarWrapper>
      </el-header>
      <el-main style="height: 100rem;">Main</el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import navbarWrapper from '~components/navbar-wrapper.vue'
</script>
<style scoped lang="scss">
.head {
  height: var(--header-height);
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;

}
</style>

