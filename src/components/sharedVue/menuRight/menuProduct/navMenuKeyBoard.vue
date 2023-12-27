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
            nameProduct: "Bàn phím",
            listNav: [
                { nameBranch: "Dell" }, { nameBranch: "Logitech" }, { nameBranch: "Keychron" }, { nameBranch: "Keydous" }, { nameBranch: "FL-ESPORT" }, { nameBranch: "Vaio" },
                { nameBranch: "IQUINIX" }, { nameBranch: "Zuoya" }, { nameBranch: "Darmonshark" }, { nameBranch: "XINMENG" }, { nameBranch: "Lofree" },
                { nameBranch: "Microsoft" }, { nameBranch: "Newmen" }, { nameBranch: "Akko" }, { nameBranch: "Mistel" }, { nameBranch: "HyperWork" },
                { nameBranch: "Monsgeek" }, { nameBranch: "James Donkey" }, { nameBranch: "CIDOO" }, { nameBranch: "WEIKAV" }, { nameBranch: "NuPhy" },
            ],
            listPrice: [
                { price: "Dưới 1 triệu" }, { price: "Từ 1 - 2 triệu" }, { price: "Từ 2 - 3 triệu" }, { price: "Từ 3 - 4 triệu" },
                { price: "Trên 4 triệu" }
            ],
        }
    }
}
</script>