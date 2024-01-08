<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <BanGheTreEmProductContainer></BanGheTreEmProductContainer>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import BanGheTreEmProductContainer from './ban-ghe-tre-em-product-container.vue'
export default {
    components: {
        BasePage,
        BanGheTreEmProductContainer
    },
    data() {
        return {
            pContent: "Bàn ghế trẻ em",
            pText: "Bàn ghế trẻ em đáp ứng những tiêu chuẩn khắt khe nhất cả về thiết kế cho tới chất lượng, sở hữu vẻ ngoài ấn tượng, đi kèm với những tính năng thông minh vượt trội như chống gù, chống cận; đây là một lựa chọn lý tưởng mà các bậc phụ huynh có thể lưu tâm",
            sortButton: [
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
                        { name: "Hồng" }, { name: "Xanh dương" }, { name: "Xám" }, 
                    ]
                },
            ],
        }
    }
}
</script>