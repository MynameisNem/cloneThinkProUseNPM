<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePageButton :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePageButton>
        <PhuKienSetupProductContainer></PhuKienSetupProductContainer>
    </main>
</template>

<script>
import BasePageButton from '../base-page-button.vue'
import PhuKienSetupProductContainer from './phukien-setup-product-container.vue'
export default {
    components: {
        BasePageButton,
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