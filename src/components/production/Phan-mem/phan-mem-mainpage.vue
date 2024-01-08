<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <PhanMemProductContainer></PhanMemProductContainer>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import PhanMemProductContainer from './phan-mem-product-container.vue'
export default {
    components: {
        BasePage,
        PhanMemProductContainer
    },
    data() {
        return {
            pContent: "Phần mềm",
            pText: "Microsoft là một công ty sản xuất phần mềm lớn nhất thế giới, có trụ sở chính tại Mỹ. Các sản phẩm phần mềm của Microsoft bao gồm hệ điều hành Windows, các ứng dụng văn phòng như Microsoft Office (Word, Excel, PowerPoint, Outlook) và các sản phẩm khác",
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
                        { name: "Trắng" }, { name: "Xám" }
                    ]
                },
            ],
        }
    }
}
</script>