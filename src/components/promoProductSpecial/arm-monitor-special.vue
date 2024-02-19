<template>
    <SectionPromoSpecial :list-sale-promo="armmanhinhData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { armmanhinhData } from '@/data-js/armmanhinh-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            armmanhinhData
        }
    }
}
</script>