<template>
    <SectionPromoSpecial :list-sale-promo="banghetreemData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { banghetreemData } from '@/data-js/banghetreem-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            banghetreemData
        }
    }
}
</script>