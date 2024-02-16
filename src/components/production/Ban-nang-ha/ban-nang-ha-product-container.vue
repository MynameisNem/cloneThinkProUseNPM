<template>
    <BaseProductContainer :product-infor="bannanghaData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { bannanghaData } from '../../../data-js/bannangha-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            bannanghaData
        }
    }
}
</script>

