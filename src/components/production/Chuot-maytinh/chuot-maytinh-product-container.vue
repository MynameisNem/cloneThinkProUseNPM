<template>
    <BaseProductContainer :product-infor="chuotmaytinhData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { chuotmaytinhData } from '../../../data-js/chuotmaytinh-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            chuotmaytinhData
        }
    }
}
</script>