<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo">
            </BasePageImg>
            <LaptopAllProducts></LaptopAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import LaptopAllProducts from './laptop-all-products.vue';
export default {
    components: {
        BasePageImg,
        LaptopAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/12/27/frame-95567555-thinkpro.jpeg",
            textHeadPromo: "SALE TƯNG BỪNG - MỪNG NĂM MỚI",
            selectedItem: null,
        }
    },
}
</script>