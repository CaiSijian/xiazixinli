<template>
    <div class="logo-container">
        <el-link href="/" type="warning" :underline="false">
            <img :src="logo">
            <span>匣子心理</span>
        </el-link>
    </div>
</template>

<script setup lang="ts">
import logo from '~/assets/logo.svg'
</script>

<style scoped lang="scss">
.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);

    img {
        width: 1.8rem;
    }
}
</style>