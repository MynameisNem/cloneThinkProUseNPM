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
                { nameBranch: "Mazer" }, { nameBranch: "HYPER" }, { nameBranch: "Lenovo" }, { nameBranch: "Ugreen" }, 
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "Mazer" }, { name: "HYPER" }, { name: "Lenovo" }, { name: "Ugreen" },
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 5tr" }, { name: "Từ 5tr - 10tr" }, { name: "Từ 10tr - 15tr" }, { name: "Từ 15tr - 20tr" }, 
                        { name: "Từ 20tr - 25tr" }, { name: "Từ 25tr - 30tr" }, { name: "Trên 30tr" }
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Xám" }, { name: "Đen" }, { name: "Trắng" }
                    ] 
                },
            ],
        }
    }
}
</script>