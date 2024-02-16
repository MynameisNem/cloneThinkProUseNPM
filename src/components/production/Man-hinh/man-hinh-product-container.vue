<template>
    <BaseProductContainer :product-infor="manhinhData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { manhinhData } from '../../../data-js/manhinh-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            manhinhData
        }
    }
}
</script>

