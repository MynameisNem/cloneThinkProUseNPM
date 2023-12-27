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
                    id: 20500,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/15/lg-gram-view-2023-16mr70asda5-thinkpro.jpg",
                    productName: "LG Gram +View 2023 16MR70.ASDA5",
                    productPrice: "7.090.000",
                    productDiscount: "-28%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    productGift: "Quà tặng 450.000"
                },           
            ],
        }
    }
}
</script>

