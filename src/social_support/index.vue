<template>
    <el-container>
        <el-aside class="aside">
            <el-menu class="menu" :default-active="activeIndex" @select="handleSelect">
                <el-sub-menu v-for="(v, k, i) in menu" :index="`${i}`">
                    <template #title>
                        <img :src="v.iconURL">
                        <span>{{ k }}</span>
                        <img :data-title="k" class="query" @click="queryEvent" :src="queryURL">
                    </template>
                    <el-menu-item v-for="(tag, j) in v.tags" :index="`${i}-${j}`">{{ tag }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main class="main">Main</el-main>
    </el-container>
</template>

<script setup lang="ts">
import hotlinePhoneURL from '~/assets/images/hotline.svg'
import appURL from '~/assets/images/app.svg'
import queryURL from '~/assets/images/query.svg'
import { parse } from 'marked'
import hotlineCaption from '~/social_support/hotline-caption.md?raw'
// import hotlineSheet from '~/assets/data/2022启明星榜热线.json'
const menu = {
    '心理热线': {
        caption: hotlineCaption,
        iconURL: hotlinePhoneURL,
        tags: ["全部", "北京市", "天津市", "河北省", "内蒙古自治区", "吉林省", "上海市", "江苏省", "浙江省", "河南省", "湖北省", "湖南省", "广东省", "云南省", "甘肃省"],
    },
    '手机应用': {
        caption: 'ok',
        iconURL: appURL,
        tags: ["全部"]
    },
}
const queryEvent = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const element = e.target as HTMLImageElement
    const title = element.getAttribute('data-title') as keyof typeof menu
    const caption = menu[title].caption
    const htmlStr = parse(caption) as string
    ElMessageBox.alert(htmlStr, {
        dangerouslyUseHTMLString: true,
        closeOnClickModal: true, closeOnPressEscape: true
    }).catch((x) => console.log(x))
}
const activeIndex = ref('0-0')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.aside {
    position: fixed;
    width: @aside-width;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.main {
    padding-left: @aside-width + 20px;
    height: 5000px;
}

.menu {
    height: 100%;


    img {
        width: 1.8rem;
        padding: 0 10px;
    }

    .query {
        width: 1.5rem;
        margin-left: auto;
    }
}
</style>