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
                    id: 21031,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/29/microsoft-xbox-serri-x-0.jpeg",
                    nameProduct: "Máy chơi game Xbox Series X 1TB",
                    priceProduct: "13.500.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21000,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/10/9/ps5-standard-edition-thinkprojpg",
                    nameProduct: "Máy chơi game Sony PlayStation 5 - PS5",
                    priceProduct: "9.490.000",
                    priceDown: "-51%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #9F1D35; background: #9F1D35;",
                },
                // có quà
                {
                    id: 21001,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/7/kinh-thong-minh-ar-rokid-max-thinkpro-epiczone.jpg",
                    nameProduct: "Kính Thông Minh AR Rokid Max",
                    priceProduct: "9.990.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #205381; background: #205381;",
                },
                // có quà
                {
                    id: 21002,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/21/may-choi-game-sony-playstation-5-slim-ps5-thinkpro-epiczone-occ.jpg",
                    nameProduct: "Máy chơi game Sony PlayStation 5 Slim - PS5 Slim",
                    priceProduct: "12.390.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21003,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/2/kinh-thuc-te-ao-meta-quest-3-thinkpro-epiczone.png",
                    nameProduct: "Kính Thực Tế Ảo Meta Quest 3",
                    priceProduct: "13.490.000",
                    priceDown: "-21%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21004,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/6/may-choi-game-lenovo-legion-go-thinkpro-epiczone-dQz.jpg",
                    nameProduct: "Máy Chơi Game Lenovo Legion Go",
                    priceProduct: "19.390.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 21005,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/17/xreal-air-adapter-thinkpro-epiczone-IwP.png",
                    nameProduct: "Xreal Air Adapter",
                    priceProduct: "2.050.000",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 21006,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/30/kinh-3d-thong-minh-xreal-air-thinkpro-epiczone-KIV.jpg",
                    nameProduct: "Kính 3D thông minh Xreal",
                    priceProduct: "7.990.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21007,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/21/Ảnh màn hình 2022-12-21 lúc 16.02.29.png",
                    nameProduct: "Kính thực tế ảo PlayStation VR2",
                    priceProduct: "13.490.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21008,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/16/xreal-beam-adapter-thinkpro-epiczone.png",
                    nameProduct: "Xreal Beam Adapter",
                    priceProduct: "3.990.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },               
                {
                    id: 21009,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/31/oled_zelda08.png",
                    nameProduct: "Hộp đựng Nintendo Switch - Legend of Zelda™: Tears of the Kingdom Edition",
                    priceProduct: "990.000",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21010,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/8/nintendo-switch-console-oled-model-w-2.jpeg",
                    nameProduct: "Máy chơi game Nintendo Switch OLED",
                    priceProduct: "7.390.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #FF0000; background: #FF0000;",
                    styleProduct3: "border: 1px solid #3B0A0A; background: #3B0A0A;",
                    styleProduct4: "border: 1px solid #E7E0A5; background: #E7E0A5;",

                },
                {
                    id: 21011,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/29/Ảnh màn hình 2023-01-29 lúc 13.09.33.png",
                    nameProduct: "Tay cầm Dualsense Edge PS5",
                    priceProduct: "4.990.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21012,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/9/XboxS_01.jpg",
                    nameProduct: "Máy chơi game Xbox S",
                    priceProduct: "6.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21013,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/5/may-choi-game-valve-steam-deck-01.png",
                    nameProduct: "Máy chơi game Valve Steam Deck",
                    priceProduct: "11.290.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
            ]
        }        
    },
}
</script>