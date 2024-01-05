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
                { nameBranch: "Element" }, { nameBranch: "Intel" },
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "HyperWork" }, { name: "NiceDesign" },  { name: "UpGen" }, { name: "INNOSTYLE" }, { name: "TheLeaf" },
                        { name: "Dandihome" }, { name: "Pisen" }, { name: "Keychron" }, { name: "Marshall" }, { name: "LANGBIANG" },
                        { name: "Herman Miller" }, { name: "Logitech" }, { name: "Apple" }, { name: "Watch" }, { name: "LDNIO" },
                        { name: "Element" }, { name: "Intel" },
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 500K" }, { name: "Từ 500K - 1 triệu" },  { name: "Từ 1 triệu - 1.5tr" }, { name: "Từ 1.5tr - 2tr" },
                        { name: "Từ 2tr - 2.5tr" }, { name: "Từ 2.5tr - 3tr" }, { name: "Trên 3tr" },
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Đỏ" }, { name: "Xám" },  { name: "Hồng" }, { name: "Trắng" }, { name: "Đen" },
                        { name: "Xanh dương" }, { name: "Vàng" }, { name: "Tím" }, { name: "Xanh lá" }, { name: "Cam" },
                    ]
                },
            ],
        }
    }
}
</script>