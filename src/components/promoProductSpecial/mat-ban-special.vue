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
                // có quà
                {
                    id: 20908,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/22/mat-ban-go-puluong-chong-am-cao-cap-by-nice-design-thinkpro-nicespace-QGg.png",
                    nameProduct: "Mặt bàn PULUONG - by NiceDesign (Cao Cấp)",
                    priceProduct: "2.990.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20916,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/9/z4007328321083_3e2f8f21e125ef44b9b0504e0940f83d.jpg",
                    nameProduct: "Mặt bàn gỗ Cao Cấp NatureBridge LANGBIANG - By NiceDesign",
                    priceProduct: "5.990.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #AA6200; background: #AA6200;",
                    styleProduct2: "border: 1px solid #110E0C; background: #110E0C;",
                    styleProduct3: "border: 1px solid #421515; background: #421515;",
                    styleProduct4: "border: 1px solid #DD9453; background: #DD9453;",
                },
            ],
        }
    }
}
</script>