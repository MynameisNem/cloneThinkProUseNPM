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
                        class="box-content flex h-full relative w-full z-[1] overflow-x-hidden overscroll-auto space-x-3"
                        style="transition-property: transform;">
                        <!-- Nuphy Air75 v2 Brown Sw màu 0 0 0 done -->
                        <div v-for="itemPreOrder in listPreOrder"
                            :key="itemPreOrder.id"
                            class="cursor-pointer flex-shrink-0 h-full relative w-[293px]"
                            style="transition-property: transform; backface-visibility: hidden;">
                            <a class="rounded-xl cursor-pointer flex flex-col overflow-hidden relative ring-0 bg-[#FFFFFF]"
                                href="#">
                                <div class="absolute top-4 left-4 z-[1] flex items-center space-x-1">
                                    <div class="flex flex-col items-start space-y-1">
                                        <div class="text-[#FFFFFF] bg-[#0065EE] rounded py-[2px] px-2 items-center cursor-pointer inline-flex text-xs whitespace-nowrap leading-[150%]">
                                            <span>
                                                {{ itemPreOrder.saleSlot }}
                                            </span>
                                        </div>
                                        <div class="inline-flex" v-if="itemPreOrder.endTime">
                                            <span class="bg-[#F93920] text-[#FFFFFF] rounded py-[2px] px-2 items-center cursor-pointer inline-flex text-xs whitespace-nowrap leading-[150%]">
                                                {{ itemPreOrder.endTime }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <div class="relative"
                                        style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                                        <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                            :src="itemPreOrder.srcPreOrder"
                                            :alt="itemPreOrder.namePreOrder">
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <div class="text-sm leading-[150%] font-semibold">
                                            {{ itemPreOrder.namePreOrder }}
                                        </div>
                                        <div class="items-center flex mt-1">
                                            <span class="text-[#6B7075] text-xs leading-[150%]">
                                                Từ
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
                                        <template v-if="itemPreOrder.switchPreOrder">
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
                                        </template>
                                        
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
                    endTime:  '2025-01-20T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/ban-phim-co-nuphy-air75-v2-qmkvia-thinkpro.png",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Brown Switch 2.0",
                    countdownTime: 0,
                },
                {
                    id: 2501,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-06-06T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/ban-phim-co-nuphy-air75-v2-qmkvia-thinkpro.png",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Red Switch 2.0",
                    countdownTime: 0
                },
                {
                    id: 2502,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-12-01T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Jupiter Brown",
                    countdownTime: 0
                },
                {
                    id: 2503,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-11-05T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    switchPreOrder: "Gateron Jupiter Red",
                    countdownTime: 0
                },
                {
                    id: 2504,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-10-13T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(105 104 104); background: rgb(105 104 104);",
                    switchPreOrder: "Gateron Brown Switch 2.0",
                    countdownTime: 0
                },
                {
                    id: 2505,
                    saleSlot: "Đã bán 2/10",
                    endTime: '2024-08-23T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/3/nuphy-air75-v2-03-thinkpro.png",
                    namePreOrder: "Bàn Phím Cơ NuPhy Air75 v2 - QMK/VIA",
                    pricePreOrder: "2.750.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(105 104 104); background: rgb(105 104 104);",
                    switchPreOrder: "Gateron Red Switch 2.0",
                    countdownTime: 0
                },
                {
                    id: 2506,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-10-14T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-cw0.jpg",
                    namePreOrder: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless",
                    pricePreOrder: "2.090.000",
                    priceDown: "-16%",
                    stylePreOrder: "border: 1px solid rgb(3 3 3); background: rgb(3 3 3);",
                    switchPreOrder: "Gateron Jupiter Banana",
                    countdownTime: 0
                },
                {
                    id: 2507,
                    saleSlot: "Đã bán 1/10",
                    endTime: '2024-09-24T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/9/keychron-m6-wireless-mouse-03-thinkpro-FQP.jpg",
                    namePreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    pricePreOrder: "1.290.000",
                    priceDown: "-13%",
                    stylePreOrder: "border: 1px solid rgb(3 3 3); background: rgb(3 3 3);",
                    switchPreOrder: "",
                    countdownTime: 0
                },
                {
                    id: 2508,
                    saleSlot: "Còn 10 suất",
                    endTime: '2024-07-11T00:00:00',
                    srcPreOrder: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/9/chuot-khong-day-keychron-m6-ergonomic-thinkpro.png",
                    namePreOrder: "Chuột không dây Keychron M6 Ergonomic",
                    pricePreOrder: "1.290.000",
                    priceDown: "-13%",
                    stylePreOrder: "border: 1px solid rgb(255 255 255); background: rgb(255 255 255);",
                    switchPreOrder: "",
                    countdownTime: 0
                },
            ],
        }
    },
    mounted() {
        this.shouldChangeColorNext()
        this.startCountDown()

    },
    created() {
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
        },
        formatTwoDigits(number) {
            return number < 10 ? `0${number}` : `${number}`;
        },
        countDown(item) {
            if (item.countdownTime > 0) {
                item.countdownTime -= 1;

                const days = Math.floor(item.countdownTime / (60 * 60 * 24));
                const hours = Math.floor((item.countdownTime % (60 * 60 * 24)) / (60 * 60));
                const minutes = Math.floor((item.countdownTime % (60 * 60)) / 60);
                const seconds = Math.floor(item.countdownTime % 60);

                item.endTime = `${this.formatTwoDigits(days)} ngày, ${this.formatTwoDigits(hours)}h ${this.formatTwoDigits(minutes)}p ${this.formatTwoDigits(seconds)}s`;
            } else {
                item.endTime = "Hết thời gian";
            }
        },
        startCountDown() {
            this.listPreOrder.forEach(item => {
                // Chắc chắn rằng item.endTime là một hàm
                const endTime = new Date(item.endTime).getTime();
                const now = Date.now();

                const timeRemaining = Math.max(0, endTime - now) / 1000;


                item.countdownTime = timeRemaining;
                this.countDown(item)

                setInterval(() => {
                    this.countDown(item)
                }, 1000);
            });
        },
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