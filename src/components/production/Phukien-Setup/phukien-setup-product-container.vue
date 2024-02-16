<template>
    <BaseProductContainer :product-infor="phukiensetupData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { phukiensetupData } from '../../../data-js/phukiensetup-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            phukiensetupData
        }
    },    
}
</script>

<style scoped></style>