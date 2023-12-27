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
            nameProduct: "Âm thanh",
            listPrice: [
                { price: "Dưới 3 triệu" }, { price: "Từ 3 - 6 triệu" }, { price: "Từ 6 - 9 triệu" }, { price: "Từ 9 - 12 triệu" },
                { price: "Từ 12 - 15 triệu" }, { price: "Trên 15 triệu" }
            ],
        }
    }
}
</script>