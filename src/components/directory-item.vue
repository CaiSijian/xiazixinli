<template>
    <div class="directory">
        <div @click="handleAside">
            <img :src="directoryURL">
            <span>目录</span>
        </div>
        <el-backtop>
            <span>回到顶部</span>
        </el-backtop>
    </div>
</template>

<script setup lang="ts">
import directoryURL from '~/assets/images/directory.svg'
function handleAside() {
    const aside = document.querySelector('.aside') as HTMLDivElement
    const toggle = aside.classList.toString().includes('asideShow')
    if (toggle)
        aside.classList.remove('asideShow')
    else
        aside.classList.add('asideShow')
}
</script>

<style scoped lang="less">
.directory {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 49px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 1.2rem;
    border-bottom: #dcdfe6 solid 1px;
    background-color: @bg-color;
    overflow: hidden;
    box-sizing: border-box;

    &>div {
        cursor: pointer;
    }

    &>div:nth-child(1) {
        display: flex;
        align-items: center;

        img {
            width: 1.8rem;
        }

        span {
            margin-left: 8px;
            margin-right: 8px;
        }
    }

    :deep(.el-backtop) {
        position: static;
        width: 80px;
        color: #303133;
        font-size: 16px;
        box-shadow: none;
        border-radius: 25%;

        .el-backtop__icon {
            color: #303133;
        }
    }



    @media screen {
        @media (min-width: @global-breakpoint) {
            display: none;
        }
    }
}
</style>