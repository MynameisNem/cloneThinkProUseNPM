<template>
    <SectionPromoSpecial :list-sale-promo="chairData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { chairData } from '@/data-js/chair-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            chairData
        }
    }
}
</script>