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
                    id: 20900,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/5/27/hyperstand-grey-0jpg",
                    productName: "Giá đỡ tản nhiệt HyperStand cho laptop HTU6",
                    productPrice: "690.000",
                    productDiscount: "-12%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;"
                },
                // có quà
                {
                    id: 20901,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/4/4/ergostandlite-0jpg",
                    productName: "Đế tản nhiệt Cooler Master Notepal Ergostand Lite",
                    productPrice: "690.000",
                    productColor: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20902,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/1/18/mTower_00.png",
                    productName: "Giá đỡ tản nhiệt Rain Design mTower",
                    productPrice: "890.000",
                    productDiscount: "-31%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;"
                },
                {
                    id: 20903,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/9/gia-do-laptop-stand-folding-lp01-thinkpro-nicespace.png",
                    productName: "Giá đỡ Laptop Stand Folding - LP01",
                    productPrice: "149.000",
                    productDiscount: "-42%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;"
                },
                {
                    id: 20904,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/gia-do-laptop-dieu-chinh-do-cao-risepro-thinkpro-nicespace-OIw.jpg",
                    productName: "Giá Đỡ Laptop Điều Chỉnh Độ Cao Rise Pro",
                    productPrice: "399.000",
                    productDiscount: "-33%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;"
                },
                // có quà
                {
                    id: 20905,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/4/4/cmc3-0jpg",
                    productName: "Đế tản nhiệt Notepal Cooler Master C3",
                    productPrice: "260.000",
                    productColor: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20906,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/24/gia-djo-djien-thoaitablet-dje-xoay-360-djo-hyperwork-t3-hyperwork-1.png",
                    productName: "Giá đỡ điện thoại/tablet đế xoay 360 độ HyperWork T3",
                    productPrice: "349.000",
                    productDiscount: "-10%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20907,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/8/23/Ảnh chụp Màn hình 2022-08-23 lúc 14.51.54.png",
                    productName: "Giá đỡ điện thoại/tablet HyperWork M1",
                    productPrice: "259.000",
                    productColor: "border: 1px solid #7F7B7B; background: #7F7B7B;",
                    productColor2: "border: 1px solid #7F7B7B; background: #7F7B7B;",
                },
                {
                    id: 20908,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/8/23/Ảnh chụp Màn hình 2022-08-23 lúc 14.57.27.png",
                    productName: "Giá đỡ laptop HyperWork L1",
                    productPrice: "499.000",
                    productDiscount: "-4%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                },
            ],
        }
    },    
}
</script>

<style scoped></style>