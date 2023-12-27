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
            nameProduct: "Chuột",
            listNav: [
                { nameBranch: "Microsoft" }, { nameBranch: "Logitech" },  { nameBranch: "E-Dra" }, { nameBranch: "HyperWork" },
                { nameBranch: "Ugreen" }, { nameBranch: "Keychron" }, { nameBranch: "Monsgeek" }
            ],
            listPrice: [
                { price: "Dưới 200K" }, { price: "Từ 200K - 400K" }, { price: "Từ 400K - 600K" }, { price: "Từ 600K - 1 triệu" },
                { price: "Từ 1 - 2 triệu" }, { price: "Trên 2 triệu" }
            ],
        }
    }
}
</script>