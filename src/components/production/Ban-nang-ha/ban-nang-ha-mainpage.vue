<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <BanNangHaProductContainer></BanNangHaProductContainer>
    </main>
</template>

<script>
import BasePage from '../base-page.vue'
import BanNangHaProductContainer from './ban-nang-ha-product-container.vue'
export default {
    components: {
        BasePage,
        BanNangHaProductContainer
    },
    data() {
        return {
            pContent: "Bàn nâng hạ",
            pText: "Bàn nâng hạ về cơ bản vẫn là bàn làm việc bình thường, tuy nhiên nó có cấu tạo đặc biệt ở hai chân bàn với các thanh khớp nối lồng vào nhau. Nhờ cấu trúc đặc biệt kết hợp động cơ nâng hạ được lồng vào chân bản giúp nó có thể thu các khớp nối vào để nâng hoặc hạ bàn.",
            sortButton: [
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 4tr" }, { name: "Từ 4tr - 6tr" }, { name: "Từ 6tr - 8tr" }, { name: "Từ 8tr - 10tr" }, 
                        { name: "Từ 10tr - 12tr" }, { name: "Từ 12tr - 15tr" }, { name: "Trên 15tr" }
                    ]
                }
            ],
        }
    }
}
</script>