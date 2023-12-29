import hotlineCaption from '~/resource/hotline-caption.md?raw'
import hotlinePhoneURL from '~/assets/images/hotline.svg'
import appCaption from '~/resource/app-caption.md?raw'
import appURL from '~/assets/images/app.svg'
import websites from '~/resource/data/PsychologicalWebsites.json'
import websiteCaption from '~/resource/website-caption.md?raw'
import websiteURL from '~/assets/images/website.svg'
const websiteTags = new Set(['全部', ...websites.map((obj) => obj['标签'].split('|')).flat(Infinity)])
export { default as questionMarkURL } from '~/assets/images/question-mark.svg'
export const menu = {
    '心理热线': {
        disabled: false,
        caption: hotlineCaption,
        iconURL: hotlinePhoneURL,
        tags: ["全部", "北京市", "天津市", "河北省", "内蒙古自治区", "吉林省", "上海市", "江苏省", "浙江省", "河南省", "湖北省", "湖南省", "广东省", "云南省", "甘肃省"],
    },
    '心理网站': {
        disabled: false,
        caption: websiteCaption,
        iconURL: websiteURL,
        tags: websiteTags
    },
    '手机应用': {
        disabled: false,
        caption: appCaption,
        iconURL: appURL,
        tags: ["全部"]
    },
} as const