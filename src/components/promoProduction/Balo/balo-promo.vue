<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo"
                :productPromo="productPromo">
            </BasePageImg>
            <BaloAllProducts></BaloAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import BaloAllProducts from './balo-all-products';
export default {
    components: {
        BasePageImg,
        BaloAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/3/19/Ảnh màn hình 2023-03-19 lúc 13.44.02.jpeg",
            textHeadPromo: "Xả Kho Balo,Túi - SIÊU SALE ĐÓN NĂM MỚI",
            productPromo: [
                {
                    allProduct: "Tất cả",
                    quantityProduct: "39",
                },
                {
                    allProduct: "Túi",
                    quantityProduct: "18",
                },
                {
                    allProduct: "Balo",
                    quantityProduct: "20",
                },
            ],
            selectedItem: null,
        }
    },
}
</script>

<style scoped>
</style>