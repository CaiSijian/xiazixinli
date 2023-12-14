<template>
    <div class="header-content">
        <div class="logo">
            <el-link href="/" :underline="false">
                <img :src="logoURL">
                <span>匣子心理</span>
            </el-link>
        </div>
        <div class="content">
            <el-menu :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
                <el-menu-item index="2">心理网站</el-menu-item>
                <el-menu-item index="1">心理资源</el-menu-item>
                <el-menu-item index="0">我要反馈</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import logoURL from '~/assets/images/logo.svg'
const activeIndex = ref('1')
const enum menu {
    心理资源,
    我要反馈
}
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(menu['心理资源'])
    console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.header-content {
    display: flex;
}

.logo {
    display: flex;
    margin: 0 0.5rem;
    align-items: center;
    height: @header-height;

    img {
        width: 1.8rem;
    }

    span {
        margin: 0 0.5rem;
        color: #ed7c31;
        font-size: 1.2rem;
    }
}

.content {
    display: flex;
    flex: 1;
    justify-content: flex-end;
}

.menu {
    height: @header-height;
}
</style>