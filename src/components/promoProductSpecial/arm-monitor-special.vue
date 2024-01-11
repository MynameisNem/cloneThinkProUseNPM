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
                    id: 20300,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/11/gia-do-man-hinh-human-motion-t9-pro-thinkpro-4.png",
                    nameProduct: "Arm màn hình Human Motion T9 Pro",
                    priceProduct: "1.790.000",
                    priceDown: "-10%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 20301,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/6/arm-man-hinh-t6-pro-thinkpro-den-01.png",
                    nameProduct: "Arm màn hình đôi Human Motion T6 Pro - Dual",
                    priceProduct: "1.150.000",
                    priceDown: "-3%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    inforProduct1: "Arm đôi"
                },
                // có quà
                {
                    id: 20302,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/25/humanmotion-m8-2.png",
                    nameProduct: "Arm Màn Hình Human Motion M8",
                    priceProduct: "1.390.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Arm đôi"
                },
                {
                    id: 20303,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/15/dden-hyperwork.png",
                    nameProduct: "Arm màn hình HyperWork A1C",
                    priceProduct: "990.000",
                    priceDown: "-34%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20304,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/25/arm-man-hinh-human-motion-t9-pro-ii-thinkpro.png",
                    nameProduct: "Arm màn hình Human Motion T9 Pro II Series",
                    priceProduct: "1.850.000",
                    priceDown: "-7%",
                    styleProduct: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    styleProduct2: "border: 1px solid #607B8B; background: #607B8B;",
                },
                // có quà
                {
                    id: 20306,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T9_01.png",
                    nameProduct: "Arm màn hình Human Motion T9",
                    priceProduct: "1.490.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;"
                },
                // có quà
                {
                    id: 20307,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T7-01.png",
                    nameProduct: "Arm màn hình Human Motion T7",
                    priceProduct: "1.290.000",
                    priceDown: "-30%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20308,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T2_01.png",
                    nameProduct: "Arm màn hình Human Motion T2",
                    priceProduct: "1.190.000",
                    priceDown: "-23%",
                    styleProduct1: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
            ],
        }
    }
}
</script>