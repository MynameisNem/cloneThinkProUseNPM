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
            nameProduct: "Bộ bàn",
            listNav: [
                { nameBranch: "NiceDesign" },
            ],
            listPrice: [
                { price: "Dưới 5 triệu" }, { price: "Từ 5 - 10 triệu" }, { price: "Từ 10 - 15 triệu" }, { price: "Từ 15 - 20 triệu" },
                { price: "Từ 20 - 25 triệu" }, { price: "Từ 25 - 30 triệu" }, { price: "Trên 30 triệu" }
            ],
        }
    }
}
</script>