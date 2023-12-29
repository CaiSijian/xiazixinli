<template>
    <div class="header-content">
        <div class="logo">
            <el-link href="/" :underline="false">
                <img :src="logoURL">
                <span>匣子心理</span>
            </el-link>
        </div>
        <div class="content">
            <el-menu router :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false">
                <el-menu-item v-for="(v, k) in menu" :index="v">{{ k }}</el-menu-item>
            </el-menu>
            <el-dropdown class="menu2">
                <li class="el-menu-item">
                    <img :src="menuURL">
                </li>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(v, k) in menu">
                            <router-link class="el-link" :to="v">{{ k }}</router-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import logoURL from '~/assets/images/logo.svg'
import menuURL from '~/assets/images/menu.svg'
/* 刷新页面的时候，激活选项卡 */
const activeIndex = ref(location.href.match(/(?<=#).*\/?/)?.[0])
const menu: { [key: string]: string } = {
    '心理资源': '/resource',
    '我要反馈': '/feedback',
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

    img {
        width: 1.8rem;
    }

    @media screen {
        @media (max-width: @global-breakpoint) {
            display: none;
        }
    }
}

.menu2 {
    img {
        width: 1.8rem;
    }

    li {
        height: @header-height;
    }

    @media screen {
        @media (min-width: @global-breakpoint) {
            display: none;
        }
    }
}
</style>