<template>
    <div class="directory">
        <div @click="handleAside">
            <img :src="directoryURL">
            <span>目录</span>
        </div>
        <div ref="backToTop" @click="handleToTop">回到顶部</div>
    </div>
</template>

<script setup lang="ts">
import directoryURL from '~/assets/images/directory.svg'
const backToTop = ref<HTMLDivElement>()
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        if (!backToTop.value || backToTop.value.style.opacity === '1') return
        backToTop.value!.style.opacity = '1'
        backToTop.value!.style.transform = 'translateY(0)'
    } else {
        if (!backToTop.value || backToTop.value.style.opacity === '0') return
        backToTop.value!.style.opacity = '0'
        backToTop.value!.style.transform = 'translateY(150%)'
    }
})
function handleAside() {
    const aside = document.querySelector('.aside') as HTMLDivElement
    const toggle = aside.classList.toString().includes('asideShow')
    if (toggle)
        aside.classList.remove('asideShow')
    else
        aside.classList.add('asideShow')
}
function handleToTop() {
    window.scroll(0, 0)
    // 平滑滚动怪怪的 犹豫要不要
    let intervalNum = setInterval(() => {
        const current = document.body.scrollTop
        let step = (0 - current) / 20
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        console.log(current + step, current <= 0.0000001)
        // if (current + step < 30) debugger
        window.scroll(0, current + step)
        if (current <= 0.0000001) clearInterval(intervalNum)
    }, 15)
}
</script>

<style scoped lang="less">
.directory {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 49px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 1.2rem;
    border-bottom: #dcdfe6 solid 1px;
    background-color: @bg-color;
    overflow: hidden;
    box-sizing: border-box;

    &>div {
        cursor: pointer;
    }

    &>div:nth-child(1) {
        display: flex;
        align-items: center;

        img {
            width: 1.8rem;
        }

        span {
            margin-left: 8px;
            margin-right: 8px;
        }
    }

    &>div:nth-child(2) {
        transform: translateY(150%);
        opacity: 0;
        transition: transform .1s, opacity .1s;
    }


    @media screen {
        @media (min-width: @global-breakpoint) {
            display: none;
        }
    }
}
</style>