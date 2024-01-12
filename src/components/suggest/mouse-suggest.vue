<template>
    <BaseProductContainer :product-infor="productInfor"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            productInfor: [
                // inspiron 14 5430
                {
                    id: 20400,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2020/10/2/mxa3bl_00.jpg",
                    productName: "Chuột Logitech MX Anywhere 3S",
                    productPrice: "1.590.000",
                    productDiscount: "-24%",
                    productColor: "border: 1px solid #7D7D7D; background: #7D7D7D;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                // có quà
                {
                    id: 20401,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/24/chuot-logitech-mx-anywhere-2s-thinkpro-nicespace.png",
                    productName: "Chuột Logitech MX Anywhere 2S",
                    productPrice: "1.190.000",
                    productDiscount: "-20%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20402,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/11/HPW-MS01-01.png",
                    productName: "Chuột không dây HyperWork Silentium",
                    productPrice: "440.000",
                    productDiscount: "-25%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                {
                    id: 20403,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/6/29/logitech_mx_master_3S_01.jpg",
                    productName: "Chuột Logitech MX Master 3S",
                    productPrice: "2.290.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20404,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/27/chuot-khong-day-keychron-m3-thinkpro-nicespace-gjt.png",
                    productName: "Chuột không dây Keychron M3",
                    productPrice: "1.150.000",
                    productDiscount: "-23%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;"
                },
                // có quà
                {
                    id: 20405,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/14/chuot-khong-day-e-dra-em605w-ergonomic-thinkpro.png",
                    productName: "Chuột Không Dây E-DRA EM605W - Ergonomic",
                    productPrice: "299.000",
                    productDiscount: "-25%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 20406,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/16/chuot-gaming-khong-day-hyperwork-helios-thinkpro-nicespace.png",
                    productName: "Chuột Gaming Không Dây HyperWork Helios",
                    productPrice: "1.590.000",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                // có quà
                {
                    id: 20407,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/27/chuot-khong-day-keychron-m1-thinkpro-nicespace-q2n.png",
                    productName: "Chuột không dây Keychron M1",
                    productPrice: "1.190.000",
                    productDiscount: "-20%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },
                {
                    id: 20408,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/21/chuot-khong-day-monsgeek-d1-nicespace-thinkpro.png",
                    productName: "Chuột không dây Monsgeek D1",
                    productPrice: "189.000",
                    productDiscount: "-37%",
                    productColor: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                    productColor3: "border: 1px solid #FFC0CB; background: #FFC0CB;",
                },
                {
                    id: 20409,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/30/a1.png",
                    productName: "Chuột Gaming E-DRA EM6102",
                    productPrice: "209.000",
                    productColor: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 20410,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/28/upgreen-thinkpro-1.jpeg",
                    productName: "Chuột không dây  Ugreen Silent",
                    productPrice: "199.000",
                    productDiscount: "-49%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20411,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/5/13/518Ke3Rkz2L.jpg",
                    productName: "Chuột Microsoft Modern Mouse (WS3)",
                    productPrice: "849.000",
                    productDiscount: "-35%",
                    productColor: "border: 1px solid #8D8D8D; background: #8D8D8D;"
                },
                {
                    id: 20412,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/2/8/M650_01.png",
                    productName: "Chuột không dây Logitech SIGNATURE M650",
                    productPrice: "650.000",
                    productDiscount: "-23%",
                    productColor: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    productColor2: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20413,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/10/chuot-e-dra-em604w-thinkpro-01.jpeg",
                    productName: "Chuột E-DRA EM604W",
                    productPrice: "109.000",
                    productDiscount: "-27%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20414,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/21/1850black_00.png",
                    productName: "Chuột không dây Microsoft 1850",
                    productPrice: "209.000",
                    productDiscount: "-40%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20415,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/6/2/LifVertical-1.jpg",
                    productName: "Chuột Công Thái Học LIFT VERTICAL",
                    productPrice: "1.390.000",
                    productDiscount: "-13%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
            ],
        }
    }
}
</script>

