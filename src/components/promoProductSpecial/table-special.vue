<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { bannanghaData } from '@/data-js/bannangha-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            bannanghaData
        }
    },
    computed: {
        selectData() {
            return this.bannanghaData.filter(item => item.productName.includes("Bàn nâng hạ"))
        }
    }
}
</script>