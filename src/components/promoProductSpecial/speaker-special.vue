<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { speakerData } from '@/data-js/speaker-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            speakerData
        }
    },
    computed: {
        selectData() {
            return this.speakerData.filter(item => item.productName.includes("Loa"))
        }
    }
}
</script>