<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo"
                :product-promo="productPromo">
            </BasePageImg>
            <MarshallAllProducts></MarshallAllProducts>
            <!-- <component :is="selectedItemComponent" :selected-item="selectedItem"></component> -->
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import MarshallAllProducts from '../Marshall/marshall-all-products.vue';
// import MarshallHeadphone from './marshall-headphone.vue';
export default {
    components: {
        BasePageImg,
        MarshallAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/5/30/untitled-design-fgf-thinkpro.png",
            textHeadPromo: "MARSHALL SALE TO - LO CHI VỀ GIÁ",
            productPromo: [
                {
                    allProduct: "Tất cả",
                    quantityProduct: "13",
                },
                {
                    allProduct: "Tai nghe",
                    quantityProduct: "2",
                },
                {
                    allProduct: "Loa",
                    quantityProduct: "11",
                },
            ],
            selectedItem: null,
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
    },
    // computed: {
    //     selectedItemComponent() {
    //         const productPromoMapping = {
    //             'Tất cả': MarshallAllProducts,
    //             'Tai nghe': MarshallHeadphone
    //         };
    //         if (this.selectedItem) {
    //             const selectedProduct = this.selectedItem.allProduct
    //             return productPromoMapping[selectedProduct] || MarshallAllProducts
    //         }
    //         return MarshallAllProducts
    //     }
    // } 
}
</script>

<style scoped>
</style>