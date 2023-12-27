<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
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
            sortButton: [
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>