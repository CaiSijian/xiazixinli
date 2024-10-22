<template>
    <directory-item></directory-item>
    <el-container>
        <el-aside class="aside">
            <el-menu class="menu" :default-active="activeIndex" @select="handleSelect">
                <el-sub-menu v-for="(v, k) in menus" :index="`${k}`" :disabled="v.disabled">
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
            <component :is="components[activeIndex_class]" :data="components_data[activeIndex_class]"></component>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { parse } from 'marked'
import directoryItem from '~/components/directory-item.vue'

import hotlineCards from '~/components/hotline-cards.vue'
import websiteCards from '~/components/website-cards.vue'
import appCards from '~/components/app-cards.vue'

import hotlines from '~/resource/data/2022启明星榜热线.json'
import websites from '~/resource/data/websites.json'
import apps from '~/resource/data/apps.json'
import { menus, questionMarkURL } from '~/resource/menuData'
const hotlineData = ref(hotlines)
const websiteData = ref(websites)
const appData = ref(apps)
const showCaption_clickEvent = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const element = e.target as HTMLImageElement
    const title = element.getAttribute('data-title') as keyof typeof menus
    const caption = menus[title].caption
    const htmlStr = parse(caption) as string
    ElMessageBox.alert(htmlStr, {
        dangerouslyUseHTMLString: true,
        closeOnClickModal: true,
        closeOnPressEscape: true,
        showConfirmButton: false,
    }).catch(() => { })
}
const activeIndex = ref('心理热线-全部')
const activeIndex_class = computed(() => activeIndex.value.split('-')[0] as keyof menusT)
const components = {
    '心理热线': hotlineCards,
    '心理网站': websiteCards,
    '手机应用': appCards,
}
const components_data = {
    '心理热线': hotlines,
    '心理网站': websites,
    '手机应用': apps,
}

type menusT = typeof menus
type tagsT =
    | menusT['心理热线']['tags'][number]
    | menusT['手机应用']['tags'][number]
const handleSelect = (key: string) => {
    activeIndex.value = key
    if (window.innerWidth < 960) {
        const aside = document.querySelector('.aside') as HTMLDivElement
        aside.classList.remove('asideShow')
    }
    const menuArr = key.split('-') as [keyof menusT, tagsT]
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
    if (!aside?.contains(clickElement)) {
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