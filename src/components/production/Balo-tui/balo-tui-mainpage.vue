<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage 
            :p-content="pContent" 
            :p-text="pText"
            :sort-button="sortButton">
        </BasePage>
        <BaloTuiProductContainer></BaloTuiProductContainer>
    </main>
</template>

<script>
import BaloTuiProductContainer from './balo-tui-product-container.vue'
import BasePage from '../base-page.vue';
export default {
    components: {
        BaloTuiProductContainer,
        BasePage
    },
    data() {
        return {
            pContent: "Balo, Túi",
            pText: "Balo là sản phẩm thường được sử dụng để miêu tả một loại túi đeo vai hai quai và được sử dụng để đựng đồ khi đi học, đi du lịch hoặc đi làm. Túi xách là sản phẩm thường được sử dụng để đựng laptop, giúp người dùng có thể dễ dàng mang vác và bảo vệ máy.",
            sortButton: [
                { nameButton: "Khoảng giá" },
            ],
        }
    },
}
</script>

<style scoped>
</style>