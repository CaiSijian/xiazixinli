<template>
    <el-container>
        <el-aside class="aside">
            <el-menu class="menu" :default-active="activeIndex" @select="handleSelect">
                <el-sub-menu v-for="(v, k) in menu" :index="`${k}`" :disabled="v.disabled">
                    <template #title>
                        <img :src="v.iconURL">
                        <span>{{ k }}</span>
                        <img :data-title="k" class="query" @click="showCaptionEvent" :src="queryURL">
                    </template>
                    <el-menu-item v-for="tag in v.tags" :index="`${k}-${tag}`">{{ tag }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main class="main">
            <hotline-cards v-if="activeIndex.split('-')[0] === '心理热线'" :hotline-data="hotlineData"></hotline-cards>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import hotlineCards from '~/components/hotline-cards.vue'
import queryURL from '~/assets/images/query.svg'
import { parse } from 'marked'
import { menu } from '~/social_support/menuData'
import hotline from '~/assets/data/2022启明星榜热线.json'
const hotlineData = ref<{
    "序号": string,
    "地区": string,
    "热线名称": string,
    "热线号码": string,
    "热线工作时间": string,
    "依托机构": string,
    "上榜情况": string
}[]>(hotline)
const showCaptionEvent = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const element = e.target as HTMLImageElement
    const title = element.getAttribute('data-title') as keyof typeof menu
    const caption = menu[title].caption
    const htmlStr = parse(caption) as string
    ElMessageBox.alert(htmlStr, {
        dangerouslyUseHTMLString: true,
        closeOnClickModal: true,
        closeOnPressEscape: true,
        showConfirmButton: false,
    }).catch(() => { })
}
const activeIndex = ref('心理热线-全部')
const handleSelect = (key: string) => {
    if (window.innerWidth < 960) {
        const aside = document.querySelector('.aside') as HTMLDivElement
        aside.classList.remove('asideShow')
    }

    type menuT = typeof menu
    type tagsT =
        | menuT['心理热线']['tags'][number]
        | menuT['手机应用']['tags'][number]
    const menuArr = key.split('-') as [keyof menuT, tagsT]
    switch (menuArr[0]) {
        case '心理热线':
            if (menuArr[1] === '全部') hotlineData.value = hotline
            else hotlineData.value = hotline.filter((item) => item['地区'] === menuArr[1])
            break
        case '手机应用':
            if (menuArr[1] === '全部') hotlineData.value = hotline
            else hotlineData.value = hotline.filter((item) => item['地区'] === menuArr[1])
            break

    }
}

</script>

<style scoped lang="less">
.aside {
    position: fixed;
    top: 50px;
    width: @aside-width;
    height: 100vh+5px;
    overflow-y: auto;
    overflow-x: hidden;
    transition: transform .5s;
    transform: translate(-100%);

    @media screen {
        @media (min-width: @global-breakpoint) {
            transform: translate(0px);
            height: 100%;
        }
    }
}

.main {
    display: flex;
    flex-flow: row wrap;
    padding-left: 20px;
    justify-content: flex-start;
    transition: padding .5s;

    @media screen {
        @media (min-width: @global-breakpoint) {
            padding-left: @aside-width + 20px;
        }
    }
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