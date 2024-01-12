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
                    id: 20909,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/14/khung-ban-nang-ha-cao-cap-langbiang-by-nicedesgin-thinkpro-nicespace.png",
                    nameProduct: "Khung bàn nâng hạ cao cấp LANGBIANG - By NiceDesgin",
                    priceProduct: "5.990.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20901,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/14/khung-ban-nang-ha-pusilung-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Khung bàn nâng hạ PUSILUNG - By NiceDesign (Cao cấp)",
                    priceProduct: "4.490.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                    styleProduct2: "border: 1px solid #2B2A2A; background: #2B2A2A;",
                },
                // có quà
                {
                    id: 20902,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/14/khung-ban-nang-ha-cao-cap-fansi-by-nicedesign-thinkpro-nicespace-m4w.png",
                    nameProduct: "Khung bàn nâng hạ cao cấp FANSI - By NiceDesign",
                    priceProduct: "6.990.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
            ],
        }
    }
}
</script>