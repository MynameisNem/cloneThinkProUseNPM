<template>
    <div class="mt-6">
        <div class="promoProductSpecial">
            <div ref="promoProductSpecialContainer"
                class="box-content flex h-full relative w-full z-[1] overflow-x-hidden overscroll-auto space-x-3"
                style="transition-property: transform;">
                <!-- product promo, cần xử lý, chưa xong -->
                <div v-for="itemInforPromo in listSaleProductPromo"
                    :key="itemInforPromo.id"
                    class="cursor-pointer flex-shrink-0 h-full relative w-[288px]"
                    style="transition-property: transform;">
                    <a class="rounded-xl cursor-pointer flex flex-col overflow-hidden relative ring-0 bg-[#FFFFFF]"
                        href="#">
                        <div
                            class="absolute top-4 left-4 z-[1] flex items-center space-x-1">
                        </div>
                        <div class="relative">
                            <div class="relative"
                                style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                                <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                    :src="itemInforPromo.srcImgProduct"
                                    :alt="itemInforPromo.srcImgAlt">
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col p-4">
                            <div class="text-sm font-semibold leading-[150%]">
                                {{ itemInforPromo.nameProduct }}
                            </div>
                            <div class="items-center flex mt-1">
                                <span class="text-[#6B7075] text-xs leading-[150%]">
                                    {{ itemInforPromo.from }}
                                </span>
                                <span class="ml-1 font-semibold text-[#FE3464]">
                                    {{ itemInforPromo.priceProduct }}
                                </span>
                                <div
                                    class="rounded-sm pr-[2px] pl-[2px] leading-[14px] text-[10px] items-center cursor-pointer inline-flex whitespace-nowrap ml-1 text-[#FE3464] bg-[#FFF5F7]">
                                    {{ itemInforPromo.priceDown }}
                                </div>

                            </div>
                            <div class="items-center flex">
                                <span
                                    class="text-xs text-[#6B7075] leading-[150%]">Màu</span>
                                <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="itemInforPromo.styleProduct"></span>
                            </div>
                            <div class="mt-1 flow-root"
                                style="row-gap: calc(0.5rem*-1); column-gap: calc(0.5rem*-1);">
                                <div
                                    class="flex flex-wrap ml-[calc(0.5rem*-1)] mt-[calc(0.5rem*-1)]">
                                    <div
                                        class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                        {{ itemInforPromo.cpuInfor }}
                                    </div>
                                    <div
                                        class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                        {{ itemInforPromo.monitorInfor }}
                                    </div>
                                    <div
                                        class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                        {{ itemInforPromo.ramInfor }}
                                    </div>
                                    <div
                                        class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                        {{ itemInforPromo.ssdInfor }}
                                    </div>
                                </div>
                                <template v-if="itemInforPromo.giftInfor">
                                    <hr class="mt-3">
                                    <div class="text-sm underline items-center flex mt-3">
                                        {{ itemInforPromo.giftInfor }}
                                    </div>
                                </template>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <ButtonPrevPromoProductSpecial 
                :scrollFunction="scrollPrevPromoProductSpecial" 
                :extraClassesPrev="'buttonPrevSpecial'"
                :button-styles-prev="buttonStylesPrev"
                :scroll-position-prev="scrollPositionPromoProductSpecial">                    
            </ButtonPrevPromoProductSpecial>
            <ButtonNextPromoProductSpecial 
                :scrollFunction="scrollNextPromoProductSpecial" 
                :extraClassesNext="'buttonNextSpecial'"
                :button-styles-next="buttonStylesNext"
                :scroll-position-next="scrollPositionPromoProductSpecial">                    
            </ButtonNextPromoProductSpecial>
        </div>
    </div>
</template>

<script>
import ButtonPrevPromoProductSpecial from "../sharedVue/button/buttonPREV.vue"
import ButtonNextPromoProductSpecial from "../sharedVue/button/buttonNEXT.vue"
export default {
    components: {
        ButtonPrevPromoProductSpecial,
        ButtonNextPromoProductSpecial
    },
    data() {
        return {
            scrollPositionPromoProductSpecial: 0,
            listSaleProductPromo: [
            // ThinkBook 16 G5 + bản i5 13500H 16gb ram done
                {
                    id: 2000,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkbook-16-g5-thinkpro-xxv.png",
                    srcImgAlt: "Lenovo ThinkBook 16 G5+",
                    nameProduct: "Lenovo ThinkBook 16 G5+",
                    from: "Từ",
                    priceProduct: "22.790.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    cpuInfor: "i5 13500H",
                    monitorInfor: "2.5K",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                },
                // Dell XPS 13 Plus 9320 bản i5 1240P done
                {
                    id: 2001,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-VnX.png",
                    srcImgAlt: "Dell XPS 13 Plus 9320",
                    nameProduct: "Dell XPS 13 Plus 9320",
                    from: "Từ",
                    priceProduct: "27.990.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i5 1240P",
                    monitorInfor: "FHD+ Touch",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                },
                // Dell Inspiron 16 5630 done
                {
                    id: 2002,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/in5630nt-cnb-00000ff090-sl.jpg",
                    srcImgAlt: "Dell Inspiron 16 5630",
                    nameProduct: "Dell Inspiron 16 5630",
                    from: "Từ",
                    priceProduct: "14.990.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i5 1335U",
                    monitorInfor: "QHD+",
                    ramInfor: "8GB",
                    ssdInfor: "512GB",
                },
                // Dell Inspiron 13 5330 done
                {
                    id: 2003,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-inspiron-13-5330-6308-thumb.png",
                    srcImgAlt: "Dell Inspiron 13 5330",
                    nameProduct: "Dell Inspiron 13 5330",
                    from: "Từ",
                    priceProduct: "18.790.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid rgb(236 236 236); background: rgb(236 236 236);",
                    cpuInfor: "i5 1340P",
                    monitorInfor: "QHD+",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                },
                // ThinkBook 14 G5+ bản R7 7735H done
                {
                    id: 2004,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-bmA.png",
                    srcImgAlt: "Lenovo ThinkBook 14 G5+",
                    nameProduct: "Lenovo ThinkBook 14 G5+",
                    from: "Từ",
                    priceProduct: "22.990.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    cpuInfor: "R7 7735H",
                    monitorInfor: "2.8K",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 900.000đ"
                },
                // Dell Inspiron 14 5430 bản FHD+ done
                {
                    id: 2005,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-yum.png",
                    srcImgAlt: "Dell Inspiron 14 5430",
                    nameProduct: "Dell Inspiron 14 5430",
                    from: "Từ",
                    priceProduct: "19.390.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i7 1360P",
                    monitorInfor: "FHD+",
                    ramInfor: "16GB",
                    ssdInfor: "1TB",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1265U done
                {
                    id: 2006,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-carbon-gen-10-7271-thumb.png",
                    srcImgAlt: "ThinkPad X1 Carbon Gen 10",
                    nameProduct: "ThinkPad X1 Carbon Gen 10",
                    from: "Từ",
                    priceProduct: "31.990.000",
                    priceDown: "-16%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "i7 1265U",
                    monitorInfor: "FHD+ Touch",
                    ramInfor: "16GB",
                    ssdInfor: "256GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Legion 5 Pro 2022 done
                {
                    id: 2007,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2022-7297-thumb.png",
                    srcImgAlt: "Legion 5 Pro 2022",
                    nameProduct: "Legion 5 Pro 2022",
                    from: "Từ",
                    priceProduct: "26.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    cpuInfor: "i7 12700H",
                    monitorInfor: "QHD+ 165Hz",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    vgaInfor: "RTX3050Ti",
                },
                // Dell Inspiron 14 5430 bản QHD+ done
                {
                    id: 2008,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-yum.png",
                    srcImgAlt: "Dell Inspiron 14 5430",
                    nameProduct: "Dell Inspiron 14 5430",
                    from: "Từ",
                    priceProduct: "17.990.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i7 1360P",
                    monitorInfor: "QHD+",
                    ramInfor: "16GB",
                    ssdInfor: "1TB",
                },
                // Dell XPS 13 9315 (2022) done
                {
                    id: 2009,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7491-thumb.png",
                    srcImgAlt: "Dell XPS 13 9315 (2022)",
                    nameProduct: "Dell XPS 13 9315 (2022)",
                    from: "Từ",
                    priceProduct: "26.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(139 203 255); background: rgb(139 203 255);",
                    cpuInfor: "i7 1250U",
                    monitorInfor: "UHD+ Touch",
                    ramInfor: "32GB",
                    ssdInfor: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkBook 14 G5+ bản i5 13500H done
                {
                    id: 2010,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-bmA.png",
                    srcImgAlt: "Lenovo ThinkBook 14 G5+",
                    nameProduct: "Lenovo ThinkBook 14 G5+",
                    from: "Từ",
                    priceProduct: "24.990.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    cpuInfor: "i5 13500H",
                    monitorInfor: "2.8K",
                    ramInfor: "32GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkPad X1 Carbon Gen 11 done
                {
                    id: 2011,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png",
                    srcImgAlt: "ThinkPad X1 Carbon Gen 11",
                    nameProduct: "ThinkPad X1 Carbon Gen 11",
                    from: "Từ",
                    priceProduct: "27.990.000",
                    priceDown: "-30%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "i5 1355U",
                    monitorInfor: "FHD+",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkBook 16 G5+ bản R7 7735H 16gb ram  done
                {
                    id: 2012,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkbook-16-g5-thinkpro-xxv.png",
                    srcImgAlt: "Lenovo ThinkBook 16 G5+",
                    nameProduct: "Lenovo ThinkBook 16 G5+",
                    from: "Từ",
                    priceProduct: "22.390.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    cpuInfor: "R7 7735H",
                    monitorInfor: "2.5K",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 900.000đ"
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 16gb ram done
                {
                    id: 2013,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-rHc.png",
                    srcImgAlt: "Dell XPS 13 Plus 9320",
                    nameProduct: "Dell XPS 13 Plus 9320",
                    from: "Từ",
                    priceProduct: "26.990.000",
                    priceDown: "-44%",
                    styleProduct: "border: 1px solid rgb(236 236 236); background: rgb(236 236 236);",
                    cpuInfor: "i7 1260P",
                    monitorInfor: "3.5K OLED Touch",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 100.000đ"
                },
                // Dell Inspiron 14 5430 bản i5 1340P FHD+ done
                {
                    id: 2014,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    srcImgAlt: "Dell Inspiron 14 5430",
                    nameProduct: "Dell Inspiron 14 5430",
                    from: "Từ",
                    priceProduct: "17.290.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i5 1260P",
                    monitorInfor: "FHD+",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 31.990 done
                {
                    id: 2015,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    srcImgAlt: "Dell XPS 13 Plus 9320",
                    nameProduct: "Dell XPS 13 Plus 9320",
                    from: "Từ",
                    priceProduct: "31.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid rgb(54 54 54); background: rgb(54 54 54);",
                    cpuInfor: "i7 1260P",
                    monitorInfor: "3.5K OLED Touch",
                    ramInfor: "32GB",
                    ssdInfor: "1TB",
                    giftInfor: "Quà tặng 100.000đ"
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 32gb ram done
                {
                    id: 2016,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-10-thinkpro-5vj.png",
                    srcImgAlt: "Lenovo ThinkPad X1 Carbon Gen 10",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 10",
                    from: "Từ",
                    priceProduct: "31.990.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "i7 1270P",
                    monitorInfor: "4K OLED Touch",
                    ramInfor: "32GB",
                    ssdInfor: "256GB",
                },
                // Dell XPS 13 9315 (2022) bản màu (113 65 65) done
                {
                    id: 2017,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7491-thumb.png",
                    srcImgAlt: "Dell XPS 13 9315 (2022)",
                    nameProduct: "Dell XPS 13 9315 (2022)",
                    from: "Từ",
                    priceProduct: "27.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(113 65 65); background: rgb(113 65 65);",
                    cpuInfor: "i7 1250U",
                    monitorInfor: "FHD+",
                    ramInfor: "32GB",
                    ssdInfor: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell XPS 13 9315 (2022) bản màu (139 203 255) done
                {
                    id: 2018,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7236-thumb.png",
                    srcImgAlt: "Dell XPS 13 9315 (2022)",
                    nameProduct: "Dell XPS 13 9315 (2022)",
                    from: "Từ",
                    priceProduct: "27.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(139 203 255); background: rgb(139 203 255);",
                    cpuInfor: "i7 1250U",
                    monitorInfor: "FHD+",
                    ramInfor: "32GB",
                    ssdInfor: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkPad X1 Carbon Gen 11 bản i7 1365U 32gb ram giá 53.990 done
                {
                    id: 2019,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-carbon-gen-11-6950-thumb.png",
                    srcImgAlt: "Lenovo ThinkPad X1 Carbon Gen 11",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 11",
                    from: "Từ",
                    priceProduct: "53.990.000",
                    priceDown: "-10%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "i7 1365U",
                    monitorInfor: "FHD+",
                    ramInfor: "32GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell Inspiron 14 5430 bản i7 1360P QHD+ 16gb ram giá 19.390 done
                {
                    id: 2020,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    srcImgAlt: "Dell Inspiron 14 5430",
                    nameProduct: "Dell Inspiron 14 5430",
                    from: "Từ",
                    priceProduct: "19.390.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i7 1360P",
                    monitorInfor: "QHD+",
                    ramInfor: "16GB",
                    ssdInfor: "1TB",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 16gb ram done
                {
                    id: 2021,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-10-thinkpro-5vj.png",
                    srcImgAlt: "Lenovo ThinkPad X1 Carbon Gen 10",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 10",
                    from: "Từ",
                    priceProduct: "32.990.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "i7 1270P",
                    monitorInfor: "FHD+ Touch",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 28.990 done
                {
                    id: 2022,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-CCH.png",
                    srcImgAlt: "Dell XPS 13 Plus 9320",
                    nameProduct: "Dell XPS 13 Plus 9320",
                    from: "Từ",
                    priceProduct: "28.990.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid rgb(54 54 54); background: rgb(54 54 54);",
                    cpuInfor: "i7 1260P",
                    monitorInfor: "3.5K OLED Touch",
                    ramInfor: "32GB",
                    ssdInfor: "1TB",
                    giftInfor: "Quà tặng 550.000đ"
                },
                // Dell Inspiron 14 5430 bản i5 1340P QHD+ giá 18.390
                {
                    id: 2023,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    srcImgAlt: "Dell Inspiron 14 5430",
                    nameProduct: "Dell Inspiron 14 5430",
                    from: "Từ",
                    priceProduct: "18.390.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    cpuInfor: "i5 1340P",
                    monitorInfor: "QHD+",
                    ramInfor: "16GB",
                    ssdInfor: "512GB",
                }
            ],
            maxScrollPosition: null
        }
    },
    mounted() {
        this.shouldChangeColorNext()
    },
    methods: {
        scrollPrevPromoProductSpecial() {
            const container = this.$refs.promoProductSpecialContainer;
            this.scrollPositionPromoProductSpecial -= 288 + 12;
            if (this.scrollPositionPromoProductSpecial < 0) {
                this.scrollPositionPromoProductSpecial = 0;
            }
            container.scrollTo({
                left: this.scrollPositionPromoProductSpecial,
                behavior: 'smooth',
            });
        },
        scrollNextPromoProductSpecial() {
            const container = this.$refs.promoProductSpecialContainer;
            this.scrollPositionPromoProductSpecial += 288 + 12;
            const maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPositionPromoProductSpecial > maxScrollPosition) {
                this.scrollPositionPromoProductSpecial = maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPositionPromoProductSpecial,
                behavior: 'smooth',
            });
        },
        shouldChangeColorNext() {
            const container = this.$refs.promoProductSpecialContainer;
            if(!container) return;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth
        }
    },
    computed: {
        buttonStylesPrev() {
            const changeColorPrev = this.scrollPositionPromoProductSpecial > 0;
            return {
                backgroundColor: changeColorPrev ? '#0065ee' : '#E6E8EA',
                color: changeColorPrev ? '#FFFFFF' : '#6B7075'
            }            
        },
        buttonStylesNext() {
            const changeColorNext = this.scrollPositionPromoProductSpecial < this.maxScrollPosition;
            return {
                backgroundColor: changeColorNext ? '#0065ee' : '#E6E8EA',
                color: changeColorNext ? '#FFFFFF' : '#6B7075'
            }
        },        
    }
}
</script>

<style scoped>
.promoProductSpecial {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden; 
    padding: 0; 
    position: relative; 
    z-index: 1;
    touch-action: pan-y;
    list-style-position: initial; 
    list-style-image: initial;
}
.buttonPrevSpecial {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    background-color: #E6E8EA;
    color: #6B7075;
}
.buttonNextSpecial {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    color: white;
    background-color: #0065ee;
}
</style>