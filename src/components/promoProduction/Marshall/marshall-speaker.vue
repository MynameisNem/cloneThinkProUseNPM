<template>
    <BasePromoContainer
        :infor-product="inforProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            inforProduct: [
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-willen-5955-thumb.png",
                    nameProduct: "Loa Marshall Willen",
                    priceProduct: "2.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-middleton-6242-thumb.png",
                    nameProduct: "Loa Marshall Middleton",
                    priceProduct: "5.990.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-2-5104-thumb.png",
                    nameProduct: "Loa Marshall Stanmore 2",
                    priceProduct: "5.690.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct3: "border: 1px solid #532801; background: #532801;",
                    giftProduct: "Quà tặng 679.800"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-acton-2-5116-thumb.png",
                    nameProduct: "Loa Marshall Acton 2",
                    priceProduct: "4.690.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #664228; background: #664228;",
                    styleProduct3: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    giftProduct: "Quà tặng 679.800"

                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-woburn-3-5135-thumb.png",
                    nameProduct: "Loa Marshall Woburn 3",
                    priceProduct: "8.990.000",
                    priceDown: "-49%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    giftProduct: "Quà tặng 679.800"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-3-5137-thumb.png",
                    nameProduct: "Loa Marshall Stanmore 3",
                    priceProduct: "6.690.000",
                    priceDown: "-46%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    giftProduct: "Quà tặng 679.800"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/18/loa-marshall-acton-3-thinkpro-nicespace.jpg",
                    nameProduct: "Loa Marshall Acton 3",
                    priceProduct: "5.590.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;",
                    styleProduct3: "border: 1px solid #41230A; background: #41230A;",
                    giftProduct: "Quà tặng 679.800"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-kilburn-2-5169-thumb.png",
                    nameProduct: "Loa Marshall KilBurn 2",
                    priceProduct: "5.190.000",
                    priceDown: "-48%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #252604; background: #252604;",
                    giftProduct: "Quà tặng 500.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-emberton-2-5173-thumb.png",
                    nameProduct: "Loa Marshall Emberton 2",
                    priceProduct: "3.390.000",
                    priceDown: "-32%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E6D9BD; background: #E6D9BD;"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-tufton-5175-thumb.png",
                    nameProduct: "Loa Marshall Tufton",
                    priceProduct: "7.090.000",
                    priceDown: "-41%",
                    styleProduct: "border: 1px solid #252604; background: #252604;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    giftProduct: "Quà tặng 500.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stockwell-2-5178-thumb.png",
                    nameProduct: "Loa Marshall Stockwell 2",
                    priceProduct: "4.490.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
            ]
        }        
    }
}
</script>