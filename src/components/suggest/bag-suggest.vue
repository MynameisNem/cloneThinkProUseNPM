<template>
    <BasePromoContainer 
        :infor-product="balotuiData">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { balotuiData } from '@/data-js/balotui-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            balotuiData
        }
    }
}
</script>

