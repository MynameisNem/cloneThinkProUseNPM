<template>
    <SectionPromoSpecial :list-sale-promo="selectData"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial.vue'
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
            const location = [9, 15]
            return location.map(index => this.bannanghaData[index])
        }
    }
}
</script>