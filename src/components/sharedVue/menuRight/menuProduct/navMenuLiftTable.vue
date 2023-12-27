<template>
    <NavMenuRight :name-product="nameProduct" :list-price="listPrice"></NavMenuRight>
</template>

<script>
import NavMenuRight from '../navMenuRight.vue';
export default {
    components: {
        NavMenuRight
    },
    data() {
        return {
            nameProduct: "Bàn nâng hạ",
            listPrice: [
                { price: "Dưới 4 triệu" }, { price: "Từ 4 - 6 triệu" }, { price: "Từ 6 - 8 triệu" }, { price: "Từ 8 - 10 triệu" },
                { price: "Từ 10 - 12 triệu" }, { price: "Từ 12 - 15 triệu" }, { price: "Trên 15 triệu" }
            ],
        }
    }
}
</script>