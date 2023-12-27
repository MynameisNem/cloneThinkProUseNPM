<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :items-branch="itemsBranch" :p-text="pText" :sort-button="sortButton"></BasePage>
        <GiaDoLaptop></GiaDoLaptop>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import GiaDoLaptop from './gia-do-laptop-product-container.vue'
export default {
    components: {
        BasePage,
        GiaDoLaptop
    },
    data() {
        return {
            pContent: "Giá Đỡ Laptop/Tablet",
            pText: "Giá Đỡ Laptop/Tablet là thành phần linh kiện điều hòa luồng gió, đưa nhiệt lượng thoát ra khỏi hộp máy nhanh hơn nhằm hạ nhiệt máy nhanh và cân bằng nhiệt độ hộp máy khi vận hành. Từ đó giúp cho máy hoạt động tốt hơn, nâng cao tính bền bỉ của hiệu năng",
            itemsBranch: [
                { nameBranch: "HyperWork" }, { nameBranch: "Cooler Master" }, { nameBranch: "NiceDesign" },
                { nameBranch: "Element" }, { nameBranch: "HYPER" }, { nameBranch: "Rain Design" }, { nameBranch: "mStand" }
            ],
            sortButton: [
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>