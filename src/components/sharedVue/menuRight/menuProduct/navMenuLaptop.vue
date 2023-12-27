<template>
    <NavMenuRight :name-product="nameProduct" :list-nav="listNav" :list-price="listPrice" :list-require="listRequire"></NavMenuRight>
</template>

<script>
import NavMenuRight from '../navMenuRight.vue';
export default {
    components: {
        NavMenuRight
    },
    data() {
        return {
            nameProduct: "Laptop",
            listNav: [
            { nameBranch: "Dell" }, { nameBranch: "Lenovo" }, { nameBranch: "Apple" }, { nameBranch: "Acer" }, { nameBranch: "MSI" }, { nameBranch: "Vaio" },
            { nameBranch: "HP" }, { nameBranch: "Microsoft" }, { nameBranch: "Asus" }, { nameBranch: "LG" }, { nameBranch: "Gigabyte" }
            ],
            // Dữ liệu vòng for của khoảng giá laptop trong phần danh mục menu right
            listPrice: [
                { price: "Dưới 10 triệu" }, { price: "Từ 10 - 15 triệu" }, { price: "Từ 15 - 20 triệu" }, { price: "Từ 20 - 25 triệu" },
                { price: "Từ 25 - 30 triệu" }, { price: "Từ 30 - 40 triệu" }, { price: "Trên 40 triệu" }
            ],
            // Dữ liệu vòng for của nhu cầu laptop trong phần danh mục menu right
            listRequire: [
                { require: "Văn phòng, học tập" }, { require: "2D Design" }, { require: "Quay dựng video" },
                { require: "3D Design" }, { require: "Gaming" }, { require: "Lập trình" },
            ],
        }
    }
}
</script>