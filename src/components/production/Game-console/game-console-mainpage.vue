<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <GameConsoleProductContainer></GameConsoleProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import GameConsoleProductContainer from './game-console-product-container.vue'
export default {
    components: {
        BasePage,
        GameConsoleProductContainer
    },
    data() {
        return {
            pContent: "VR/ Game Console",
            pText: "VR/ Game Console",
            sortButton: [
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 300K" }, { name: "Từ 300K - 500K" }, { name: "Từ 500K - 800K" }, { name: "Từ 800K - 1 triệu" }, 
                        { name: "Từ 1 triệu - 2tr" }, { name: "Từ 2tr - 3tr" }, { name: "Trên 3tr" } 
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Đỏ" }, { name: "Xanh dương" }, { name: "Vàng" }, { name: "Xám" }, { name: "Tím" }, 
                        { name: "Xanh lá" }, { name: "Trắng" }, { name: "Hồng" }, { name: "Đen" } 
                    ]
                },
            ],
        }
    }
}
</script>