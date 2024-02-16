<template>
    <BaseProductContainer :product-infor="ocungData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { ocungData } from '../../../data-js/ocung-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            ocungData
        }
    }
}
</script>

