<template>
    <BaseProductContainer :product-infor="laptopData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { laptopData } from '../../../data-js/laptop-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            laptopData
        }
    },    
}
</script>

<style scoped></style>