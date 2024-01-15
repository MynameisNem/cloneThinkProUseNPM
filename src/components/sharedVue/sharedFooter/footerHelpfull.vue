<template>
    <section class="helpfulInfor">
        <div class="h-full p-4 rounded bg-[#F6F9FC]">
            <h2 class="text-[18px] font-semibold leading-[150%]">Thông tin hữu ích</h2>
            <div class="mt-3 flex flex-col space-y-2">
                <router-link v-for="itemHelpful in listHelp" :key="itemHelpful.id" rel="noopener"
                    target="blank" :to="itemHelpful.linkInforHelp"
                    class="flex items-center space-x-3">
                    <i class="w-4 h-4">
                        <img :src="itemHelpful.iconInforHelp" :alt="itemHelpful.inforHelp">
                    </i>
                    <span class="text-[14px] leading-[150%]">{{ itemHelpful.inforHelp }}</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            listHelp: [
                {
                    id: 14999,
                    linkInforHelp: "/Chinh-sach-bao-hanh-thinkpro",
                    inforHelp: "Chính sách bảo hành",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-check.svg")
                },
                {
                    id: 15000,
                    linkInforHelp: "/Chinh-sach-doi-tra-thinkpro",
                    inforHelp: "Chính sách đổi trả",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerPayment/rotate.svg")
                },
                {
                    id: 15001,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/chinh-sach-bao-hanh-thinkpro",
                    inforHelp: "Chính sách vận chuyển",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-truck.svg")

                },
                {
                    id: 15002,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/chinh-sach-van-chuyen-thinkpro",
                    inforHelp: "Chính sách bảo mật",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-shield.svg")

                },
                {
                    id: 15003,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/chinh-sach-bao-mat-thinkpro-4831",
                    inforHelp: "Chính sách thanh toán",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerPayment/card.svg")

                },
                {
                    id: 15004,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/chinh-sach-thanh-toan-thinkpro",
                    inforHelp: "Chính sách kiểm hàng",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-scan.svg")

                },
                {
                    id: 15005,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/ve-chung-toi-thinkpro-4833",
                    inforHelp: "Hướng dẫn mua hàng online",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-shoping-bag.svg")

                },
                {
                    id: 15006,
                    linkInforHelp: "https://thinkpro.vn/noi-dung/ve-chung-toi-thinkpro-4833",
                    inforHelp: "Về chúng tôi",
                    iconInforHelp: require("@/assets/iconSVG/footerIconSVG/footerHelpfull/semi-infor-circle.svg")

                },
            ]
        }
    }
}
</script>