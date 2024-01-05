<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <ChairProductContainer></ChairProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import ChairProductContainer from './chair-product-container'
export default {
    components: {
        BasePage,
        ChairProductContainer
    },
    data() {
        return {
            pContent: "Ghế công thái học",
            pText: "Ghế công thái học là mẫu ghế được thiết kế với hình dáng và các tính năng đặc biệt, giúp giảm thiểu áp lực lên cơ thể, giảm đau lưng và cổ và giúp người sử dụng giữ được tư thế ngồi đúng để tránh những tổn thương do ngồi lâu.",
            itemsBranch: [
                { nameBranch: "GT Chair" }, { nameBranch: "SIHOO" }, { nameBranch: "Herman Miller" }, { nameBranch: "VChair" }, { nameBranch: "MerryFair" },
                { nameBranch: "Manson" }, { nameBranch: "Ergo Home" }, { nameBranch: "E-Dra" }, { nameBranch: "Ergonomic Group" },
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "GT Chair" }, { name: "SIHOO" }, { name: "Herman Miller" }, { name: "VChair" }, { name: "MerryFair" },
                        { name: "Manson" }, { name: "Ergo Home" }, { name: "E-Dra" }, { name: "Ergonomic Group" },
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 3tr" }, { name: "Từ 3tr - 4.5tr" }, { name: "Từ 4.5tr - 6tr" }, 
                        { name: "Từ 6tr - 8tr" }, { name: "Từ 8tr - 10tr" }, { name: "Từ 10tr - 14tr" }, { name: "Trên 14tr" }, 
                    ]
                },
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Xám" }, { name: "Đen" }, { name: "Trắng" }, 
                        { name: "Xanh dương" }, { name: "Hồng" }, { name: "Đỏ" }, 
                    ] 
                },
            ],
        }
    }
}
</script>