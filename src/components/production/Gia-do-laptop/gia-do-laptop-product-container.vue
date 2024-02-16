<template>
    <BaseProductContainer :product-infor="giadolaptopData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { giadolaptopData } from '../../../data-js/giadolaptop-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            giadolaptopData
        }
    },    
}
</script>

<style scoped></style>