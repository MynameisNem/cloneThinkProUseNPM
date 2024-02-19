<template>
    <main class="page-promotion py-6 bg-[#F6F9FC]">
        <section class="container mr-auto ml-auto rounded-2xl overflow-hidden">
            <BasePageImg 
                :img-promotion="imgPromotion"
                :altImgPromotion="textHeadPromo"
                :textHeadPromo="textHeadPromo"
                :productPromo="counterProduct">
            </BasePageImg>
            <BaloAllProducts></BaloAllProducts>
        </section>
    </main>
</template>

<script>
import BasePageImg from '@/components/sharedVue/base-page/base-page-img.vue';
import BaloAllProducts from './balo-all-products';
import { balotuiData } from '@/data-js/balotui-data';
export default {
    components: {
        BasePageImg,
        BaloAllProducts
    },
    data() {
        return {
            imgPromotion: "https://images.thinkgroup.vn/unsafe/2400x640/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/banners/2023/3/19/Ảnh màn hình 2023-03-19 lúc 13.44.02.jpeg",
            textHeadPromo: "Xả Kho Balo,Túi - SIÊU SALE ĐÓN NĂM MỚI",
            selectedItem: null,
        }
    },
    computed: {
        counterProduct() {
            // Tính toán quantityProduct dựa trên dữ liệu từ mảng balotuiData
            const bag = balotuiData.filter(item => item.productName.includes("Túi"));
            const balo = balotuiData.filter(item => item.productName.includes("Balo"));
            const total = balotuiData.length;

            return [
                {
                    allProduct: "Tất cả",
                    quantityProduct: total.toString(),
                },
                {
                    allProduct: "Túi",
                    quantityProduct: bag.length.toString(),
                },
                {
                    allProduct: "Balo",
                    quantityProduct: balo.length.toString(),
                },
            ];
        }
    },
}
</script>