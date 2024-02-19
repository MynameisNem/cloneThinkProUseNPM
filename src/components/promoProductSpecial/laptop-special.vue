<template>
    <SectionPromoSpecial 
        :list-sale-promo="laptopData">
    </SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
import { laptopData } from '@/data-js/laptop-data.js';
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            laptopData
        }
    }
}
</script>