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
            nameProduct: "Phụ kiện & Setup",
            listNav: [
                { nameBranch: "Pisen" }, { nameBranch: "INNOSTYLE" }, { nameBranch: "Keychron" }, { nameBranch: "HyperWork" }, 
                { nameBranch: "NiceDesign" }, { nameBranch: "Marshall" }, { nameBranch: "Herman Miller" }, { nameBranch: "Logitech" }, 
                { nameBranch: "Apple" }, { nameBranch: "UpGen" }, { nameBranch: "Dandihome" }, { nameBranch: "LDNIO" }, 
            ],
            listPrice: [
                { price: "Dưới 500K" }, { price: "Từ 500K - 1 triệu" }, { price: "Từ 1 - 1 triệu 500K" }, { price: "Từ 1 triệu 500K - 2 triệu" },
                { price: "Từ 2 - 2 triệu 500K" }, { price: "Từ 2 triệu 500K - 3 triệu" }, { price: "Trên 3 triệu" }
            ],
        }
    }
}
</script>