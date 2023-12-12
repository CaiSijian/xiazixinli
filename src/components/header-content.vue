<template>
    <div class="header-content">
        <div class="logo">
            <el-link href="/" type="warning" :underline="false">
                <img :src="logo">
                <span>匣子心理</span>
            </el-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from '~/assets/logo.svg'
</script>

<style scoped lang="less">
.header-content {
    display: flex;
}

.logo {
    display: flex;
    align-items: center;
    height: @header-height;

    img {
        width: 1.8rem;
    }
}
</style>