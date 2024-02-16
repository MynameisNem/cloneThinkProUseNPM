<template>
    <BaseProductContainer :product-infor="balotuiData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { balotuiData } from '../../../data-js/balotui-data';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            balotuiData
        }
    }
}
</script>

