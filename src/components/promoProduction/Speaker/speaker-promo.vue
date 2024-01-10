<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg :textHeadPromo="textHeadPromo">
            </BasePageImg>
            <SpeakerAllProducts></SpeakerAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import SpeakerAllProducts from './speaker-all-products';
export default {
    components: {
        BasePageImg,
        SpeakerAllProducts
    },
    data() {
        return {            
            textHeadPromo: "ÂM THANH ĐỈNH CAO - SIÊU SALE NĂM MỚI",
        }
    },
}
</script>

<style scoped>
</style>