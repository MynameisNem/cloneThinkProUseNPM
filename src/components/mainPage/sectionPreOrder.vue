<template>
    <section class="section-preorder space-x-12">
        <div class="relative">
            <div class="flex items-center space-x-2">
                <h3 class="text-2xl font-semibold leading-[34px]">
                    Pre-Order
                </h3>
                <span class="space-x-2 ml-4 text-2xl font-semibold text-[#6B7075] leading-[34px]">
                    Đặt sớm giá ngon
                </span>
            </div>
            <!-- danh sách hàng preorder chi tiết -->
            <div class="mt-6">
                <div class="pre-order-container">
                    <div ref="preOrder"
                        class="box-content flex h-full relative w-full z-[1] overflow-x-hidden overscroll-auto"
                        style="transition-property: transform;">
                        <!-- Nuphy Air75 v2 Brown Sw màu 0 0 0 done -->
                        <div v-for="itemPreOrder in listPreOrder"
                            :key="itemPreOrder.id"
                            class="mr-3 cursor-pointer flex-shrink-0 h-full relative w-[288px]"
                            style="transition-property: transform; backface-visibility: hidden;">
                            <a class="rounded-xl cursor-pointer flex flex-col overflow-hidden relative ring-0 bg-[#FFFFFF]"
                                href="">
                                <div
                                    class="absolute top-4 left-4 z-[1] flex items-center space-x-1">
                                    <div class="flex flex-col items-start space-y-1">
                                        <div
                                            class="text-[#FFFFFF] bg-[#0065EE] rounded py-[2px] px-2 items-center cursor-pointer inline-flex text-xs whitespace-nowrap leading-[150%]">
                                            <span>
                                                {{ itemPreOrder.saleSlot }}
                                            </span>
                                        </div>
                                        <div class="inline-flex">
                                            <span
                                                class="bg-[#F93920] text-[#FFFFFF] rounded py-[2px] px-2 items-center cursor-pointer inline-flex text-xs whitespace-nowrap leading-[150%]">
                                                {{ itemPreOrder.countdownPreOder }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <div class="relative"
                                        style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                                        <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                            :src="itemPreOrder.srcPreOrder"
                                            :alt="itemPreOrder.altPreOrder">
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <div class="text-sm leading-[150%] font-semibold">
                                            {{ itemPreOrder.namePreOrder }}
                                        </div>
                                        <div class="items-center flex mt-1">
                                            <span class="text-[#6B7075] text-xs leading-[150%]">
                                                {{ itemPreOrder.from }}
                                            </span>
                                            <span class="ml-1 font-semibold text-[#FE3464]">
                                                {{ itemPreOrder.pricePreOrder }}
                                            </span>
                                            <div
                                                class="rounded-sm pr-[2px] pl-[2px] leading-[14px] text-[10px] items-center cursor-pointer inline-flex whitespace-nowrap ml-1 text-[#FE3464] bg-[#FFF5F7]">
                                                {{ itemPreOrder.priceDown }}
                                            </div>
                                        </div>
                                        <div class="items-center flex">
                                            <span
                                                class="text-xs text-[#6B7075] leading-[150%]">Màu</span>
                                            <span class="rounded-sm w-3 h-3 ml-1"
                                                :style="itemPreOrder.stylePreOrder"></span>
                                        </div>
                                        <div class="mt-1 flow-root"
                                            style="row-gap: calc(0.5rem*-1); column-gap: calc(0.5rem*-1);">
                                            <div
                                                class="flex flex-wrap ml-[calc(0.5rem*-1)] mt-[calc(0.5rem*-1)]">
                                                <div
                                                    class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                                    {{ itemPreOrder.switchPreOrder }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>                        
                    </div>
                    <ButtonPreOrderPrev 
                        :scroll-function="scrollPrevPreOrder" 
                        :extra-classes-prev="'buttonPreOrder-Prev'"
                        :button-styles-prev="buttonStylesPrev"
                        :scroll-position-prev="scrollPositionPreOder">                            
                    </ButtonPreOrderPrev>
                    <ButtonPreOrderNext 
                        :scroll-function="scrollNextPreOrder" 
                        :extra-classes-next="'buttonPreOrder-Next'"
                        :button-styles-next="buttonStylesNext"
                        :scroll-position-next="scrollPositionPreOder">                            
                    </ButtonPreOrderNext>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonPreOrderPrev from "../sharedVue/button/buttonPREV.vue";
import ButtonPreOrderNext from "../sharedVue/button/buttonNEXT.vue";
export default {
    components: {
        ButtonPreOrderPrev,
        ButtonPreOrderNext
    },
    data() {
        return {
            scrollPositionPreOder: 0,
            maxScrollPosition: null,
            listPreOrder: [
            // Nuphy Air75 v2 Brown Sw màu 0 0 0 done
                {
                    id: 2500,
                    saleSlot: "Đã bán 1/10",
                    countdownPreOder: "08 ngày, 08h 37p 58s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/ban-phim-co-nuphy-air75-v2-qmkvia-thinkpro.png",
                    altPreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    from: "Từ",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Brown Switch 2.0"
                },
                // Nuphy Air75 v2 Red Sw màu 0 0 0 done
                {
                    id: 2501,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "01 ngày, 15h 23p 16s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/ban-phim-co-nuphy-air75-v2-qmkvia-thinkpro.png",
                    altPreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    from: "Từ",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Red Switch 2.0"
                },
                // Keychron V1 Max Wireless Jupiter Brown Sw done
                {
                    id: 2502,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "06 ngày, 05h 14p 39s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    altPreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    from: "Từ",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Jupiter Brown"
                },
                // Keychron V1 Max Wireless Jupiter Red Sw done
                {
                    id: 2503,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "06 ngày, 05h 14p 39s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    altPreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    from: "Từ",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Jupiter Red"
                },
                // Nuphy Air75 v2 Brown Sw màu 105 104 104 done
                {
                    id: 2504,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "01 ngày, 22h 10p 48s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    altPreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    from: "Từ",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(105 104 104); background: rgb(105 104 104);",
                    switchPreOrder: "Gateron Brown Switch 2.0"
                },
                // Nuphy Air75 v2 Red Sw màu 105 104 104 done
                {
                    id: 2505,
                    saleSlot: "Đã bán 2/10",
                    countdownPreOder: "08 ngày, 15h 02p 48s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/nuphy-air75-v2-03-thinkpro.png",
                    altPreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    from: "Từ",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(105 104 104); background: rgb(105 104 104);",
                    switchPreOrder: "Gateron Red Switch 2.0"
                },
                // Keychron V1 Max Wireless Jupiter Banana Sw done
                {
                    id: 2506,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "06 ngày, 05h 14p 39s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-cw0.jpg",
                    altPreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    from: "Từ",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(3 3 3); background: rgb(3 3 3);",
                    switchPreOrder: "Gateron Jupiter Banana"
                },
                // Chuột không dây Keychron M6 Ergonomic màu 3 3 3 done
                {
                    id: 2507,
                    saleSlot: "Đã bán 1/10",
                    countdownPreOder: "06 ngày, 04h 49p 16s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/9/keychron-m6-wireless-mouse-03-thinkpro-FQP.jpg",
                    altPreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    namePreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    from: "Từ",
                    pricePreOrder: "1.290.000",
                    priceDown: "-13%",
                    stylePreOrder: "border: 1px solid rgb(3 3 3); background: rgb(3 3 3);",
                    switchPreOrder: ""
                },
                // Chuột không dây Keychron M6 Ergonomic màu 255 255 255 done
                {
                    id: 2508,
                    saleSlot: "Còn 10 suất",
                    countdownPreOder: "06 ngày, 04h 49p 16s",
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/9/chuot-khong-day-keychron-m6-ergonomic-thinkpro.png",
                    altPreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    namePreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    from: "Từ",
                    pricePreOrder: "1.290.000",
                    priceDown: "-13%",
                    stylePreOrder: "border: 1px solid rgb(255 255 255); background: rgb(255 255 255);",
                    switchPreOrder: ""
                },
            ],
        }
    },
    mounted() {
        this.shouldChangeColorNext()
    },
    methods: {
        scrollPrevPreOrder() {
            const container = this.$refs.preOrder;
            this.scrollPositionPreOder -= 288 + 12;
            if (this.scrollPositionPreOder < 0) {
                this.scrollPositionPreOder = 0;
            }
            container.scrollTo({
                left: this.scrollPositionPreOder,
                behavior: 'smooth',
            });
        },
        scrollNextPreOrder() {
            const container = this.$refs.preOrder;
            this.scrollPositionPreOder += 288 + 12;
            const maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPositionPreOder > maxScrollPosition) {
                this.scrollPositionPreOder = maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPositionPreOder,
                behavior: 'smooth',
            });
        },
        shouldChangeColorNext() {
            const container = this.$refs.preOrder
            if(!container) return;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth;
        }
    },
    computed: {
        buttonStylesPrev() {
            const changeColorPrev = this.scrollPositionPreOder > 0;
            return {
                backgroundColor: changeColorPrev ? '#0065ee' : '#E6E8EA',
                color: changeColorPrev ? '#FFFFFF' : '#6B7075'
            }
        },
        buttonStylesNext() {
            const changeColorNext = this.scrollPositionPreOder < this.maxScrollPosition;
            return {
                backgroundColor: changeColorNext ? '#0065ee' : '#E6E8EA',
                color: changeColorNext ? '#FFFFFF' : '#6B7075'
            }
        }
    }
}
</script>

<style scoped>
.pre-order-container {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 1;
    list-style-position: initial; 
    list-style-image: initial;
}
.buttonPreOrder-Prev {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    background-color: #E6E8EA;
    color: #6B7075;
}
.buttonPreOrder-Next {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    background-color: #0065ee;
    color: white;
}
</style>