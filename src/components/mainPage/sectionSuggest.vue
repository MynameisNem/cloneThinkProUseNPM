<template>
    <section class="mt-12">
        <h2 class="font-semibold text-[28px] leading-[40px]">Gợi ý cho bạn</h2>
        <div class="mt-4">
            <div class="items-center flex mt-6">
                <div class="flex-1 overflow-x-hidden">
                    <div class="overflow-hidden flex">
                        <div class="suggestion flex items-center space-x-2">
                            <!-- <button
                                class="rounded-lg py-[10px] px-3 items-center inline-flex leading-[150%] whitespace-nowrap text-xs bg-[#EBF3FF] text-[#0065EE] hover:text-[#0065EE] hover:bg-[#EBF3FF] focus:text-[#0065EE] focus:bg-[#EBF3FF]"> -->
                                <!-- bg-[#FFFFFF] text-[#1C1F23] thêm sau khi làm được vuejs -->
                                <!-- <div class="rounded-lg py-[10px] px-3 items-center inline-flex leading-[150%] whitespace-nowrap text-xs cursor-pointer bg-[#FFFFFF] text-[#1C1F23] hover:text-[#0065EE] hover:bg-[#EBF3FF]">  backup -->
                                <!-- {{ this.firstButton }}
                            </button> -->
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
        <div class="product-list mt-6">
            <section class=" grid gap-3 grid-cols-5">
                <!-- Thinkpad T16 có quà tặng -->
                <div v-for="productSuggestion in listProductSuggestion" :key="productSuggestion.id"
                    style="grid-gap: 0.75rem">
                    <a class="bg-[#FFFFFF] cursor-pointer flex flex-col relative overflow-hidden rounded-[0.75rem] h-full"
                        href="">
                        <div class="absolute top-4 left-4 z-[1] flex items-center space-x-1 ">
                        </div>
                        <div class="relative">
                            <div
                                style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                                <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                    :src="productSuggestion.srcProductSugges"
                                    :alt="productSuggestion.nameProductSugges">
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col p-4">
                            <div class="text-sm leading-[150%] font-semibold">
                                {{ productSuggestion.nameProductSugges }}
                            </div>
                            <div class="items-center flex mt-1">
                                <span class="text-[#6B7075] leading-[150%] text-xs">
                                    {{ productSuggestion.from }}
                                </span>
                                <span class="ml-1 font-semibold text-[#FE3464]">
                                    {{ productSuggestion.priceProduct }}
                                </span>
                                <div
                                    class="rounded-sm pr-[2px] pl-[2px] leading-[14px] text-[10px] items-center cursor-pointer inline-flex whitespace-nowrap ml-1 text-[#FE3464] bg-[#FFF5F7]">
                                    {{ productSuggestion.priceDown }}
                                </div>
                            </div>
                            <div class="items-center flex">
                                <span class="text-xs text-opacity-100 text-[#6B7075]">Màu</span>
                                <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="productSuggestion.styleProductSugges"></span>
                            </div>
                            <div class="flow-root mt-2"
                                style="--gap-x-negative: calc((8px)*-1); --gap-y-negative: calc((8px)*-1);">
                                <div
                                    class="flex flex-wrap ml-[var(--gap-x-negative)] mt-[var(--gap-x-negative)]">
                                </div>
                            </div>
                            <hr class="my-3">
                            <div class="text-xs leading-[150%]">
                                {{ productSuggestion.cpuInfor }}
                                <br>
                                {{ productSuggestion.ramInfor }}
                                <br>
                                {{ productSuggestion.ssdInfor }}
                                <br>
                                {{ productSuggestion.monitorInfor }}
                                <br>
                                {{ productSuggestion.vgaInfor }}
                            </div>
                            <template v-if="productSuggestion.giftProduct">
                                <hr class="mt-3">
                            </template>
                            <!-- <hr class="mt-3"> -->
                            <div class="text-sm underline items-center flex mt-3 leading-[150%]">
                                <span>{{ productSuggestion.giftProduct }}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            listButton: [
            { id: 2999, nameSuggestion: "Laptop" }, { id: 3000, nameSuggestion: "Bàn phím" }, { id: 3001, nameSuggestion: "Âm thanh" }, { id: 3002, nameSuggestion: "Máy chơi game" }, { id: 3003, nameSuggestion: "Ghế công thái học" },
            { id: 3004, nameSuggestion: "Bàn nâng hạ" }, { id: 3005, nameSuggestion: "Chuột" }, { id: 3006, nameSuggestion: "Balo, túi" }, { id: 3007, nameSuggestion: "Cổng chuyển" },
            { id: 3008, nameSuggestion: "Arm màn hình" }, { id: 3009, nameSuggestion: "Smart Home" }, { id: 3010, nameSuggestion: "Phần mềm" }, { id: 3011, nameSuggestion: "Online - Giá rẻ" },
            ],
            listProductSuggestion: [
            // surface 8 pro device only
                {
                    id: 3500,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/microsoft-surface-pro-8-device-only-thinkpro-BVb.png",
                    nameProductSugges: "Microsoft Surface Pro 8 (Device Only)",
                    from: "Từ",
                    priceProduct: "16.990.000",
                    priceDown: "-43%",
                    styleProductSugges: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 1135G7, 4 Cores",
                    ramInfor: "RAM: 8GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 13\", 2880 x 1920, 120Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics"
                },
                // thinkpad t16 có quà tặng
                {
                    id: 3501,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-t16-thinkpro.png",
                    nameProductSugges: "Lenovo ThinkPad T16",
                    from: "Từ",
                    priceProduct: "20.390.000",
                    priceDown: "-24%",
                    styleProductSugges: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 1245U, 10 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 16\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 450.000"
                },
                // nitro 5 tiger
                {
                    id: 3502,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/acer-nitro-5-tiger-5375-thumb.png",
                    nameProductSugges: "Acer Nitro 5 Tiger",
                    from: "Từ",
                    priceProduct: "15.990.000",
                    priceDown: "-33%",
                    styleProductSugges: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 12500H, 12 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080, 144Hz",
                    vgaInfor: "Card: NVIDIA Geforce RTX 3050 Ti 4GB"
                },
                // vivobook 15 oled
                {
                    id: 3503,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/asus-vivobook-15x-oled-m1503qa-7402-thumb.png",
                    nameProductSugges: "Asus Vivobook 15X OLED (M1503QA)",
                    from: "Từ",
                    priceProduct: "15.790.000",
                    priceDown: "-21%",
                    styleProductSugges: "border: 1px solid #050F6C; background: #050F6C;",
                    cpuInfor: "CPU: Ryzen 7 5800H, 8 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 2880 x 1620, 60Hz",
                    vgaInfor: "Card: AMD Radeon Graphics"
                },
                // Inspiron 14 7435 2 in 1
                {
                    id: 3504,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-inspiron-14-7435-2-in-1-7329-thumb.png",
                    nameProductSugges: "Dell Inspiron 14 7435 2 in 1",
                    from: "Từ",
                    priceProduct: "14.990.000",
                    priceDown: "-29%",
                    styleProductSugges: "border: 1px solid #9AD1EF; background: #9AD1EF;",
                    cpuInfor: "CPU: Ryzen 5 7530U, 6 Cores",
                    ramInfor: "RAM: 8GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: AMD Radeon Graphics"
                },
                // thinkpad x1 nano
                {
                    id: 3505,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-nano-5918-thumb.png",
                    nameProductSugges: "Lenovo ThinkPad X1 Nano",
                    from: "Từ",
                    priceProduct: "19.990.000",
                    priceDown: "-38%",
                    styleProductSugges: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i7 1160G7, 4 Cores",
                    ramInfor: "RAM: 16GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 13\", 2160 x 1350, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 550.000"
                },
                // slim 7 pro X
                {
                    id: 3506,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-slim-7-prox-5947-thumb.png",
                    nameProductSugges: "Lenovo Slim 7 ProX",
                    from: "Từ",
                    priceProduct: "25.990.000",
                    priceDown: "-19%",
                    styleProductSugges: "border: 1px solid #555454; background: #555454;",
                    cpuInfor: "CPU: Ryzen 9 6900HS, 8 Cores",
                    ramInfor: "RAM: 32GB, 6400Mhz",
                    ssdInfor: "Ổ cứng: SSD 1024GB",
                    monitorInfor: "Màn hình: 14.5\", 3072 x 1920, 120Hz",
                    vgaInfor: "Card: Geforce RTX 3050 4GB",
                    giftProduct: "Quà tặng 450.000"
                },
                // Dell XPS 13 Plus 9320
                {
                    id: 3507,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-plus-9320-5734-thumb.png",
                    nameProductSugges: "Dell XPS 13 Plus 9320",
                    from: "Từ",
                    priceProduct: "27.990.000",
                    priceDown: "-44%",
                    styleProductSugges: "border: 1px solid #ECECEC; background: #ECECEC;",
                    cpuInfor: "CPU: Core i7 1260P, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 13.4\", 3456 x 2160, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 550.000"
                },
                // Thinkpad X1 Carbon Gen 6
                {
                    id: 3508,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/27/lenovo-thinkpad-x1-carbon-gen-6-thinkpro-DnG.jpg",
                    nameProductSugges: "Lenovo ThinkPad X1 Carbon Gen 6",
                    from: "Từ",
                    priceProduct: "11.790.000",
                    priceDown: "-37%",
                    styleProductSugges: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 8650U, 4 Cores",
                    ramInfor: "RAM: 16GB, 2133Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1080, 60Hz",
                    vgaInfor: "Card: Intel UHD 620",
                    giftProduct: "Quà tặng 100.000"
                },
                // Precision 5550
                {
                    id: 3509,
                    srcProductSugges: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/dell-precision-5550-thinkpro-s6H.png",
                    nameProductSugges: "Dell Precision 5550",
                    from: "Từ",
                    priceProduct: "24.990.000",
                    priceDown: "-31%",
                    styleProductSugges: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    cpuInfor: "CPU: Core i7 10850H, 6 Cores",
                    ramInfor: "RAM: 32GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: Quadro T2000 4GB",
                    giftProduct: "Quà tặng 100.000"
                },
            ]
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