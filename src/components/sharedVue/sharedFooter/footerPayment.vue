<template>
    <section class="payment">
        <div class="h-full p-4 rounded bg-[#F6F9FC]">
            <h2 class="text-[18px] font-semibold leading-[150%]">Đa dạng thanh toán</h2>
            <div class="mt-3 flex flex-col space-y-2">
                <!-- Chuyển khoản -->
                <div v-for="payment in listPayment" :key="payment.id"
                    class="flex items-center space-x-3">
                    <i class="w-4 h-4">
                        <img :src="payment.iconPayment" :alt="payment.payMenthod">
                    </i>
                    <span class="text-[14px] leading-[150%]">{{ payment.payMenthod }}</span>
                </div>
                <!-- VNPay -->
                <div class="flex items-center space-x-3">
                    <img alt="VNPay" src="@/assets/picture/vnpay.png" type="logo"
                        class="w-[13px] h-[13px]">
                    <span class="text-[14px] leading-[150%]">VNPay</span>
                </div>
                <!-- VietQR -->
                <div class="flex items-center space-x-3">
                    <img alt="VietQR" src="@/assets/iconSVG/vietqr.svg" type="logo"
                        class="w-[13px] h-[13px]">
                    <span class="text-[14px] leading-[150%]">VietQR</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            listPayment: [
                {
                    id: 11000,
                    payMenthod: "Chuyển khoản",
                    iconPayment: require("@/assets/iconSVG/footerIconSVG/footerPayment/rotate.svg")
                },
                {
                    id: 11001,
                    payMenthod: "Tiền mặt",
                    iconPayment: require("@/assets/iconSVG/footerIconSVG/footerPayment/cash.svg")
                },
                {
                    id: 11002,
                    payMenthod: "Thẻ ATM",
                    iconPayment: require("@/assets/iconSVG/footerIconSVG/footerPayment/card.svg")

                },
                {
                    id: 11003,
                    payMenthod: "Thẻ quốc tế",
                    iconPayment: require("@/assets/iconSVG/footerIconSVG/footerPayment/world.svg")

                },
            ]
        }
    }
}
</script>