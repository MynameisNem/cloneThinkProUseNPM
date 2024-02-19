<template>
    <BasePromoContainer
        :infor-product="filterProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { speakerData } from '@/data-js/speaker-data';
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
            const marshallsProduct = this.speakerData.filter(item => item.productName.includes("Marshall"));
            const limit = marshallsProduct.slice(0, 20)
            return limit
        }
    }
}
</script>