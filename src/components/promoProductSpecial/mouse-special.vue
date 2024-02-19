<template>
    <SectionPromoSpecial :list-sale-promo="limitData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { chuotmaytinhData } from '@/data-js/chuotmaytinh-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            chuotmaytinhData
        }
    },
    computed: {
        limitData() {
            const limit = 15;
            return this.chuotmaytinhData.slice(0, limit)
        }
    }
}
</script>