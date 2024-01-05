<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <ManHinhProductContainer></ManHinhProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import ManHinhProductContainer from './man-hinh-product-container.vue'
export default {
    components: {
        BasePage,
        ManHinhProductContainer
    },
    data() {
        return {
            pContent: "Màn hình",
            pText: "Màn hình máy tính (Computer display, Visual display unit hay Monitor) là thiết bị điện tử dùng để kết nối với máy tính nhằm mục đích hiển thị và phục vụ cho quá trình giao tiếp giữa người sử dụng với máy tính.",
            itemsBranch: [
                { nameBranch: "LG" }, { nameBranch: "MSI" }, 
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "LG" }, { name: "MSI" }, 
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 2tr" }, { name: "Từ 2tr - 4tr" }, { name: "Từ 4tr - 6tr" }, 
                        { name: "Từ 6tr - 8tr" }, { name: "Từ 8tr - 10tr" }, { name: "Trên 10tr" }, 
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Đen" }, { name: "Xám" }, { name: "Trắng" }, { name: "Xanh dương" }, { name: "Xanh lá" }, 
                    ]
                },
            ],
        }
    }
}
</script>