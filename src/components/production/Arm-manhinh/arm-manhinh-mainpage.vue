<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <ArmManHinhProductContainer></ArmManHinhProductContainer>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import ArmManHinhProductContainer from './arm-manhinh-product-container.vue'
export default {
    components: {
        BasePage,
        ArmManHinhProductContainer
    },
    data() {
        return {
            pContent: "Arm màn hình",
            pText: "Arm màn hình là một “tay đỡ” để giữ màn hình máy tính ở vị trí mong muốn. Các loại Arm này thường được thiết kế giúp người dùng điều chỉnh độ cao, góc độ và khoảng cách giữa màn hình và mắt, nhằm tạo ra vị trí làm việc thoải mái và thuận tiện hơn.",
            itemsBranch: [
                { nameBranch: "Humanmotion" }, { nameBranch: "HyperWork" }
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "HyperWork" }, { name: "Humanmotion" }, 
                    ]
                }, 
                {
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 700K" }, { name: "Từ 700K - 1 triệu" }, { name: "Từ 1 triệu - 1.3tr" }, 
                        { name: "Từ 1.3tr - 1.6tr" }, { name: "Từ 1.6tr - 2tr" }, { name: "Trên 2tr" }, 
                    ]
                },
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Xám" }, { name: "Trắng" }, { name: "Đen" },
                    ]
                },
            ],
        }
    }
}
</script>