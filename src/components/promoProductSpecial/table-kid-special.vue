<template>
    <SectionPromoSpecial :list-sale-promo="listSalePromo"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            listSalePromo: [
                {
                    id: 20950,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/28/ghe-cong-thai-hoc-chong-gu-tre-em-biokids-thinkpro-nicespace-GuO.png",
                    nameProduct: "Ghế Công Thái Học Chống Gù Trẻ Em BioKids",
                    priceProduct: "1.990.000",
                    priceDown: "-29%",
                    styleProduct: "border: 1px solid #5AD7F4; background: #5AD7F4;",
                    styleProduct2: "border: 1px solid #FFB5C5; background: #FFB5C5;",
                    styleProduct3: "border: 1px solid #8D8D8D; background: #8D8D8D;"
                },
            ],
        }
    }
}
</script>