<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg
                :textHeadPromo="textHeadPromo"
                :product-promo="productPromo">
            </BasePageImg>
            <LaptopGiaReAllProducts></LaptopGiaReAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import LaptopGiaReAllProducts from './laptop-gia-re-all-products.vue';
export default {
    components: {
        BasePageImg,
        LaptopGiaReAllProducts
    },
    data() {
        return {            
            textHeadPromo: "Laptop Chính Hãng - Giá Rẻ Nhất Thị Trường",
            selectedItem: null,
            productPromo: [
                {
                    allProduct: "Tất cả",
                    quantityProduct: "11",
                },
                {
                    allProduct: "Laptop",
                    quantityProduct: "9",
                },
                {
                    allProduct: "Màn hình",
                    quantityProduct: "2",
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>