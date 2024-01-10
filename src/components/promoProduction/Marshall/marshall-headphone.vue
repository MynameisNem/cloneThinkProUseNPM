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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/21/tai-nghe-chup-tai-marshall-major-4-1.jpeg",
                    nameProduct: "Tai nghe chụp tai Marshall Major 4",
                    priceProduct: "3.290.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #664228; background: #664228;"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/21/Marshall-Motif-ANC.jpeg",
                    nameProduct: "Tai nghe Marshall Motif - Chống ồn chủ động ANC",
                    priceProduct: "4.090.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },                
            ]
        }        
    }
}
</script>