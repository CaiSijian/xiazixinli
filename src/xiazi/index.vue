<template>
    <div v-html="parse(text)" class="content"></div>
</template>

<script setup lang="ts">
import text from '~/xiazi/content.md?raw'
import { parse } from 'marked'
</script>

<style scoped lang="less">
.content {
    padding: 5rem;

    &>:deep(h1) {
        font-size: 3rem;
        color: @text-color;
        text-align: center;
    }

    &>:deep(p) {
        font-size: 1.5rem;
        color: @text-color-light;
        text-align: center;
    }
}
</style>