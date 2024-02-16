<template>
    <BaseProductContainer :product-infor="armmanhinhData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { armmanhinhData } from '../../../data-js/armmanhinh-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            armmanhinhData   
        }
    }
}
</script>

