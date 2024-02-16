<template>
    <BaseProductContainer :product-infor="chairData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { chairData } from '../../../data-js/chair-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            chairData
        }
    }
}
</script>