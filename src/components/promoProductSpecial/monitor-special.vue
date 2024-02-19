<template>
    <SectionPromoSpecial :list-sale-promo="manhinhData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { manhinhData } from '@/data-js/manhinh-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            manhinhData
        }
    }
}
</script>