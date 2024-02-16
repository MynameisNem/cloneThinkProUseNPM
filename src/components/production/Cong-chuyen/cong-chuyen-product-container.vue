<template>
    <BaseProductContainer :product-infor="congchuyenData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { congchuyenData } from '../../../data-js/congchuyen-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            congchuyenData
        }
    },    
}
</script>

<style scoped></style>