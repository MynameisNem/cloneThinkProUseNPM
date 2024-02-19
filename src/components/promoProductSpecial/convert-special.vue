<template>
    <SectionPromoSpecial :list-sale-promo="congchuyenData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { congchuyenData } from '@/data-js/congchuyen-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            congchuyenData
        }
    }
}
</script>