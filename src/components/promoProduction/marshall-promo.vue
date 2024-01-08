<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo"
                :product-promo="productPromo">
            </BasePageImg>
            <component :is="selectedItemComponent"></component>
        </section>
    </main>
</template>

<script>
import BasePageImg from '../sharedVue/base-page/base-page-img.vue';
import MarshallSpeaker from './marshall-speaker.vue'
export default {
    components: {
        BasePageImg,
        MarshallSpeaker
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
            // tabSelected: false
        }
    },
    methods:  {
        selectItem(item) {
            this.selectedItem = item;
        },
        setDefaultSelectedItem() {
            if(!this.selectedItem && this.productPromo.length > 0) {
                this.selectedItem = this.productPromo[0];
            }
        }
    },
    mounted() {
        this.setDefaultSelectedItem();
    },
    computed: {
        selectedItemComponent() {
            const promoMapping = {
                'Loa': MarshallSpeaker,
            };
            if (this.selectedItem) {
                const selectedProduct = this.selectedItem;
                return promoMapping[selectedProduct] || MarshallSpeaker;
            }
            return MarshallSpeaker
        }
    }
}
</script>

<style scoped>
</style>