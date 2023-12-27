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
            nameProduct: "Ghế công thái học",
            listNav: [
                { nameBranch: "GT Chair" }, { nameBranch: "SIHOO" }, { nameBranch: "Herman Miller" }, { nameBranch: "VChair" }, { nameBranch: "MerryFair" }, { nameBranch: "Ergo Home" },
                { nameBranch: "Manson" }, { nameBranch: "E-Dra" }, { nameBranch: "Ergonomic Group" }
            ],
            listPrice: [
                { price: "Dưới 3 triệu" }, { price: "Từ 3 - 4 triệu 500" }, { price: "Từ 4 triệu 500 - 6 triệu" }, { price: "Từ 6 - 8 triệu" },
                { price: "Từ 8 - 10 triệu" }, { price: "Từ 10 - 14 triệu" }, { price: "Trên 14 triệu" }
            ],
        }
    }
}
</script>