<template>
    <BasePromoContainer
        :infor-product="inforProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '../sharedVue/base-page/base-promo-container.vue';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            inforProduct: [
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-willen-5955-thumb.png",
                    nameProduct: "Loa Marshall Willen",
                    priceProduct: "2.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                }
            ]
        }        
    }
}
</script>