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
                    id: 21017,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/25/Jumanji.jpg",
                    nameProduct: "Jumanji: The Video Game - Game Nintendo Switch",
                    priceProduct: "490.000",
                    priceDown: "-45%",
                    styleProduct: "border: 1px solid #FF0000; background: #FF0000;",
                },
                {
                    id: 21019,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/23/dragon-ball-z-kakarot-a-new-power-awakens-set-switch-1400x1400h.jpeg",
                    nameProduct: "Dragon Ball Z: Kakarot + A New Power Awakens Set US - Game Nintendo Switch",
                    priceProduct: "690.000",
                    priceDown: "-48%",
                    styleProduct: "border: 1px solid #FF0000; background: #FF0000;",
                },
                {
                    id: 21020,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/23/nba-2k22-switch-1400x1400.jpeg",
                    nameProduct: "NBA 2K22 US - Game Nintendo Switch",
                    priceProduct: "490.000",
                    priceDown: "-42%",
                    styleProduct: "border: 1px solid #FF0000; background: #FF0000;",
                },
                {
                    id: 21021,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/5vkqx-5s7oqgnj-w-3grmzf5dfxzbtib.jpg",
                    nameProduct: "Mario + Rabbids Kingdom Battle - Game Nintendo Switch",
                    priceProduct: "690.000",
                    priceDown: "-54%",
                    styleProduct: "border: 1px solid #0000FF; background: #0000FF;",
                },
                {
                    id: 21022,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/dragon_ball_fighterz_cho_nintendo_switch_grande.jpg",
                    nameProduct: "Dragon Ball FighterZ - Game Nintendo Switch",
                    priceProduct: "690.000",
                    priceDown: "-54%",
                    styleProduct: "border: 1px solid #FFFF00; background: #FFFF00;",
                },
                {
                    id: 21023,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/Shin-Megami-Tensei-V-thinkpro-02.png",
                    nameProduct: "Shin Megami Tensei V - Game Nintendo Switch",
                    priceProduct: "690.000",
                    priceDown: "-54%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 21024,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/21/monster_hunter_rise_nintendo_switch_e31dc88f81d14d469995a767942837ff_grande.jpg",
                    nameProduct: "Monster Hunter Rise - Game Nintendo Switch",
                    priceProduct: "890.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid #93CCEA; background: #93CCEA;",
                },
                {
                    id: 21026,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/21/b3e1c304617b44901bdc0ff3c17004e8.jpg",
                    nameProduct: "Ring Fit Adventure - Game Nintendo",
                    priceProduct: "1.590.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #FF0000; background: #FF0000;",
                },
                {
                    id: 21027,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/71ldCNgOCCL.jpg",
                    nameProduct: "Pokemon Violet - Game Nintendo Switch",
                    priceProduct: "1.390.000",
                    styleProduct: "border: 1px solid #A020F0; background: #A020F0;",
                },
                {
                    id: 21028,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/81EyjDeArUL.jpg",
                    nameProduct: "Pokemon Scarlet - Game Nintendo Switch",
                    priceProduct: "1.390.000",
                    styleProduct: "border: 1px solid #9F1D35; background: #9F1D35;",
                },
            ],
        }
    }
}
</script>