<template>
    <BaseProductContainer :product-infor="ramData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { ramData } from '../../../data-js/ram-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            ramData
        }
    }
}
</script>

