<template>
    <BaseProductContainer :product-infor="gameconsoleData"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
import { gameconsoleData } from '../../../data-js/gamconsole-data.js';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            gameconsoleData
        }
    }
}
</script>