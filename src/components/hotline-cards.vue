<template>
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
</template>

<script setup lang="ts">
defineProps<{
    hotlineData?: {
        "序号": string,
        "地区": string,
        "热线名称": string,
        "热线号码": string,
        "热线工作时间": string,
        "依托机构": string,
        "上榜情况": string
    }[]
}>()
function copyPhoneEvent(e: MouseEvent) {
    const button = e.target as HTMLButtonElement
    const phone = button.getAttribute('data-phone') as string
    navigator.clipboard.writeText(phone)
    ElMessage({ message: '复制成功', type: 'success', })
}
</script>

<style scoped>
.hotline-box-card {
    margin-left: 4px;
    margin-right: 8px;
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
</style>