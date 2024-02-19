<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial.vue'
import { balotuiData } from '@/data-js/balotui-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            balotuiData
        }
    },
    computed: {
        selectData() {
            return this.balotuiData.filter(item => item.productName.includes("Túi"))
        }
    }
}
</script>