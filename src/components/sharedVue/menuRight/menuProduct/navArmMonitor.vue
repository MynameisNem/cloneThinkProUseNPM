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
            nameProduct: "Arm màn hình",
            listNav: [
                { nameBranch: "HyperWork" }, { nameBranch: "Humanmotion" },
            ],
            listPrice: [
                { price: "Dưới 700K" }, { price: "Từ 700K - 1 triệu" }, { price: "Từ 1 - 1 triệu 300" }, { price: "Từ 1 triệu 300 - 1 triệu 600" },
                { price: "Từ 1 triệu 600 - 2 triệu" }, { price: "Trên 2 triệu" }
            ],
        }
    }
}
</script>