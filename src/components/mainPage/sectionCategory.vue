<template>
    <section class="section-category mt-12">
        <h2 class="font-semibold text-[28px] leading-[40px]">Danh mục</h2>
        <div class="mt-5 relative">
            <div class="py-6 rounded overflow-hidden bg-[#FFFFFF]">
                <!-- body danh mục -->
                <div class="px-9 ml-auto mr-auto relative z-10">
                    <!-- list danh mục main body -->
                    <div ref="cateProductContainer"
                        class="overflow-x-hidden overscroll-auto box-content flex h-full w-full z-10 relative duration-300 transition-transform"
                        style="transform: translate3d(0px, 0px, 0px);">
                        <div v-for="(cateItem, index) in cateItems" :key="index"
                            class="w-32 mr-6 flex-shrink-0 h-full relative">
                            <router-link :to="cateItem.to"
                                class="flex flex-col justify-center px-3 pb-1 rounded-xl transition-all">
                                <div>
                                    <img :src="cateItem.cateImgSrc" :alt="cateItem.cateImgAlt">
                                </div>
                                <span class="block mt-2 text-center font-semibold">
                                    {{ cateItem.cateItemName }}
                                </span>
                                <span class="block mt-1 text-center text-sm">
                                    {{ cateItem.cateItemQuantity }}
                                </span>
                            </router-link>
                        </div>
                    </div>
                    <!-- button prev danh mục main body -->
                    <buttonPREV 
                        :scrollFunction="scrollPrev" 
                        :extraClassesPrev="'buttonPREVClassCate'"
                        :scroll-position-prev="scrollPositionCate"
                        :button-styles-prev="buttonStylesCatePrev">
                    </buttonPREV>
                    <buttonNEXT 
                        :scrollFunction="scrollNext" 
                        :extraClassesNext="'buttonNEXTClassCate'"
                        :scroll-position-next="scrollPositionCate"
                        :button-styles-next="buttonStylesCateNext">
                    </buttonNEXT>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import buttonPREV from '@/components/sharedVue/button/buttonPREV.vue';
import buttonNEXT from '@/components/sharedVue/button/buttonNEXT.vue';
export default {
    components: {
        buttonNEXT,
        buttonPREV,
    },
    data() {
        return {
            // shouldChangeColorCateNext: false,
            scrollPositionCate: 0,
            maxScrollPosition: null,
            cateItems: [
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461.png",
                    cateImgAlt: "Laptop",
                    cateItemName: "Laptop",
                    cateItemQuantity: "135 sản phẩm",
                    to: "/Laptop"
                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-3.png",
                    cateImgAlt: "Bàn phím",
                    cateItemName: "Bàn phím",
                    cateItemQuantity: "59 sản phẩm",
                    to: "/Ban-phim"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2.png",
                    cateImgAlt: "Chuột",
                    cateItemName: "Chuột",
                    cateItemQuantity: "16 sản phẩm",
                    to: "/Chuot-may-tinh"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2022/1/14/balo-tui.png",
                    cateImgAlt: "Balo, túi",
                    cateItemName: "Balo, túi",
                    cateItemQuantity: "31 sản phẩm",
                    to: "/Balo-Tui"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-8.png",
                    cateImgAlt: "Cổng chuyển đổi",
                    cateItemName: "Cổng chuyển đổi",
                    cateItemQuantity: "7 sản phẩm",
                    to: "/Cong-chuyen-doi"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-13.png",
                    cateImgAlt: "Giá đỡ Laptop/Tablet",
                    cateItemName: "Giá đỡ Laptop/Tablet",
                    cateItemQuantity: "9 sản phẩm",
                    to: "/Gia-do-laptop"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-14.png",
                    cateImgAlt: "Phần mềm",
                    cateItemName: "Phần mềm",
                    cateItemQuantity: "3 sản phẩm",
                    to: "/Phan-mem"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-7.png",
                    cateImgAlt: "Màn hình",
                    cateItemName: "Màn hình",
                    cateItemQuantity: "2 sản phẩm",
                    to: "/Man-hinh"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2 copy.png",
                    cateImgAlt: "Máy chơi game",
                    cateItemName: "Máy chơi game",
                    cateItemQuantity: "35 sản phẩm",
                    to: "/Game-console"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-1 copy.png",
                    cateImgAlt: "Ghế công thái học",
                    cateItemName: "Ghế công thái học",
                    cateItemQuantity: "31 sản phẩm",
                    to: "/Ghe-cong-thai-hoc"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/18/logo-ban-nang-ha-thinkpro-01.png",
                    cateImgAlt: "Bàn nâng hạ",
                    cateItemName: "Bàn nâng hạ",
                    cateItemQuantity: "17 sản phẩm",
                    to: "/Ban-nang-ha"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-12.png",
                    cateImgAlt: "Ram",
                    cateItemName: "Ram",
                    cateItemQuantity: "9 sản phẩm",
                    to: "/Ram-may-tinh"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-11.png",
                    cateImgAlt: "Ổ cứng",
                    cateItemName: "Ổ cứng",
                    cateItemQuantity: "16 sản phẩm",
                    to: "/O-cung"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-5.png",
                    cateImgAlt: "Âm thanh",
                    cateItemName: "Âm thanh",
                    cateItemQuantity: "29 sản phẩm",
                    to: "/Am-thanh"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2022/3/15/arm-man-hinh-gia-tot-thinkpro.png",
                    cateImgAlt: "Arm màn hình",
                    cateItemName: "Arm màn hình",
                    cateItemQuantity: "9 sản phẩm",
                    to: "/Arm-Man-hinh"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2022/12/14/AQUA_05.png",
                    cateImgAlt: "Nội thất",
                    cateItemName: "Nội thất",
                    cateItemQuantity: "2 sản phẩm",
                    to: "/Noi-that"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2023/7/18/ban-ghe-tre-em-thinkpro-1-thinkpro.png",
                    cateImgAlt: "Bàn ghế trẻ em",
                    cateItemName: "Bàn ghế trẻ em",
                    cateItemQuantity: "1 sản phẩm",
                    to: "/Ban-ghe-tre-em"

                },
                {
                    cateImgSrc: "https://images.thinkgroup.vn/unsafe/300x300/https://media-api-beta.thinkpro.vn/media/core/categories/2023/10/21/gfbeher-thinkpro.png",
                    cateImgAlt: "Máy chiếu",
                    cateItemName: "Máy chiếu",
                    cateItemQuantity: "4 sản phẩm",
                    to: "/Laptop"
                }
            ],
        }
        
    },
    mounted() {
        this.shouldChangeColorCateNext()
    },
    methods: {
        scrollPrev() {
            const container = this.$refs.cateProductContainer;
            this.scrollPositionCate -= 150;
            if (this.scrollPositionCate < 0) {
                this.scrollPositionCate = 0;
            }
            container.scrollTo({
                left: this.scrollPositionCate,
                behavior: 'smooth',
            });
        },
        scrollNext() {
            const container = this.$refs.cateProductContainer;
            this.scrollPositionCate += 150;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPositionCate > this.maxScrollPosition) {
                this.scrollPositionCate = this.maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPositionCate,
                behavior: 'smooth',
            });
        },
        shouldChangeColorCateNext() {
            // Điều kiện để xác định có nên thay đổi màu sắc hay không
            const container = this.$refs.cateProductContainer;
            if(!container) return;            
            this.maxScrollPosition = container.scrollWidth - container.clientWidth;
        },
    },
    computed: {
        buttonStylesCatePrev() {
            const shouldChangeColorCatePrev = this.scrollPositionCate > 0
            return {
                backgroundColor: shouldChangeColorCatePrev ? '#0065ee' : '#E6E8EA',
                color: shouldChangeColorCatePrev ? '#FFFFFF' : '#6B7075',
            };
        },
        buttonStylesCateNext() {
            const shouldChangeColorCateNext = this.scrollPositionCate < this.maxScrollPosition;
            return {
                backgroundColor: shouldChangeColorCateNext ? '#0065ee' : '#E6E8EA', 
                color: shouldChangeColorCateNext ? '#FFFFFF' : '#6B7075',                
            };
        },        
    },
}
</script>

<style scoped>
.buttonPREVClassCate {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem;
}
.buttonNEXTClassCate {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 40%;
    border-radius: 9999px;
    padding: 0.5rem;
}
</style>