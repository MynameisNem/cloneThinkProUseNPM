<template>
    <BaseProductContainer :product-infor="noithatData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { noithatData } from '../../../data-js/noithat-data.js'
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            noithatData
        }
    }
}
</script>

