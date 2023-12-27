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
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>