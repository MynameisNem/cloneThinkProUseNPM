<template>
    <SectionPromoSpecial :list-sale-promo="banphimData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { banphimData } from '@/data-js/baphim-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            banphimData
        }
    }
}
</script>