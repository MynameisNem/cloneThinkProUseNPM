<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <PhuKienSetupProductContainer></PhuKienSetupProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import PhuKienSetupProductContainer from './phukien-setup-product-container.vue'
export default {
    components: {
        BasePage,
        PhuKienSetupProductContainer
    },
    data() {
        return {
            pContent: "Phụ kiện & Setup",
            pText: "Phụ kiện & Setup bao gồm nhiều sản phẩm khác nhau, phục vụ đa nhu cầu của người dùng. Một số phụ kiện đáng chú ý như: kê tay bàn phím, ốp lưng, dán màn hình, phủ phím, ...",
            itemsBranch: [
                { nameBranch: "HyperWork" }, { nameBranch: "NiceDesign" },  { nameBranch: "UpGen" }, { nameBranch: "INNOSTYLE" }, { nameBranch: "TheLeaf" },
                { nameBranch: "Dandihome" }, { nameBranch: "Pisen" }, { nameBranch: "Keychron" }, { nameBranch: "Marshall" }, { nameBranch: "LANGBIANG" },
                { nameBranch: "Herman Miller" }, { nameBranch: "Logitech" }, { nameBranch: "Apple" }, { nameBranch: "Watch" }, { nameBranch: "LDNIO" },
                { nameBranch: "Element" },
            ],
            sortButton: [
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>