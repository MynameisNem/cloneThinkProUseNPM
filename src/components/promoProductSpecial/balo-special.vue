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
                    id: 21130,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/9/1/lenovo-thinkpad-essential-16jpg",
                    nameProduct: "Balo Lenovo ThinkPad Essential 16-inch Backpack",
                    priceProduct: "799.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21131,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/3/24/balonava-xanh-0jpg",
                    nameProduct: "Balo Laptop Lenovo 15.6\" by Nava",
                    priceProduct: "290.000",
                    priceDown: "-42%",
                    styleProduct: "border: 1px solid #87A96B; background: #87A96B;",
                },
                {
                    id: 21100,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/27/balo-cao-cap-element-by-nicedesign-thinkpro-nicespace.jpg",
                    nameProduct: "Balo Cao Cấp Element - By NiceDesign",
                    priceProduct: "799.000",
                    priceDown: "-47%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 21107,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2020/11/25/predatorSUV_00.jpg",
                    nameProduct: "Balo Acer Predator SUV",
                    priceProduct: "799.000",
                    priceDown: "-53%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21112,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/19/1018_00.png",
                    nameProduct: "Balo Laptop đa năng ReeYee 17 RY1018/1019",
                    priceProduct: "1.090.000",
                    priceDown: "-5%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #E0E0E0; background: #E0E0E0;",

                },
                {
                    id: 21113,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/20/1007_00.png",
                    nameProduct: "Balo Laptop đa năng ReeYee 15 RY1007/1008",
                    priceProduct: "990.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21114,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/19/mt3a2348-thinkpro.jpg",
                    nameProduct: "Balo Laptop Đa Năng Cao Cấp ReeYee RY-112B",
                    priceProduct: "1.090.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21117,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/7/1/A62-01.jpg",
                    nameProduct: "Balo Tomtoc Premium Waterproof Casual - A62",
                    priceProduct: "1.390.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21118,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/21/balo-tomtoc-urbanex-t65-t65s1d1-thinkpro-nicespace-xYt.jpg",
                    nameProduct: "Balo Tomtoc URBANEX T65 -  T65S1D1",
                    priceProduct: "2.290.000",
                    priceDown: "-12%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 21119,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/27/balo-tomtoc-roll-top-laptop-blackpack-travel-commute-casual-daypack-t61-thinkpro-nicespace.png",
                    nameProduct: "Balo Tomtoc Roll Top Laptop BlackPack Travel Commute Casual DayPack - T61",
                    priceProduct: "4.490.000",
                    priceDown: "-5%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                },
                {
                    id: 21120,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/27/balo-tomtoc-vintpack-lpatop-blackpack-ta1-thinkpro-nicespace.png",
                    nameProduct: "Balo Tomtoc Vintpack Laptop Blackpack - TA1",
                    priceProduct: "1.590.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #D2BC78; background: #D2BC78;",
                    styleProduct3: "border: 1px solid #ECECEC; background: #ECECEC;",
                },
            ],
        }
    }
}
</script>