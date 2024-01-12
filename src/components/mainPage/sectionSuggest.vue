<template>
    <section class="mt-12">
        <h2 class="font-semibold text-[28px] leading-[40px]">Gợi ý cho bạn</h2>
        <div class="mt-4">
            <div class="items-center flex mt-6">
                <div class="flex-1 overflow-x-hidden">
                    <div class="overflow-hidden flex">
                        <div class="suggestion flex items-center space-x-2">
                            <button v-for="itemSuggestion in listButton"
                                :key="itemSuggestion.id" @click="selectItem(itemSuggestion)"
                                class="rounded-lg py-[10px] px-3 items-center inline-flex leading-[150%] whitespace-nowrap text-xs suggestion"
                                :class="{'selected-item': itemSuggestion === selectedItem}">
                                {{ itemSuggestion.nameSuggestion }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <component :is="selectedItemComponent" :selected-item="selectedItem"></component>
    </section>
</template>

<script>
import LaptopSuggest from '../suggest/laptop-suggest';
import KeyboardSuggest from '../production/Ban-phim/banphim-product-container.vue';
import SoundSuggest from '../suggest/sound-suggest';
import GameConsoleSuggest from '../suggest/game-console-suggest.vue'
import EgronomicChairSuggest from '../production/Chair/chair-product-container.vue';
import TableSuggest from '../production/Ban-nang-ha/ban-nang-ha-product-container.vue';
import MouseSuggest from '../suggest/mouse-suggest.vue';
import BagSuggest from '../suggest/bag-suggest.vue';
import ConvertSuggest from '../production/Cong-chuyen/cong-chuyen-product-container.vue';
import ArmMonitorSuggest from '../production/Arm-manhinh/arm-manhinh-product-container.vue';
import SoftwareSuggest from '../production/Phan-mem/phan-mem-product-container.vue';
import OnlineSaleSuggest from '../promoProduction/Laptop-gia-re/laptop-gia-re-all-products.vue';

export default {
    components: {

        // Phần này bỏ được

        // KeyboardSuggest,
        // LaptopSuggest,
        // SoundSuggest,
        // GameConsoleSuggest,
        // EgronomicChairSuggest,
        // TableSuggest,
        // MouseSuggest,
        // BagSuggest,
        // ConvertSuggest        
    },
    data() {
        return {
            selectedItem: null,
            listButton: [
                { id: 2999, nameSuggestion: "Laptop" }, { id: 3000, nameSuggestion: "Bàn phím" }, { id: 3001, nameSuggestion: "Âm thanh" }, { id: 3002, nameSuggestion: "Máy chơi game" }, { id: 3003, nameSuggestion: "Ghế công thái học" },
                { id: 3004, nameSuggestion: "Bàn nâng hạ" }, { id: 3005, nameSuggestion: "Chuột" }, { id: 3006, nameSuggestion: "Balo, túi" }, { id: 3007, nameSuggestion: "Cổng chuyển" },
                { id: 3008, nameSuggestion: "Arm màn hình" }, { id: 3010, nameSuggestion: "Phần mềm" }, { id: 3011, nameSuggestion: "Online - Giá rẻ" },
            ],            
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
        setDefaultSelectedItem() {
            // Nếu chưa có selectedItem và listItemsNav không rỗng
            if (!this.selectedItem && this.listButton.length > 0) {
                // Đặt selectedItem là item đầu tiên trong listItemsNav
                this.selectedItem = this.listButton[0];
            }
        },
    },
    computed: {
        selectedItemComponent() {
            const productSuggMapping = {
                'Bàn phím': KeyboardSuggest,
                'Laptop': LaptopSuggest,
                'Âm thanh': SoundSuggest,
                'Máy chơi game': GameConsoleSuggest,
                'Ghế công thái học': EgronomicChairSuggest,
                'Bàn nâng hạ': TableSuggest,
                'Chuột': MouseSuggest,
                'Balo, túi': BagSuggest,
                'Cổng chuyển': ConvertSuggest,
                'Arm màn hình': ArmMonitorSuggest,
                'Phần mềm': SoftwareSuggest,
                'Online - Giá rẻ': OnlineSaleSuggest
            };
            if (this.selectedItem) {
                const selectedProduct = this.selectedItem.nameSuggestion;
                return productSuggMapping[selectedProduct] || LaptopSuggest
            }
            return LaptopSuggest
        }
    },
    mounted() {
    // Gọi phương thức để đặt giá trị mặc định khi component được mounted
        this.setDefaultSelectedItem();
    },
}
</script>

<style scoped>
.suggestion button {
    /* Đặt màu mặc định cho tất cả các button */
    background-color: #FFFFFF;
    color: #1C1F23;
}

.suggestion button:hover,
.suggestion .selected-item {
    /* Hover và mục đã chọn sẽ có màu khác nhau */
    background-color: #EBF3FF;
    color: #0065EE;
}
</style>