<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <NoiThatProductContainer></NoiThatProductContainer>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import NoiThatProductContainer from './noi-that-product-container'
export default {
    components: {
        BasePage,
        NoiThatProductContainer
    },
    data() {
        return {
            pContent: "Nội thất",
            pText: "Nội thất hiểu đơn giản là những vật dụng, đồ vật được bố trí trong một không gian nhằm phục vụ đa nhu cầu của người dùng như: lưu trữ, giải trí, học tập, làm việc, ...",
            sortButton: [ 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 5tr" }, { name: "Từ 5tr - 10tr" }, { name: "Từ 10tr - 15tr" }, { name: "Từ 15tr - 20tr" }, 
                        { name: "Từ 20tr - 25tr" }, { name: "Từ 25tr - 30tr" }, { name: "Trên 30tr" }
                    ]
                }
            ],
        }
    }
}
</script>