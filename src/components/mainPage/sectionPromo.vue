<template>
    <div class="mt-12">
        <h2 class="font-semibold text-[28px]">Khuyến mãi</h2>
        <div class="mt-6 px-6 py-8 flex flex-col rounded space-y-12 bg-[#FFF3F5]">
            <section class="section-promotion">
                <h3 class="font-semibold text-[24px]">Chương trình khuyến mãi nổi bật</h3>
                <div class="mt-6 relative">
                    <div class="mr-auto ml-auto relative z-10 touch-pan-y">
                        <div ref="specialPromotionContainer"
                            class="box-content flex h-full w-full z-10 relative duration-300 transition-transform overflow-x-hidden overscroll-auto space-x-3"
                            style="transform: translate3d(0px, 0px, 0px);">
                            <!-- thông tin special promo -->
                            <div v-for="(itemPromo, indexItemPromo) in listPromo" :key="itemPromo.id"
                                class="w-[488px] flex-shrink-0 relative h-full space-x-4"
                                style="transition-property: transform; backface-visibility: hidden; transform: translateZ(0);">
                                <router-link :to="itemPromo.to" class="flex flex-col relative rounded p-4 bg-white">
                                    <div class="mb-2 flex items-center space-x-2">
                                        <div
                                            class="text-[12px] bg-[#F6F9FC] text-[#1C1F23] rounded py-[2px] px-2 items-center inline-flex whitespace-nowrap leading-[150%]">
                                            {{ itemPromo.promoQuanti1 }}
                                        </div>
                                        <div
                                            class="text-[12px] bg-[#F6F9FC] text-[#1C1F23] rounded py-[2px] px-2 items-center inline-flex whitespace-nowrap leading-[150%]">
                                            {{ itemPromo.promoQuanti2 }}
                                        </div>
                                        <div
                                            class="text-[12px] bg-[#F6F9FC] text-[#1C1F23] rounded py-[2px] px-2 items-center inline-flex whitespace-nowrap leading-[150%]">
                                            {{ itemPromo.promoGift }}
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span
                                            class="overflow-hidden font-semibold text-[20px] leading-[150%]">
                                            {{ itemPromo.promoName }}
                                        </span>
                                    </div>
                                    <div class="mt-2 flex items-center space-x-2">
                                        <span
                                            class="text-[12px] bg-[#F6F9FC] text-[#ff3300] rounded py-[2px] px-2 items-center inline-flex whitespace-nowrap leading-[150%]">
                                            {{ itemPromo.promoDown }}
                                        </span>
                                        <span
                                            class="text-[12px] bg-[#F6F9FC] text-[#ff3300] rounded py-[2px] px-2 items-center inline-flex whitespace-nowrap leading-[150%]">
                                            {{ itemPromo.promoPrice }}
                                        </span>
                                    </div>
                                    <span class="mt-2 text--[#6B7075] leading-[150%] text-[12px]">
                                        {{ itemPromo.promoStart }}
                                    </span>
                                    <div class="mt-3">
                                        <div class="flex items-center space-x-2">
                                            <!-- Cần rút gọn hơn bằng dùng computed trong vuejs nhưng đang bí -->
                                            <template v-for="(srcImg, indexSrc) in listImgPromo">
                                                <div v-if="indexItemPromo === 0 && indexSrc <=4"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                                <div v-else-if="indexItemPromo === 1 && indexSrc >= 5 && indexSrc <= 9"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                                <div v-else-if="indexItemPromo === 2 && indexSrc >= 10 && indexSrc <= 14"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                                <div v-else-if="indexItemPromo === 3 && indexSrc >= 15 && indexSrc <= 19"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                                <div v-else-if="indexItemPromo === 4 && indexSrc >= 20 && indexSrc <= 22"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                                <div v-else-if="indexItemPromo === 5 && indexSrc >= 23 && indexSrc <= 28"
                                                    :key="srcImg.id"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcImg.srcImgPromo" :alt="srcImg.imgAlt">
                                                    </div>
                                                </div>
                                            </template>
                                            <!-- Ở đây cũng thế -->
                                            <template v-for="(srcLastImg, indexLast) in listLastImgPromo">
                                                <div :key="indexLast"
                                                    v-if="indexItemPromo === 0 && indexLast === 0"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div>
                                                        <div
                                                            class="z-[1] absolute inset-0 bg-opacity-30 bg-[#1C1F19]">
                                                        </div>
                                                        <div
                                                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                                            <span class="text-white font-semibold">{{
                                                                srcLastImg.promoInven }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcLastImg.srcLastImgPromo"
                                                            :alt="srcLastImg.imgLastAlt">
                                                    </div>
                                                </div>
                                                <div :key="indexLast"
                                                    v-else-if="indexItemPromo === 1 && indexLast === 1"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div>
                                                        <div
                                                            class="z-[1] absolute inset-0 bg-opacity-30 bg-[#1C1F19]">
                                                        </div>
                                                        <div
                                                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                                            <span class="text-white font-semibold">{{
                                                                srcLastImg.promoInven }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcLastImg.srcLastImgPromo"
                                                            :alt="srcLastImg.imgLastAlt">
                                                    </div>
                                                </div>
                                                <div :key="indexLast"
                                                    v-else-if="indexItemPromo === 2 && indexLast === 2"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div>
                                                        <div
                                                            class="z-[1] absolute inset-0 bg-opacity-30 bg-[#1C1F19]">
                                                        </div>
                                                        <div
                                                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                                            <span class="text-white font-semibold">{{
                                                                srcLastImg.promoInven }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcLastImg.srcLastImgPromo"
                                                            :alt="srcLastImg.imgLastAlt">
                                                    </div>
                                                </div>
                                                <div :key="indexLast"
                                                    v-else-if="indexItemPromo === 3 && indexLast === 3"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div>
                                                        <div
                                                            class="z-[1] absolute inset-0 bg-opacity-30 bg-[#1C1F19]">
                                                        </div>
                                                        <div
                                                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                                            <span class="text-white font-semibold">{{
                                                                srcLastImg.promoInven }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcLastImg.srcLastImgPromo"
                                                            :alt="srcLastImg.imgLastAlt">
                                                    </div>
                                                </div>
                                                <div :key="indexLast"
                                                    v-else-if="indexItemPromo === 5 && indexLast === 4"
                                                    class="rounded relative border overflow-hidden cursor-pointer w-1/6">
                                                    <div>
                                                        <div
                                                            class="z-[1] absolute inset-0 bg-opacity-30 bg-[#1C1F19]">
                                                        </div>
                                                        <div
                                                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                                            <span class="text-white font-semibold">
                                                                {{ srcLastImg.promoInven }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="relative">
                                                        <img class="w-full h-full object-cover bg-[#FFFFFF]"
                                                            :src="srcLastImg.srcLastImgPromo"
                                                            :alt="srcLastImg.imgLastAlt">
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <ButtonPREV 
                            :scrollFunction="scrollPrevPromo" 
                            :extraClassesPrev="'buttonPREVClassPromo'"
                            :scroll-position-prev="scrollPositionPromo"
                            :button-styles-prev="buttonStylesPrev">
                        </ButtonPREV>
                        <ButtonNEXT 
                            :scrollFunction="scrollNextPromo" 
                            :extraClassesNext="'buttonNEXTClassPromo'"
                            :scroll-position-next="scrollPositionPromo"
                            :button-styles-next="buttonStylesNext">
                        </ButtonNEXT>
                    </div>
                </div>
            </section>
            <SectionPromoProduct></SectionPromoProduct>
        </div>
    </div>
</template>

<script>
import ButtonPREV from '../sharedVue/button/buttonPREV.vue';
import ButtonNEXT from '../sharedVue/button/buttonNEXT.vue';
import SectionPromoProduct from './sectionPromoProduct.vue';
export default {
    components: { 
        ButtonPREV,
        ButtonNEXT,
        SectionPromoProduct
    },
    props: {
        ButtonPREV,
        ButtonNEXT,
    },
    data() {
        return {
            listPromo: [
                {
                    id: 0,
                    promoQuanti1: "30 Laptop",
                    promoQuanti2: "",
                    promoGift: "",
                    promoName: "SALE TƯNG BỪNG - MỪNG NĂM MỚI",
                    promoDown: "-100%",
                    promoPrice: "Chỉ từ 17.990.000",
                    promoStart: "Từ 06/12/2023",
                    to: "/Sale-tung-bung-mung-nam-moi"
                },
                // Loa Marshall
                {
                    id: 1,
                    promoQuanti1: "34 Loa",
                    promoQuanti2: "3 Tai nghe",
                    promoGift: "",
                    promoName: "Marshall - Âm Thanh Đỉnh Cao - Giá Hợp Lý",
                    promoDown: "-54%",
                    promoPrice: "Chỉ từ 2.390.000",
                    promoStart: "Từ 18/03/2023",
                    to: "/Marshall-mon-qua-tuyet-voi-cho-nguoi-ban-yeu-thuong"
                },
                // Âm thanh giải nhiệt mùa hè
                {
                    id: 2,
                    promoQuanti1: "50 Loa",
                    promoQuanti2: "3 Tai nghe",
                    promoGift: "",
                    promoName: "ÂM THANH ĐỈNH CAO - SIÊU SALE NĂM MỚI",
                    promoDown: "-41%",
                    promoPrice: "Chỉ từ 2.090.000",
                    promoStart: "Từ 18/03/2023",
                    to: "/Loa-di-dong-thang-3-xa-kho-cuc-nhieu"
                },
                // Xả kho balo túi
                {
                    id: 3,
                    promoQuanti1: "28 Balo",
                    promoQuanti2: "36 Túi",
                    promoGift: "1 Quà tặng",
                    promoName: "Xả Kho Balo, Túi - SIÊU SALE ĐÓN NĂM MỚI",
                    promoDown: "-47%",
                    promoPrice: "Chỉ từ 290.000",
                    promoStart: "Từ 18/03/2023",
                    to: "/Xa-kho-balo-tui-bao-ve-do-cong-nghe"
                },
                // phần mềm
                {
                    id: 4,
                    promoQuanti1: "3 phần mềm",
                    promoQuanti2: "",
                    promoGift: "",
                    promoName: "FLASH SALE - ĐỘC QUYỀN MICROSOFT",
                    promoDown: "-33%",
                    promoPrice: "Chỉ từ 990.000",
                    promoStart: "Từ 21/08/2023",
                    to: "/Ctkm-giam-100k"
                },
                // laptop chính hãng
                {
                    id: 5,
                    promoQuanti1: "15 Laptop",
                    promoQuanti2: "2 Màn hình",
                    promoGift: "",
                    promoName: "Laptop Chính Hãng - Giá Rẻ Nhất Thị Trường",
                    promoDown: "-47%",
                    promoPrice: "Chỉ từ 3.990.000",
                    promoStart: "Từ 01/10/2023",
                    to: "/Ngay-vang-gia-soc"
                }
            ],
            // indexItemPromo = 0,
            listImgPromo: [
                // Sale năm mới
                {
                    id: 195,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/surface-laptop-4-135-amd-thinkpro.jpeg",
                    imgAlt: "SALE TƯNG BỪNG - MỪNG NĂM MỚI"
                },
                {
                    id: 196,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkbook-14-g4-amd-4326-thumb.png",
                    imgAlt: "SALE TƯNG BỪNG - MỪNG NĂM MỚI"
                },
                {
                    id: 197,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/dell-inspiron-14-plus-7420-thinkpro.jpeg",
                    imgAlt: "SALE TƯNG BỪNG - MỪNG NĂM MỚI"
                },
                {
                    id: 198,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/macbook-air-2022-apple-m2-mly13saa-thinkpro.jpeg",
                    imgAlt: "SALE TƯNG BỪNG - MỪNG NĂM MỚI"
                },
                {
                    id: 199,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-latitude-7320-detachable-kem-ban-phim-thinkpro-62Q.png",
                    imgAlt: "SALE TƯNG BỪNG - MỪNG NĂM MỚI"
                },
                // Marshall
                {
                    id: 200,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-2-5104-thumb.png",
                    imgAlt: "Marshall - Âm Thanh Đỉnh Cao - Giá Hợp Lý"
                },
                {
                    id: 201,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-2-5106-thumb.png",
                    imgAlt: "Marshall - Âm Thanh Đỉnh Cao - Giá Hợp Lý"
                },
                {
                    id: 202,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-stanmore-2-5107-thumb.png",
                    imgAlt: "Marshall - Âm Thanh Đỉnh Cao - Giá Hợp Lý"
                },
                {
                    id: 203,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-acton-2-5116-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                {
                    id: 204,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-acton-2-5118-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                // Giải nhiệt mùa hè
                {
                    id: 205,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bang-olufsen-beolit-20-5395-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                {
                    id: 206,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bang-olufsen-beolit-20-5396-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                {
                    id: 207,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bose-soundlink-revolve-plus-ii-5397-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                {
                    id: 208,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bose-soundlink-revolve-plus-ii-5398-thumb.png",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                {
                    id: 209,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/25/loa-bluetooth-jbl-partybox-encore-essential-1.jpg",
                    imgAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè"
                },
                // balo, túi
                {
                    id: 210,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/balo-acer-predator-suv-1475-thumb.png",
                    imgAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ"
                },
                {
                    id: 211,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/balo-lenovo-156-laptop-everyday-b510-1637-thumb.png",
                    imgAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ"
                },
                {
                    id: 212,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/28/balo-acer-predator-utility-thinkpro-01.png",
                    imgAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ"
                },
                {
                    id: 213,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/tui-chong-soc-tomtoc-360-protective-13-1748-thumb.png",
                    imgAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ"
                },
                {
                    id: 214,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/balo-laptop-da-nang-reeyee-15-ry10071008-1817-thumb.png",
                    imgAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ"
                },                
                // phần mềm
                {
                    id: 230,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/16/1-600x600.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 231,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/16/3-600x600-1.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 232,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/8/10/office-home-student-2021-thinkpro-01.jpeg",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                // laptop giá rẻ
                {
                    id: 233,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/acer-nitro-5-15-2021-amd-1899-thumb.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 234,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/apple-macbook-pro-16-m1-thinkpro-1.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 235,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/17/asus-vivobook-15-pro-oled-thinkp.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 236,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/17/msi-modern-md241pw-238inch-thinkpro-07-thinkpro.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
                {
                    id: 237,
                    srcImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/17/lg-gram-16-2022-16z90q-gah52a5-thinkpro-01-thinkpro-NmT.png",
                    imgAlt: "LG gram nhẹ mức giá - khỏe hiệu năng"
                },
            ],
            // indexSrc = 0,
            listLastImgPromo: [
                // Sale năm mới
                {
                    id: 999,
                    srcLastImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-5693-thumb.png",
                    imgLastAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè",
                    promoInven: "+24"
                },
                // marshall
                {
                    id: 1000,
                    srcLastImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-marshall-acton-2-5119-thumb.png",
                    imgLastAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè",
                    promoInven: "+31"
                },
                // giải nhiệt mùa hè
                {
                    id: 1001,
                    srcLastImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/loa-bluetooth-harman-kardon-onyx-studio-8-5534-thumb.png",
                    imgLastAlt: "Âm Thanh Đỉnh Cao - Giải nhiệt mùa hè",
                    promoInven: "+47"
                },
                // balo, túi
                {
                    id: 1002,
                    srcLastImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/balo-laptop-da-nang-reeyee-17-ry10181019-1818-thumb.png",
                    imgLastAlt: "Xả Kho Balo, Túi - Bảo Vệ Đồ Công Nghệ",
                    promoInven: "+60"
                },
                // laptop giá rẻ
                {
                    id: 1006,
                    srcLastImgPromo: "https://images.thinkgroup.vn/unsafe/200x200/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-17-2022-4478-thumb.png",
                    imgLastAlt: "LG gram nhẹ mức giá - khỏe hiệu năng",
                    promoInven: "+11"
                },
            ],
            scrollPositionPromo: 0,
            maxScrollPosition: null,
            // indexItemPromo: 0,
            // indexSrc: 0
        };
    },
    mounted() {
        this.shouldChangeColorNext()
    },
    methods: {
        scrollPrevPromo() {
            const container = this.$refs.specialPromotionContainer;
            this.scrollPositionPromo -= 488 + 14;
            if (this.scrollPositionPromo < 0) {
                this.scrollPositionPromo = 0;
            }
            container.scrollTo({
                left: this.scrollPositionPromo,
                behavior: 'smooth',
            });
        },
        scrollNextPromo() {
            const container = this.$refs.specialPromotionContainer;
            this.scrollPositionPromo += 488 + 14;
            const maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPositionPromo > maxScrollPosition) {
                this.scrollPositionPromo = maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPositionPromo,
                behavior: 'smooth',
            });
        },
        shouldChangeColorNext() {
            const container = this.$refs.specialPromotionContainer;
            if(!container) return;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth
        }
    },
    computed: {
        buttonStylesPrev() {
            const changeColorPrev = this.scrollPositionPromo > 0
            return {
                backgroundColor: changeColorPrev ? '#0065EE' : '#E6E8EA',
                color: changeColorPrev ? '#FFFFFF' : '#6B7075'
            };
        },
        buttonStylesNext() {
            const changeColorNext = this.scrollPositionPromo < this.maxScrollPosition
            return {
                backgroundColor: changeColorNext ? '#0065EE' : '#E6E8EA',
                color: changeColorNext ? '#FFFFFF' : '#6B7075'
            };
        },
        // renderListItemPromo() {
        //     const startItem = this.indexItemPromo * 5;
        //     const endItem = startItem + 4;
        //     const srcIndex = this.indexSrc;
        //     return srcIndex >= startItem && srcIndex <= endItem
        // }
    }
}
</script>

<style scoped>
.buttonPREVClassPromo {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 40%;
    border-radius: 9999px; /* hoặc giá trị lớn để tạo hình tròn */
    padding: 0.5rem;
}
.buttonNEXTClassPromo {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem;
}
</style>