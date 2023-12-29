<template>
    <el-card v-for="website in websiteData" :key="website['序号']" class="card">
        <template #header>
            <div class="card-header">
                <span>{{ website['名称'] }}</span>
            </div>
        </template>
        <div class="item">
            <span>主页：</span>
            <el-link :href="website['主页']" target="_blank">{{ getHome(website['主页']) }}</el-link>
        </div>
        <div v-if="website['简介'] !== ''" class="item">
            <span>简介：</span>
            <span class="item-value">
                <span v-for="v in website['简介'].split('\n')">{{ v }} </span>
            </span>
        </div>
        <div v-if="website['标签'] !== ''" class="item">
            <span>标签：</span>
            <span class="item-tag">
                <span v-for="v in website['标签'].split('|')">{{ v }} </span>
            </span>
        </div>
        <div class="item">
            <span>推荐原因：</span>
            <span class="item-value">
                <span v-for="v in website['推荐原因'].split('\n')">{{ v }}</span>
            </span>
        </div>
    </el-card>
</template>

<script setup lang="ts">
defineProps<{
    websiteData?: {
        "序号": string,
        "名称": string,
        "标签": string,
        "主页": string,
        "简介": string,
        "推荐原因": string,
    }[]
}>()
const getHome = (x: string) => {
    return new URL(x).host
}
</script>

<style scoped>
.card {
    margin-left: 4px;
    margin-right: 8px;
    margin-bottom: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
    max-width: 480px;

    &>span {
        min-width: 48px;
    }

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

        .item-tag {
            display: flex;

            span {
                margin-right: 8px;
            }
        }
    }

    .item:last-child {
        margin-bottom: 0;
    }
}
</style>