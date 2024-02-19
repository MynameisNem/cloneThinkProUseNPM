<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { speakerData } from '@/data-js/speaker-data';
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
            return this.speakerData.slice(2, 4)
        }
    }
}
</script>