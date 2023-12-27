<template>
    <NavMenuRight :name-product="nameProduct" :list-nav="listNav" :list-price="listPrice"></NavMenuRight>
</template>

<script>
import NavMenuRight from '../navMenuRight.vue';
export default {
    components: {
        NavMenuRight
    },
    data() {
        return {
            nameProduct: "Balo, Túi",
            listPrice: [
                { price: "Dưới 300K" }, { price: "Từ 300K - 500K" }, { price: "Từ 500K - 800K" }, { price: "Từ 800K - 1 triệu" },
                { price: "Từ 1 - 2 triệu" }, { price: "Từ 2 - 3 triệu" }, { price: "Trên 3 triệu" }
            ],
        }
    }
}
</script>