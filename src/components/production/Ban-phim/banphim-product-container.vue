<template>
    <BaseProductContainer :product-infor="banphimData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { banphimData } from '../../../data-js/baphim-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            banphimData
        }
    }
}
</script>

<style scoped>

</style>