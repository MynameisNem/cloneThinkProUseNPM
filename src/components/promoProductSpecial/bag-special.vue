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
                    id: 21101,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/4/23/wiwu-pioneer-shouder-grey-0jpg",
                    nameProduct: "Túi chống sốc Wiwu Pioneer Shoulder for Laptop/UltraBook - M348",
                    priceProduct: "600.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 21102,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/10/fit-black-0jpg",
                    nameProduct: "Túi Laptop Cartinoe Fit cho laptop 15.4 inch",
                    priceProduct: "460.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Phù hợp 14 - 15 inch" 
                },
                {
                    id: 21103,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/10/tp-lamando-black-0jpg",
                    nameProduct: "Túi xách Cartinoe Lamando cho laptop 13.3 inch",
                    priceProduct: "440.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Phù hợp 13 inch"
                },
                {
                    id: 21104,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/31/newelite-grey-0jpg",
                    nameProduct: "Túi đeo chéo Cartinoe New Elite cho laptop 14 inch",
                    priceProduct: "450.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Phù hợp 13 - 14 inch"
                },
                // có quà
                {
                    id: 21106,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/3/11/a13gr-00jpg",
                    nameProduct: "Túi chống sốc tomtoc 360 Protective 16\" - A13",
                    priceProduct: "849.000",
                    priceDown: "-6%",
                    styleProduct: "border: 1px solid #171616; background: #171616;",
                    styleProduct2: "border: 1px solid #747272; background: #747272;",
                    inforProduct1: "Phù hợp 15 - 16 inch"
                },
                {
                    id: 21115,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/25/tui-chong-soc-laptop-reeyee-40034004-thinkpro-nicespace-fvD.png",
                    nameProduct: "Túi Chống Sốc laptop ReeYee 4003/4004",
                    priceProduct: "430.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                },
                {
                    id: 21116,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/14/a13blu-02.jpg",
                    nameProduct: "Túi chống sốc tomtoc 360 Protective 14\" - A13",
                    priceProduct: "839.000",
                    priceDown: "-3%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    inforProduct1: "Phù hợp 14 inch"
                },
                {
                    id: 21121,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/18/tui-chong-soc-laptop-uniq-vienna-thinkpro-nicespace.png",
                    nameProduct: "Túi Chống Sốc Laptop UNIQ Vienna",
                    priceProduct: "569.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #A6D9A6; background: #A6D9A6;",
                    styleProduct3: "border: 1px solid #FFFF00; background: #FFFF00;",
                    styleProduct4: "border: 1px solid #FFB5C5; background: #FFB5C5;",
                },
                {
                    id: 21122,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/14/innos-04-thinkpro-nicespace.png",
                    nameProduct: "Túi xách chống sốc Laptop  Innostyle OmniProtect Carry - S114",
                    priceProduct: "671.500",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                },
                {
                    id: 21126,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/27/Ảnh màn hình 2023-01-27 lúc 15.33.26.png",
                    nameProduct: "Túi đựng laptop chống sốc Ugreen",
                    priceProduct: "360.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                },
                {
                    id: 21129,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/9/2/lenovo-thinkpad-essential-16-bagjpg",
                    nameProduct: "Túi xách Lenovo ThinkPad Essential 16-inch",
                    priceProduct: "599.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Phù hợp 15 - 16 inch"
                },
            ],
        }
    }
}
</script>