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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/22/loa-bluetooth-harman-kardon-soundstick-4-thinkpro-nicespace.png",
                    nameProduct: "Loa Bluetooth Harman Kardon Soundstick 4",
                    priceProduct: "5.990.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-di-dong-bo-beosound-explore-7035-thumb.png",
                    nameProduct: "Loa di động B&O BEOSOUND EXPLORE",
                    priceProduct: "4.490.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    styleProduct3: "border: 1px solid #664228; background: #664228;",
                    styleProduct4: "border: 1px solid #052E0F; background: #052E0F;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-harman-kardon-onyx-studio-7-6172-thumb.png",
                    nameProduct: "Loa Harman Kardon Onyx Studio 7",
                    priceProduct: "4.490.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #050F6C; background: #050F6C;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    styleProduct3: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bo-beosound-a1-gen-2-5865-thumb.png",
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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-harman-kardon-go-play-5573-thumb.png",
                    nameProduct: "Loa Harman Kardon Go + Play",
                    priceProduct: "4.790.000",
                    priceDown: "-26%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2024/1/9/loa-di-dong-hifuture-event-80w-thinkpro-nicespace-9ku.jpg",
                    nameProduct: "Loa Di Động HiFuture Event 80W",
                    priceProduct: "3.440.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",

                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-devialet-mania-5931-thumb.png",
                    nameProduct: "Loa Devialet Mania",
                    priceProduct: "21.990.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #888888; background: #888888;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-di-dong-bo-beosound-a5-6746-thumb.png",
                    nameProduct: "Loa Di Động B&O BEOSOUND A5",
                    priceProduct: "29.990.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #A87A1D; background: #A87A1D;",
                    styleProduct2: "border: 1px solid #4A392E; background: #4A392E;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bang-olufsen-beolit-20-6118-thumb.png",
                    nameProduct: "Loa Bang Olufsen Beolit 20",
                    priceProduct: "12.990.000",
                    priceDown: "-7%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    styleProduct3: "border: 1px solid #EFE7D3; background: #EFE7D3;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bose-soundlink-revolve-plus-ii-5397-thumb.png",
                    nameProduct: "Loa Bose SOUNDLINK REVOLVE PLUS II",
                    priceProduct: "7.990.000",
                    priceDown: "-16%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #B3B3B3; background: #B3B3B3;",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bluetooth-harman-kardon-onyx-studio-8-5534-thumb.png",
                    nameProduct: "Loa Bluetooth Harman Kardon Onyx Studio 8",
                    priceProduct: "5.590.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #0000FF; background: #0000FF;",
                    styleProduct3: "border: 1px solid #E5C6A0; background: #E5C6A0;"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bluetooth-harman-kardon-onyx-studio-6-5537-thumb.png",
                    nameProduct: "Loa Bluetooth Harman Kardon Onyx Studio 6",
                    priceProduct: "3.790.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #0000FF; background: #0000FF;",
                    styleProduct3: "border: 1px solid #7F7B7B; background: #7F7B7B;"
                },
            ]
        }        
    }
}
</script>