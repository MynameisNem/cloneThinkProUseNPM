<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <LaptopProductContainer></LaptopProductContainer>
    </main>
</template>

<script>
import LaptopProductContainer from './laptop-product-container.vue'
import BasePage from '../base-page.vue';
export default {
    components: {
        LaptopProductContainer,
        BasePage
    },
    data() {
        return {
            pContent: "Laptop",
            pText: "Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.",
            itemsBranch: [
                { nameBranch: "Dell" }, { nameBranch: "Lenovo" }, { nameBranch: "LG" }, { nameBranch: "Microsoft" }, { nameBranch: "Asus" },
                { nameBranch: "HP" }, { nameBranch: "Acer" }, { nameBranch: "GIGABYTE" }, { nameBranch: "Apple" }, { nameBranch: "VAIO" },
                { nameBranch: "MSI" },
            ],
            sortButton: [
                { nameButton: "Thương hiệu" }, { nameButton: "Nhu cầu" }, { nameButton: "Khoảng giá" },
                { nameButton: "Nguồn hàng" }, { nameButton: "Tình trạng" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>

<style scoped>
</style>