<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { gameconsoleData } from '@/data-js/gamconsole-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            gameconsoleData
        }
    },
    computed: {
        selectData() {
            const limit = 28;
            return this.gameconsoleData.slice(19, limit)
        }
    }
}
</script>