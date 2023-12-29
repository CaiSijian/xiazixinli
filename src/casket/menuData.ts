import hotlineCaption from '~/social_support/hotline-caption.md?raw'
import appCaption from '~/social_support/app-caption.md?raw'
import hotlinePhoneURL from '~/assets/images/hotline.svg'
import appURL from '~/assets/images/app.svg'
export const menu = {
    '心理热线': {
        disabled: false,
        caption: hotlineCaption,
        iconURL: hotlinePhoneURL,
        tags: ["全部", "北京市", "天津市", "河北省", "内蒙古自治区", "吉林省", "上海市", "江苏省", "浙江省", "河南省", "湖北省", "湖南省", "广东省", "云南省", "甘肃省"],
    },
    '手机应用': {
        disabled: true,
        caption: appCaption,
        iconURL: appURL,
        tags: ["全部"]
    },
} as const