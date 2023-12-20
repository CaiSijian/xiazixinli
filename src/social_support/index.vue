<template>
    <el-container>
        <el-aside class="aside">
            <el-menu class="menu" :default-active="activeIndex" @select="handleSelect">
                <el-sub-menu v-for="(v, k) in menu" :index="`${k}`" :disabled="v.disabled">
                    <template #title>
                        <img :src="v.iconURL">
                        <span>{{ k }}</span>
                        <img :data-title="k" class="query" @click="queryEvent" :src="queryURL">
                    </template>
                    <el-menu-item v-for="tag in v.tags" :index="`${k}-${tag}`">{{ tag }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main class="main">
            <el-card v-for="hotlineValue in hotlineData" :key="hotlineValue['序号']" class="hotline-box-card">
                <template #header>
                    <div class="card-header">
                        <span>{{ hotlineValue['热线名称'] }}</span>
                    </div>
                </template>
                <div class="item">
                    <span>热线号码：</span>
                    <span class="item-value">
                        <span v-for="v in hotlineValue['热线号码'].split('\n')" style="display: flex;">
                            <span>{{ v }}</span>
                            <span class="el-button" :data-phone="v" @click="copyPhoneEvent">复制</span>
                        </span>
                    </span>
                </div>
                <div class="item">
                    <span>热线工作时间：</span>
                    <span class="item-value">
                        <span v-for="v in hotlineValue['热线工作时间'].split('\n')">{{ v }} </span>
                    </span>
                </div>
                <div class="item">
                    <span>地区：</span>
                    <span>{{ hotlineValue['地区'] }}</span>
                </div>
                <div class="item">
                    <span>依托机构：</span>
                    <span class="item-value">
                        <span v-for="v in hotlineValue['依托机构'].split('\n')">{{ v }}</span>
                    </span>
                </div>
            </el-card>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import hotlinePhoneURL from '~/assets/images/hotline.svg'
import appURL from '~/assets/images/app.svg'
import queryURL from '~/assets/images/query.svg'
import { parse } from 'marked'
import hotlineCaption from '~/social_support/hotline-caption.md?raw'
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
// const currentCardData=ref<hotlineData>()
const menu = {
    '心理热线': {
        disabled: false,
        caption: hotlineCaption,
        iconURL: hotlinePhoneURL,
        tags: ["全部", "北京市", "天津市", "河北省", "内蒙古自治区", "吉林省", "上海市", "江苏省", "浙江省", "河南省", "湖北省", "湖南省", "广东省", "云南省", "甘肃省"],
    },
    '手机应用': {
        disabled: true,
        caption: 'ok',
        iconURL: appURL,
        tags: ["全部"]
    },
} as const
const queryEvent = (e: MouseEvent) => {
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
function copyPhoneEvent(e: MouseEvent) {
    const button = e.target as HTMLButtonElement
    const phone = button.getAttribute('data-phone') as string
    navigator.clipboard.writeText(phone)
    ElMessage({ message: '复制成功', type: 'success', })
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
    display: flex;
    flex-flow: row wrap;
    padding-left: @aside-width + 20px;
    justify-content: flex-start;
    flex-basis: max-content;
}

.hotline-box-card {
    margin-left: 8px;
    margin-bottom: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);

    .item {
        display: flex;
        margin-bottom: 1rem;

        .item-value {
            display: flex;
            flex-direction: column;

            &>span {
                margin-bottom: 5px;
            }

            .el-button {
                margin-left: 10px;
                height: 21px;
            }
        }
    }

    .item:last-child {
        margin-bottom: 0;
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