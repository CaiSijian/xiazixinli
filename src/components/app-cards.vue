<template>
    <el-card v-for="app in appData" :key="app['序号']" class="card">
        <template #header>
            <div class="card-header">
                <span>{{ app['名称'] }}</span>
            </div>
        </template>
        <div v-if="app['简介'] !== ''" class="item">
            <span class="two-words">简介：</span>
            <span class="item-value">
                <span v-for="v in app['简介'].split('\n')">{{ v }} </span>
            </span>
        </div>
        <div class="item">
            <span class="two-words">下载方式：</span>
            <span class="item-value">
                <span v-for="v in app['下载方式'].split('\n')">{{ v }} </span>
            </span>
        </div>
        <div v-if="app['标签'] !== ''" class="item">
            <span class="two-words">标签：</span>
            <span class="item-tag">
                <span v-for="v in app['标签'].split('|')">{{ v }} </span>
            </span>
        </div>
        <div class="item">
            <span class="four-words">推荐原因：</span>
            <span class="item-value">
                <span v-for="v in app['推荐原因'].split('\n')">{{ v }}</span>
            </span>
        </div>
    </el-card>
</template>

<script setup lang="ts">
defineProps<{
    appData?: {
        序号: string
        名称: string
        标签: string
        简介: string
        开发者: string
        下载方式: string
        推荐原因: string
    }[]
}>()
</script>

<style scoped>
.card {
    margin-left: 4px;
    margin-right: 8px;
    margin-bottom: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
    max-width: 480px;

    .four-words {
        min-width: 80px;
    }

    .two-words {
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