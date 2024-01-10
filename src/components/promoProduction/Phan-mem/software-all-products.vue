<template>
    <BasePromoContainer
        :infor-product="inforProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            inforProduct: [
                {
                    id: 20700,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/28/microsoft-365-family-ban-quyen-tron-bo-office-word-exel-powerpoint-cho-6-nguoi-dung-thinkpro.jpg",
                    nameProduct: "Microsoft 365 Family bản quyền (Trọn bộ Office: Word, Exel, PowerPoint - Cho 6 người dùng)",
                    priceProduct: "1.490.000",
                    priceDown: "-25%",
                },
                // có quà
                {
                    id: 20701,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/28/microsoft-365-personal-ban-quyen-tron-bo-office-word-exel-powerpoint-thinkpro.jpg",
                    nameProduct: "Microsoft 365 Personal bản quyền (Trọn bộ Office: Word, Exel, PowerPoint)",
                    priceProduct: "990.000",
                    priceDown: "-34%",
                },
                // có quà
                {
                    id: 20702,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/8/10/office-home-student-2021-thinkpro-01.jpeg",
                    nameProduct: "Microsoft Office Home & Student",
                    priceProduct: "2.190.000",
                    priceDown: "-27%",
                },
            ]
        }        
    },
}
</script>