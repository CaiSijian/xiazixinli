<template>
    <div class="directory">
        <div class="button">
            <img :src="directoryURL">
            <span>目录</span>
        </div>
        <div>回到顶部</div>
    </div>
</template>

<script setup lang="ts">
import directoryURL from '~/assets/images/directory.svg'
</script>

<style scoped lang="less">
.directory {
    position: sticky;
    top: 0;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    border-bottom: #dcdfe6 solid 1px;
    background-color: @bg-color;
    margin-left: 8px;
    margin-right: 8px;

    .button {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 1.8rem;
        }

        span {
            margin-left: 8px;
            margin-right: 8px;
        }
    }

    @media screen {
        @media (min-width: @global-breakpoint) {
            display: none;
        }
    }
}
</style>