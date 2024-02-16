<template>
    <BaseProductContainer :product-infor="banghetreemData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { banghetreemData } from '../../../data-js/banghetreem-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            banghetreemData
        }
    }
}
</script>

