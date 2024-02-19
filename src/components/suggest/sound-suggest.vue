<template>
    <BasePromoContainer
        :infor-product="speakerData">
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
    }
}
</script>