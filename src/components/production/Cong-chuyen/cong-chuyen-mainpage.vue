<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :items-branch="itemsBranch" :p-text="pText" :sort-button="sortButton"></BasePage>
        <CongChuyenProductContainer></CongChuyenProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import CongChuyenProductContainer from './cong-chuyen-product-container.vue'
export default {
    components: {
        BasePage,
        CongChuyenProductContainer
    },
    data() {
        return {
            pContent: "Cổng chuyển đổi",
            pText: "Cổng chuyển (hay còn gọi là cổng kết nối) là một cổng truyền thông được sử dụng để chuyển đổi tín hiệu từ một loại giao diện sang một loại giao diện khác. Các cổng chuyển thường được sử dụng trong các thiết bị điện tử như máy tính, laptop, máy chiếu...",
            itemsBranch: [
                { nameBranch: "Mazer" }, { nameBranch: "HYPER" }, { nameBranch: "Lenovo" }
            ],
            sortButton: [
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>