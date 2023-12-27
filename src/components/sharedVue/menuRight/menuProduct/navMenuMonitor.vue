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
            nameProduct: "Màn hình",
            listNav: [
                { nameBranch: "LG" }
            ],
            listPrice: [
                { price: "Dưới 2 triệu" }, { price: "Từ 2 - 4 triệu" }, { price: "Từ 4 - 6 triệu" }, { price: "Từ 6 - 8 triệu" },
                { price: "Từ 8 - 10 triệu" }, { price: "Trên 10 triệu" }
            ],
        }
    }
}
</script>