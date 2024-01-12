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
                    id: 20900,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/21/ban-nang-ha-pusilung-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ PUSILUNG - by NiceDesign (Cao Cấp)",
                    priceProduct: "4.690.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #2B2A2A; background: #2B2A2A;",
                    styleProduct2: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                },
                {
                    id: 20903,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/9/ban-nang-ha-puluong-oval-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ PULUONG - Oval - By NiceDesign (Cao Cấp)",
                    priceProduct: "7.490.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20904,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/22/ban-nang-ha-puluong-square-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ PULUONG - Square - By NiceDesign (Cao Cấp)",
                    priceProduct: "7.490.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 20906,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/10/ban-nang-ha-cao-cap-langbiang-square-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ Cao Cấp LANGBIANG - Square - By NiceDesign (Cao Cấp)",
                    priceProduct: "9.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    giftInfor: "Quà tặng 800.000"
                },
                // có quà
                {
                    id: 20907,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/14/ban-nang-ha-cao-cap-langbiang-oval-by-nicedesgin-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ Cao Cấp LANGBIANG - Oval - By NiceDesgin (Cao Cấp)",
                    priceProduct: "9.990.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    giftInfor: "Quà tặng 800.000"
                },
                {
                    id: 20912,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/9/ban-nang-ha-cao-cap-fansi-square-by-nicedesign-cao-cap-thinkpro.png",
                    nameProduct: "Bàn nâng hạ Cao Cấp FANSI - Square - By NiceDesign (Cao Cấp)",
                    priceProduct: "12.990.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20913,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/21/ban-nang-ha-taxua-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ TAXUA - By NiceDesign (Cao Cấp)",
                    priceProduct: "5.190.000",
                    priceDown: "-29%",
                    styleProduct: "border: 1px solid #9C9C9C; background: #9C9C9C;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    styleProduct3: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20917,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/9/ban-nang-ha-cao-cap-fansi-oval-by-nicedesign-cao-cap-thinkpro-nicespace.png",
                    nameProduct: "Bàn nâng hạ Cao Cấp FANSI - Oval - By NiceDesign (Cao Cấp)",
                    priceProduct: "12.990.000",
                    priceDown: "-26%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    giftInfor: "Quà tặng 800.000"
                },
            ],
        }
    }
}
</script>