<template>
    <iframe src="https://f.kdocs.cn/g/zxodyZBU/" frameborder="0"></iframe>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
iframe {
    /* iframes are inline by default */
    border: none;
    /* Reset default border */
    /* Viewport-relative units */
    height: calc(100vh - 55px - 49px);
    width: 100vw;

    @media screen {
        @media (min-width: @global-breakpoint) {
            height: calc(100vh - 55px);
        }
    }
}
</style>