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
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/22/loa-bluetooth-harman-kardon-soundstick-4-thinkpro-nicespace.png",
                    nameProduct: "Loa Bluetooth Harman Kardon Soundstick 4",
                    priceProduct: "5.990.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-di-dong-bo-beosound-explore-7035-thumb.png",
                    nameProduct: "Loa di động B&O BEOSOUND EXPLORE",
                    priceProduct: "4.490.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    styleProduct3: "border: 1px solid #664228; background: #664228;",
                    styleProduct4: "border: 1px solid #052E0F; background: #052E0F;",
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-harman-kardon-onyx-studio-7-6172-thumb.png",
                    nameProduct: "Loa Harman Kardon Onyx Studio 7",
                    priceProduct: "4.490.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #050F6C; background: #050F6C;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    styleProduct3: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bo-beosound-a1-gen-2-5865-thumb.png",
                    nameProduct: "Loa B&O Beosound A1 Gen 2",
                    priceProduct: "6.490.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    styleProduct3: "border: 1px solid #CF0034; background: #CF0034;",
                    styleProduct4: "border: 1px solid #FFB5C5; background: #FFB5C5;",
                    styleProduct5: "border: 1px solid #FFC092; background: #FFC092;",

                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-harman-kardon-go-play-5573-thumb.png",
                    nameProduct: "Loa Harman Kardon Go + Play",
                    priceProduct: "4.790.000",
                    priceDown: "-26%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2024/1/9/loa-di-dong-hifuture-event-80w-thinkpro-nicespace-9ku.jpg",
                    nameProduct: "Loa Di Động HiFuture Event 80W",
                    priceProduct: "3.440.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",

                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-willen-5955-thumb.png",
                    nameProduct: "Loa Marshall Willen",
                    priceProduct: "2.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-middleton-6242-thumb.png",
                    nameProduct: "Loa Marshall Middleton",
                    priceProduct: "5.990.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/21/tai-nghe-chup-tai-marshall-major-4-1.jpeg",
                    nameProduct: "Tai nghe chụp tai Marshall Major 4",
                    priceProduct: "3.290.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #664228; background: #664228;"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/21/Marshall-Motif-ANC.jpeg",
                    nameProduct: "Tai nghe Marshall Motif - Chống ồn chủ động ANC",
                    priceProduct: "4.090.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-2-5104-thumb.png",
                    nameProduct: "Loa Marshall Stanmore 2",
                    priceProduct: "5.690.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct3: "border: 1px solid #532801; background: #532801;",
                    giftInfor: "Quà tặng 679.800"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-acton-2-5116-thumb.png",
                    nameProduct: "Loa Marshall Acton 2",
                    priceProduct: "4.690.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #664228; background: #664228;",
                    styleProduct3: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    giftInfor: "Quà tặng 679.800"

                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-woburn-3-5135-thumb.png",
                    nameProduct: "Loa Marshall Woburn 3",
                    priceProduct: "8.990.000",
                    priceDown: "-49%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    giftInfor: "Quà tặng 679.800"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-3-5137-thumb.png",
                    nameProduct: "Loa Marshall Stanmore 3",
                    priceProduct: "6.690.000",
                    priceDown: "-46%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    giftInfor: "Quà tặng 679.800"
                },
                {
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/18/loa-marshall-acton-3-thinkpro-nicespace.jpg",
                    nameProduct: "Loa Marshall Acton 3",
                    priceProduct: "5.590.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    styleProduct3: "border: 1px solid #41230A; background: #41230A;",
                    giftInfor: "Quà tặng 679.800"
                },
            ],
        }
    }
}
</script>