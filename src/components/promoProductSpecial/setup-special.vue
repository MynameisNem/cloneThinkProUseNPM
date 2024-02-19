<template>
    <SectionPromoSpecial :list-sale-promo="phukiensetupData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { phukiensetupData } from '@/data-js/phukiensetup-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            phukiensetupData
        }
    }
}
</script>