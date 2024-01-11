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
                    id: 20800,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/4/26/airtag-0jpg",
                    nameProduct: "Thiết bị theo dõi thông minh Apple AirTag (Chính hãng)",
                    priceProduct: "770.000",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                // có quà
                {
                    id: 20801,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/22/ke-tay-ban-phim-keychron-thinkpro-1.png",
                    nameProduct: "Kê tay bàn phím Keychron",
                    priceProduct: "380.000",
                    styleProduct: "border: 1px solid #664228; background: #664228;",
                },
                // có quà
                {
                    id: 20802,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/6/ke-tay-go-hyperwork-thinkpro-04.png",
                    nameProduct: "Kê tay gỗ Óc Chó HyperWork",
                    priceProduct: "270.000",
                    styleProduct: "border: 1px solid #5F3203; background: #5F3203;"
                },
                {
                    id: 20803,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/25/tua-dau-ghe-herman-miller-aeron-atlas-thinkpro-nicespace-IP8.png",
                    nameProduct: "Tựa Đầu Ghế Herman Miller Aeron Atlas",
                    priceProduct: "5.990.000",
                    styleProduct: "border: 1px solid #201F1F; background: #201F1F;",
                    styleProduct2: "border: 1px solid #716D6D; background: #716D6D;",
                    styleProduct3: "border: 1px solid #DADDE0; background: #F2F2F2;",
                },
                {
                    id: 20804,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/22/jack-3.5mm-marshall-thinkpro-0cover.jpg",
                    nameProduct: "Jack 3.5mm Marshall",
                    priceProduct: "250.000",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 20805,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/ke-man-hinh-the-mil-by-nicedesign-thinkpro-nicespace-a5i.png",
                    nameProduct: "Kệ Màn Hình The Mil - By NiceDesign",
                    priceProduct: "1.690.000",
                    productDiscount: "-54%",
                    styleProduct: "border: 1px solid #DD9453; background: #DD9453;",
                    styleProduct2: "border: 1px solid #421515; background: #421515;",
                },
                // có quà
                {
                    id: 20806,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/15/o-cam-dien-da-nang-ldnio-thinkpro-nicespace.png",
                    nameProduct: "Ổ cắm điện đa năng LDNIO",
                    priceProduct: "299.000",
                    productDiscount: "-14%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                // có quà
                {
                    id: 20807,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/23/bo-ve-sinh-hyper-cleaning-thinkpro-nicespace-p99.jpg",
                    nameProduct: "Bộ vệ sinh Hyper Cleaning",
                    priceProduct: "99.000",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0;"
                },
                {
                    id: 20808,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/13/den-de-ban-bao-ve-mat-upgen-scorpio-thinkpro-nicespace-nb1.png",
                    nameProduct: "Đèn Để Bàn Bảo Vệ Mắt UPGen Scorpio",
                    priceProduct: "1.490.000",
                    productDiscount: "-12%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                {
                    id: 20809,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/2/17/logitech-mouse-pad-studio-series-corner-view-blue-grey 2.png",
                    nameProduct: "Bàn di chuột Logitech Studio",
                    priceProduct: "189.000",
                    productDiscount: "-24%",
                    styleProduct: "border: 1px solid #FFC0CB; background: #FFC0CB;"
                },
                {
                    id: 20810,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/18/ban-di-chuot-gaming-mouse-pad-hyperwork-fable-thinkpro-nicespace-H4o.png",
                    nameProduct: "Bàn di chuột Gaming Mouse Pad HyperWork FABLE",
                    priceProduct: "299.000",
                    productDiscount: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
            ],
        }
    }
}
</script>