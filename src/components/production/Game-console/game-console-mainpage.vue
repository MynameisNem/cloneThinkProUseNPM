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
                { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>