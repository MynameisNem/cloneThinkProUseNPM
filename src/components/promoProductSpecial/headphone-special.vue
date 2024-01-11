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
                    id: 21000,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/21/Marshall-Motif-ANC.jpeg",
                    nameProduct: "Tai nghe Marshall Motif - Chống ồn chủ động ANC Chống ồn chủ động",
                    priceProduct: "4.090.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000",
                    inforProduct1: "Chống ồn chủ động"
                },
                // có quà
                {
                    id: 21001,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/14/majoriv-brown-1.png",
                    nameProduct: "Tai nghe chụp tai Marshall Major 4",
                    priceProduct: "3.390.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000",
                    styleProduct2: "border: 1px solid #664228; background: #664228",
                },
            ],
        }
    }
}
</script>