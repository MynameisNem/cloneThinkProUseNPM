<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo">
            </BasePageImg>
            <SoftwareAllProducts></SoftwareAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import SoftwareAllProducts from './software-all-products';
export default {
    components: {
        BasePageImg,
        SoftwareAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/11/11/2400x640-1-thinkpro.jpg",
            textHeadPromo: "FLASH SALE - ĐỘC QUYỀN MICROSOFT",
            selectedItem: null,
        }
    },
}
</script>

<style scoped>
</style>