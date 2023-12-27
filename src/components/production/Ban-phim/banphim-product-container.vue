<template>
    <BaseProductContainer :product-infor="productInfor"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '../base-product-container.vue';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            productInfor: [
                // inspiron 14 5430
                {
                    id: 20100,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/7/ban-phim-co-monsgeek-m1-aluminium-cnc-thinkpro-nicespace.png",
                    productName: "Bàn phím Cơ Monsgeek M1W Aluminium CNC",
                    productPrice: "1.990.000",
                    productDiscount: "-20%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    productColor3: "border: 1px solid #A020F0; background: #A020F0;",
                    productColor4: "border: 1px solid #625E5E; background: #625E5E;",
                },
                // có quà
                {
                    id: 20101,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/6/ban-phim-co-fl-esport-cmk75-thinkpro-nicespace.png",
                    productName: "Bàn Phím Cơ FL ESPORT CMK75",
                    productPrice: "2.179.000",
                    productDiscount: "-19%",
                    productColor: "border: 1px solid #1BB4E0; background: #1BB4E0;",
                    productColor2: "border: 1px solid #585252; background: #585252;",
                },
                // có quà
                {
                    id: 20102,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/3/KE12E0~1.JPG",
                    productName: "Bàn phím Keychron K3 v2",
                    productPrice: "1.690.000",
                    productDiscount: "-11%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 20103,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/7/7/Keychron-K8-Pro-01.png",
                    productName: "Bàn phím cơ Keychron K8 Pro QMK/VIA",
                    productPrice: "2.150.000",
                    productDiscount: "-14%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #4A4F94; background: #4A4F94;",
                    productColor3: "border: 1px solid #DADDE0; background: #FFFFFF;"

                },
                {
                    id: 20104,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/5/23/Z75_01.png",
                    productName: "Bàn phím cơ IQUNIX ZX75 Gravity Wave",
                    productPrice: "4.400.000",
                    productDiscount: "-6%",
                    productColor: "border: 1px solid #8D8D8D; background: #8D8D8D;"
                },
                // có quà
                {
                    id: 20105,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/6/7/NJ80-12.png",
                    productName: "Kit Bàn Phím Cơ Keydous NJ80 AP",
                    productPrice: "1.490.000",
                    productDiscount: "-29%",
                    productColor: "border: 1px solid #73BDEE; background: #73BDEE;"
                },
                // có quà
                {
                    id: 20106,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/7/19/GM780_06.jpg",
                    productName: "Bàn phím cơ Newmen GM780 - Nebula Gasket",
                    productPrice: "1.590.000",
                    productDiscount: "-47%",
                    productColor: "border: 1px solid #E6E6FA; background: #E6E6FA;"
                },
                // có quà
                {
                    id: 20107,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/4/22/Q75_01.jpg",
                    productName: "Bàn phím cơ FL Esport Q75 Azure Green - 3 Mode",
                    productPrice: "1.990.000",
                    productDiscount: "-43%",
                    productColor: "border: 1px solid #50806B; background: #50806B;"
                },
                {
                    id: 20108,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/7/ban-phim-co-cidoo-v75-aluminum-cnc-thinkpro-nicespace.png",
                    productName: "Bàn phím cơ CIDOO V75 Pro - Aluminum CNC",
                    productPrice: "2.790.000",
                    productDiscount: "-10%",
                    productColor: "border: 1px solid #E7E0A5; background: #E7E0A5;"
                },
                {
                    id: 20109,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/8/ban-phim-co-cidoo-v65-pro-aluminum-cnc-thinkpro-nicespace.png",
                    productName: "Bàn phím cơ CIDOO V65 v2 - Aluminum CNC",
                    productPrice: "2.490.000",
                    productDiscount: "-17%",
                    productColor: "border: 1px solid #E7E0A5; background: #E7E0A5;"
                },
                // có quà
                {
                    id: 20110,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/8/ban-phim-co-cidoo-v87-aluminum-cnc-thinkpro-nicespace-Sj3.png",
                    productName: "Bàn phím cơ CIDOO V87 Pro - Aluminum CNC",
                    productPrice: "2.890.000",
                    productDiscount: "-12%",
                    productColor: "border: 1px solid #E7E0A5; background: #E7E0A5;"
                },
                {
                    id: 20111,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/20/ban-phim-co-keydous-nj80-ap-night-smoke-thinkpro-nicespace-EPn.png",
                    productName: "Bàn Phím Cơ KeyDous NJ80 AP - Ninja Gradient",
                    productPrice: "2.490.000",
                    productDiscount: "-22%",
                    productColor: "border: 1px solid #545050; background: #545050;"
                },
                // có quà
                {
                    id: 20112,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/11/Keychron-Q1-Pro-QMK-VIA_01.png",
                    productName: "Bàn phím cơ không dây Keychron Q1 Pro QMK/VIA - Knob",
                    productPrice: "4.090.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #030303; background: #030303;",
                    productColor2: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                    productColor3: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20113,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/2/Keychron-K1-Pro-QMK-VIA-01.png",
                    productName: "Bàn phím cơ Keychron K1 Pro QMK/VIA",
                    productPrice: "2.290.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #ECECEC; background: #ECECEC;"
                },
                // có quà
                {
                    id: 20114,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/8/lmk81_02.png",
                    productName: "Bàn Phím Cơ Zuoya LMK81 Aluminium CNC VIA",
                    productPrice: "1.990.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                {
                    id: 20115,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/1/Keychron K7 Pro_01.png",
                    productName: "Bàn phím cơ Keychron K7 Pro QMK/VIA",
                    productPrice: "2.090.000",
                    productDiscount: "-19%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                // có quà
                {
                    id: 20116,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/15/Z75_09.png",
                    productName: "Bàn Phím Cơ IQUNIX ZX75 Camping",
                    productPrice: "4.850.000",
                    productDiscount: "-8%",
                    productColor: "border: 1px solid #9DC35D; background: #9DC35D;"
                },
                {
                    id: 20117,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/10/Keychron-K10-Pro-QMK-VIA-Wireless-01.png",
                    productName: "Bàn phím cơ Keychron K10 Pro QMK/VIA",
                    productPrice: "2.490.000",
                    productDiscount: "-17%",
                    productColor: "border: 1px solid #1E3568; background: #1E3568;"
                },
                // có quà
                {
                    id: 20118,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/10/Keychron-K4-Pro-QMK-VIA-Wireless-01.png",
                    productName: "Bàn phím cơ Keychron K4 Pro QMK/VIA",
                    productPrice: "2.490.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #4A4F94; background: #4A4F94;"
                },
                // có quà
                {
                    id: 20119,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/8/IMG_0888.JPG",
                    productName: "Bàn phím cơ Keydous NJ81 - Smoke",
                    productPrice: "2.100.000",
                    productDiscount: "-28%",
                    productColor: "border: 1px solid #545050; background: #545050;"
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>