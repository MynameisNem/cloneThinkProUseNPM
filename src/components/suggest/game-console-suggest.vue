<template>
    <BasePromoContainer
        :infor-product="gameconsoleData">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
import { gameconsoleData } from '@/data-js/gamconsole-data.js';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            gameconsoleData
        }        
    },
}
</script>