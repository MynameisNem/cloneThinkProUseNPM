<template>
    <SectionPromoSpecial :list-sale-promo="phanmemData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { phanmemData } from '@/data-js/phanmem-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            phanmemData
        }
    }
}
</script>