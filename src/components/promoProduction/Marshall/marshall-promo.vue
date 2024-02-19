<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo"
                :product-promo="counterProduct">
            </BasePageImg>
            <MarshallAllProducts></MarshallAllProducts>
            <!-- <component :is="selectedItemComponent" :selected-item="selectedItem"></component> -->
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import MarshallAllProducts from '../Marshall/marshall-all-products.vue';
import { speakerData } from '@/data-js/speaker-data.js';
export default {
    components: {
        BasePageImg,
        MarshallAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/5/30/untitled-design-fgf-thinkpro.png",
            textHeadPromo: "MARSHALL SALE TO - LO CHI VỀ GIÁ",
            selectedItem: null,
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
    },
    computed: {
        counterProduct() {
            // Lọc sản phẩm có productName chứa "Marshall"
            const allMarshall = speakerData.filter(item => item.productName.includes("Marshall"));

            // Lọc sản phẩm có "Loa Marshall"
            const loaMarshall = allMarshall.filter(item => item.productName.includes("Loa Marshall"));

            // Lọc sản phẩm có "Tai nghe"
            const taiNgheMarshall = allMarshall.filter(item => item.productName.includes("Tai nghe"));
            
            // Đếm số lượng sản phẩm sau khi lọc
            const totalMarshallProducts = allMarshall.length;
            const totalLoaMarshallProducts = loaMarshall.length;
            const totalTaiNgheProducts = taiNgheMarshall.length;

            return [
                {
                    allProduct: "Tất cả",
                    quantityProduct: totalMarshallProducts.toString(),
                },
                {
                    allProduct: "Tai nghe",
                    quantityProduct: totalTaiNgheProducts.toString(),
                },
                {
                    allProduct: "Loa",
                    quantityProduct: totalLoaMarshallProducts.toString(),
                },
            ];
        }
    },
}
</script>

<style scoped>
</style>