<template>
    <BaseProductContainer :product-infor="phanmemData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { phanmemData } from '../../../data-js/phanmem-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            phanmemData
        }
    },    
}
</script>

<style scoped></style>