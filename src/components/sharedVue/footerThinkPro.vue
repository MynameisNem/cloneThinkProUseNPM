<template>
    <footer class="bg-white py-6">
        <div class="container mr-auto ml-auto px-4">
            <img class="h-8 text-[#0065EE] max-w-full block align-middle"
            src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg" alt="Logo">
            <!-- địa chỉ -->
            <section class="mt-6">
                <h2 class="text-[20px] font-semibold leading-[150%]">Hệ thống cửa hàng</h2>
                <div class="shopLocation mt-4 grid grid-cols-3 gap-3">
                    <div v-for="shop in listShop" :key="shop.id" class="bg-[#F6F9FC] rounded-lg p-4">
                        <div class="text-sm font-semibold leading-[150%]">
                            {{ shop.city }}
                        </div>
                        <div class="mt-[2px] text-sm leading-[150%]">
                            {{ shop.address }}
                        </div>
                        <div class="flex mt-2 items-end justify-between">
                            <div class="text-[12px] leading-[150%]">
                                <div>
                                    <span class="font-semibold text-[#3BB346]">Mở cửa</span>
                                </div>
                                <span class="mt-[2px]">{{ shop.openTime }}</span>
                            </div>
                            <div class="text-[#0065EE] font-semibold items-center flex space-x-1">
                                <a class="text-xs leading-[150%]" target="blank" :alt="shop.altAddress"
                                    :href="shop.ggMap">
                                    Chỉ đường
                                </a>
                                <i class="w-3 h-3">
                                    <img src="@/assets/iconSVG/arrowTopRight.svg" alt="Chỉ đường">
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- information -->
            <div class="mt-6">
                <span class="font-semibold text-[20px] leading-[150%]">Thinkpro</span>
            </div>
            <FooterInfor></FooterInfor>
            <FooterDMCA></FooterDMCA>
        </div>
    </footer>
</template>

<script>
import FooterInfor from './sharedFooter/footerInfor.vue'
import FooterDMCA from './sharedFooter/footerDMCA.vue'
export default {
    components: {
        FooterInfor,
        FooterDMCA
    },
    data() {
        return {
            listShop: [
                {
                    id: 10000,
                    city: "Thành phố Hồ Chí Minh",
                    address: "Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh",
                    altAddress: "Chỉ đường đến Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh",
                    openTime: "09:00 - 21:00",
                    ggMap: "https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028",
                },
                {
                    id: 10001,
                    city: "Thành phố Hồ Chí Minh",
                    address: "95 Trần Thiện Chánh, Q10",
                    altAddress: "Chỉ đường đến 95 Trần Thiện Chánh, Q10",
                    openTime: "09:00 - 21:00",
                    ggMap: "https://www.google.com/maps/place/ThinkPro+-+95+Tr%E1%BA%A7n+Thi%E1%BB%87n+Ch%C3%A1nh,+P12,+Q10,+TP+HCM/@10.7720769,106.6680882,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fea4b76a251:0x3b34f5af9212aadc!8m2!3d10.7720769!4d106.6702769",
                },
                {
                    id: 10002,
                    city: "Hà Nội",
                    address: "53 Thái Hà, Đống Đa",
                    altAddress: "Chỉ đường đến 53 Thái Hà, Đống Đa",
                    openTime: "09:00 - 21:00",
                    ggMap: "https://www.google.com/maps/place/ThinkPro/@21.0116348,105.8187188,17z/data=!3m1!4b1!4m6!3m5!1s0x3135abdf7994930d:0x9766da564d2b294b!8m2!3d21.0116298!4d105.8212937!16s%2Fg%2F11pdygvswz?shorturl=1",
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>