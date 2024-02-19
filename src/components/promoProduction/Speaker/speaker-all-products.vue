<template>
    <BasePromoContainer
        :infor-product="filterProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { speakerData } from '@/data-js/speaker-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            speakerData
        }        
    },
    computed: {
        filterProduct() {
            const nonMarshallsProduct = this.speakerData.filter(item => !item.productName.includes("Marshall"))
            const limit = nonMarshallsProduct.slice(0, 15)
            return limit
        }
    }
}
</script>