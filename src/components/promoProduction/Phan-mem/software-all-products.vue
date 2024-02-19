<template>
    <BasePromoContainer
        :infor-product="phanmemData">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { phanmemData } from '@/data-js/phanmem-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            phanmemData
        }        
    },
}
</script>