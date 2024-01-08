<template>
    <el-container>
        <el-aside class="aside">
            <el-menu class="menu" :default-active="activeIndex" @select="handleSelect">
                <el-sub-menu v-for="(v, k) in menu" :index="`${k}`" :disabled="v.disabled">
                    <template #title>
                        <img :src="v.iconURL">
                        <span>{{ k }}</span>
                        <img :data-title="k" class="query" @click="showCaption_clickEvent" :src="questionMarkURL">
                    </template>
                    <el-menu-item v-for="tag in v.tags" :index="`${k}-${tag}`">{{ tag }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main class="main">
            <hotline-cards v-if="activeIndex.split('-')[0] === '心理热线'" :hotline-data="hotlineData"></hotline-cards>
            <website-cards v-else-if="activeIndex.split('-')[0] === '心理网站'" :website-data="websiteData"></website-cards>
            <app-cards v-else-if="activeIndex.split('-')[0] === '手机应用'" :app-data="appData"></app-cards>
            <div v-else>这里空空如也</div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import hotlineCards from '~/components/hotline-cards.vue'
import websiteCards from '~/components/website-cards.vue'
import appCards from '~/components/app-cards.vue'

import hotlines from '~/resource/data/2022启明星榜热线.json'
import websites from '~/resource/data/websites.json'
import apps from '~/resource/data/apps.json'
import { parse } from 'marked'
import { menu, questionMarkURL } from '~/resource/menuData'
const hotlineData = ref(hotlines)
const websiteData = ref(websites)
const appData = ref(apps)
const showCaption_clickEvent = (e: MouseEvent) => {
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
    activeIndex.value = key
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
            if (menuArr[1] === '全部') hotlineData.value = hotlines
            else hotlineData.value = hotlines.filter((item) => item['地区'] === menuArr[1])
            break
        case '心理网站':
            if (menuArr[1] === '全部') websiteData.value = websites
            else websiteData.value = websites.filter((item) => item['标签'].includes(menuArr[1]))
            break
        case '手机应用':
            if (menuArr[1] === '全部') appData.value = apps
            else appData.value = apps.filter((item) => item['标签'].includes(menuArr[1]))
            break

    }
}
/* 移动端 点击非aside部分 收纳aside部分 */
document.addEventListener('click', (event: Event) => {
    const clickElement = event.target as HTMLDivElement
    const aside = document.querySelector('.aside') as HTMLDivElement
    if (!aside.contains(clickElement)) {
        const toggle = aside.classList.toString().includes('asideShow')
        toggle && aside.classList.remove('asideShow')
    }
}, true)
</script>

<style scoped lang="less">
.aside {
    position: fixed;
    top: 0px;
    width: @aside-width;
    height: 100%;
    transition: transform .5s;
    transform: translate(-100%);
    z-index: 13;

    @media screen {
        @media (min-width: @global-breakpoint) {
            top: 55px;
            height: calc(100% - 55px);
            transform: translate(0px);
            z-index: auto;
        }
    }
}

.menu {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    img {
        width: 1.8rem;
        padding: 0 10px;
    }

    .query {
        width: 1.5rem;
        margin-left: auto;
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
</style>