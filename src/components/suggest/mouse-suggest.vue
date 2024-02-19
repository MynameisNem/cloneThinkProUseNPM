<template>
    <BasePromoContainer
        :infor-product="chuotmaytinhData">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { chuotmaytinhData } from '@/data-js/chuotmaytinh-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            chuotmaytinhData
        }
    }
}
</script>

