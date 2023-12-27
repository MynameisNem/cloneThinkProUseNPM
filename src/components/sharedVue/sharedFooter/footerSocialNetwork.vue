<template>
    <section class="social">
        <div class="h-full p-4 rounded bg-[#F6F9FC]">
            <h2 class="text-[18px] font-semibold leading-[150%]">Social Network</h2>
            <div class="mt-3 flex flex-col space-y-2">
                <!-- Sửa thành thẻ a -->
                <a v-for="itemSocial in listSocialNetwork" :key="itemSocial.id" rel="noopener" target="blank"
                    :href="itemSocial.srcSocial" class="flex items-center space-x-3">
                    <img :alt="itemSocial.nameSocial" :src="itemSocial.svgSocial"
                        class="w-[17px] h-[17px]">
                    <span class="text-[14px] leading-[150%]">{{ itemSocial.nameSocial }}</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            listSocialNetwork: [
                {
                    id: 16000,
                    srcSocial: "https://www.facebook.com/thinkpro.vn",
                    svgSocial: require("@/assets/iconSVG/footerIconSVG/footerSocial/facebook.svg"),
                    nameSocial: "Facebook"
                },
                {
                    id: 16001,
                    srcSocial: "https://www.youtube.com/c/ThinkProVN",
                    svgSocial: require("@/assets/iconSVG/footerIconSVG/footerSocial/youtube.svg"),
                    nameSocial: "Youtube"
                },
                {
                    id: 16002,
                    srcSocial: "https://www.tiktok.com/@thinkpro.vn",
                    svgSocial: require("@/assets/iconSVG/footerIconSVG/footerSocial/tiktok.svg"),
                    nameSocial: "Tiktok"
                },
                {
                    id: 16003,
                    srcSocial: "https://t.me/thinkprocommunity",
                    svgSocial: require("@/assets/iconSVG/footerIconSVG/footerSocial/telegram.svg"),
                    nameSocial: "Telegram"
                },
            ]
        }
    }
}
</script>