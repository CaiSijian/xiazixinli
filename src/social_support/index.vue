<template>
    <el-container>
        <el-aside class="aside">Aside</el-aside>
        <el-main class="main">Main</el-main>
    </el-container>
</template>

<script setup lang="ts">
import text from '~/assets/data/2022启明星榜热线.json'

console.log(text)
</script>

<style scoped lang="less">
.aside {
    position: fixed;
    width: @aside-width;
    height: 100%;
    overflow: hidden;
}

.main {
    padding-left: @aside-width + 20px;
    height: 5000px;
}
</style>