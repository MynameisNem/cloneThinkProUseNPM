<template>
    <BasePromoContainer
        :infor-product="laptopData">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { laptopData } from '@/data-js/laptop-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
           laptopData 
        }        
    },
}
</script>