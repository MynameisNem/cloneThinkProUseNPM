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
                    id: 21100,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/27/balo-cao-cap-element-by-nicedesign-thinkpro-nicespace.jpg",
                    nameProduct: "Balo Cao Cấp Element - By NiceDesign",
                    priceProduct: "799.000",
                    priceDown: "-47%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                // có quà
                {
                    id: 21101,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/4/23/wiwu-pioneer-shouder-grey-0jpg",
                    nameProduct: "Túi chống sốc Wiwu Pioneer Shoulder for Laptop/UltraBook - M348",
                    priceProduct: "600.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                // có quà
                {
                    id: 21102,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/10/fit-black-0jpg",
                    nameProduct: "Túi Laptop Cartinoe Fit cho laptop 15.4 inch",
                    priceProduct: "460.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 21103,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/10/tp-lamando-black-0jpg",
                    nameProduct: "Túi xách Cartinoe Lamando cho laptop 13.3 inch",
                    priceProduct: "440.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 21104,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/31/newelite-grey-0jpg",
                    nameProduct: "Túi đeo chéo Cartinoe New Elite cho laptop 14 inch",
                    priceProduct: "450.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 21106,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/3/11/a13gr-00jpg",
                    nameProduct: "Túi chống sốc tomtoc 360 Protective 16\" - A13",
                    priceProduct: "849.000",
                    priceDown: "-6%",
                    styleProduct: "border: 1px solid #171616; background: #171616;",
                    styleProduct2: "border: 1px solid #747272; background: #747272;",
                },
                // có quà
                {
                    id: 21107,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2020/11/25/predatorSUV_00.jpg",
                    nameProduct: "Balo Acer Predator SUV",
                    priceProduct: "799.000",
                    priceDown: "-53%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21108,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/20/H61_00.png",
                    nameProduct: "Balo tomtoc Premium Urban Business cho laptop 15.6″ - H61",
                    priceProduct: "2.290.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21109,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/19/40014002_00.png",
                    nameProduct: "Túi Laptop chống sốc ReeYee 4001/4002",
                    priceProduct: "560.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },        
                {
                    id: 21110,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/16/A13BL_00.png",
                    nameProduct: "Túi chống sốc tomtoc 360 Protective 13\" - A13",
                    priceProduct: "819.000",
                    priceDown: "-6%",
                    styleProduct: "border: 1px solid #747272; background: #747272;",
                },
                {
                    id: 21111,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/20/H61_00.png",
                    nameProduct: "Balo tomtoc Premium Urban Business cho laptop 15.6\" - H61",
                    priceProduct: "2.290.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21112,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/19/1018_00.png",
                    nameProduct: "Balo Laptop đa năng ReeYee 17 RY1018/1019",
                    priceProduct: "1.090.000",
                    priceDown: "-5%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E0E0E0; background: #E0E0E0;",

                },
                {
                    id: 21113,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/20/1007_00.png",
                    nameProduct: "Balo Laptop đa năng ReeYee 15 RY1007/1008",
                    priceProduct: "990.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21114,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/19/mt3a2348-thinkpro.jpg",
                    nameProduct: "Balo Laptop Đa Năng Cao Cấp ReeYee RY-112B",
                    priceProduct: "1.090.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21115,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/25/tui-chong-soc-laptop-reeyee-40034004-thinkpro-nicespace-fvD.png",
                    nameProduct: "Túi Chống Sốc laptop ReeYee 4003/4004",
                    priceProduct: "430.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                },
                {
                    id: 21116,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/14/a13blu-02.jpg",
                    nameProduct: "Túi chống sốc tomtoc 360 Protective 14\" - A13",
                    priceProduct: "839.000",
                    priceDown: "-3%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    id: 21117,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/7/1/A62-01.jpg",
                    nameProduct: "Balo Tomtoc Premium Waterproof Casual - A62",
                    priceProduct: "1.390.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21118,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/21/balo-tomtoc-urbanex-t65-t65s1d1-thinkpro-nicespace-xYt.jpg",
                    nameProduct: "Balo Tomtoc URBANEX T65 -  T65S1D1",
                    priceProduct: "2.290.000",
                    priceDown: "-12%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21119,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/27/balo-tomtoc-roll-top-laptop-blackpack-travel-commute-casual-daypack-t61-thinkpro-nicespace.png",
                    nameProduct: "Balo Tomtoc Roll Top Laptop BlackPack Travel Commute Casual DayPack - T61",
                    priceProduct: "4.490.000",
                    priceDown: "-5%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                },
                {
                    id: 21120,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/27/balo-tomtoc-vintpack-lpatop-blackpack-ta1-thinkpro-nicespace.png",
                    nameProduct: "Balo Tomtoc Vintpack Laptop Blackpack - TA1",
                    priceProduct: "1.590.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #D2BC78; background: #D2BC78;",
                    styleProduct3: "border: 1px solid #ECECEC; background: #ECECEC;",
                },
                {
                    id: 21121,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/18/tui-chong-soc-laptop-uniq-vienna-thinkpro-nicespace.png",
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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/14/innos-04-thinkpro-nicespace.png",
                    nameProduct: "Túi xách chống sốc Laptop  Innostyle OmniProtect Carry - S114",
                    priceProduct: "671.500",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                },
                {
                    id: 21123,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/17/balo-tomtoc-slash-flip-rucksack-18l-thinkpro-nicespace.png",
                    nameProduct: "Balo Tomtoc SLASH FLIP RUCKSACK 18L - A64",
                    priceProduct: "1.390.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #888888; background: #888888;",
                    styleProduct3: "border: 1px solid #576364; background: #576364;",
                },
                {
                    id: 21124,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/20/tui-chong-soc-laptop-innostyle-omniprotect-slim-thinkpro-nicespace.png",
                    nameProduct: "Túi Chống Sốc Laptop Innostyle OmniProtect Slim - S112",
                    priceProduct: "493.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #929191; background: #929191;",
                },
                {
                    id: 21125,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/tomtoc-h62-1.jpeg",
                    nameProduct: "Balo Tomtoc H62 Premium Lightweight Business",
                    priceProduct: "1.550.000",
                    priceDown: "-18%",
                    styleProduct1: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21126,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/27/Ảnh màn hình 2023-01-27 lúc 15.33.26.png",
                    nameProduct: "Túi đựng laptop chống sốc Ugreen",
                    priceProduct: "360.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                },
                {
                    id: 21127,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/25/tui-chong-soc-x1-sleeve-thinkpro.png",
                    nameProduct: "Túi chống sốc X1 Sleeve",
                    priceProduct: "299.000",
                    styleProduct1: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21128,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/6/balo-tomtoc-x-pac-techpack-black-thinkpro-JT2.jpg",
                    nameProduct: "Balo TOMTOC X-PAC TECHPACK BLACK",
                    priceProduct: "3.990.000",
                    priceDown: "-13%",
                    styleProduct1: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21129,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/9/2/lenovo-thinkpad-essential-16-bagjpg",
                    nameProduct: "Túi xách Lenovo ThinkPad Essential 16-inch",
                    priceProduct: "599.000",
                    priceDown: "-14%",
                    styleProduct1: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21130,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/9/1/lenovo-thinkpad-essential-16jpg",
                    nameProduct: "Balo Lenovo ThinkPad Essential 16-inch Backpack",
                    priceProduct: "799.000",
                    priceDown: "-33%",
                    styleProduct1: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21131,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/3/24/balonava-xanh-0jpg",
                    nameProduct: "Balo Laptop Lenovo 15.6\" by Nava",
                    priceProduct: "290.000",
                    priceDown: "-42%",
                    styleProduct1: "border: 1px solid #87A96B; background: #87A96B;",
                },
            ]
        }        
    },
    mounted() {
        console.log('lenght: ', this.inforProduct.length)
    }
}
</script>