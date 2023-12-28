<template>
    <nav class="the-navigation py-3 sticky h-[88px] top-0 z-20 bg-white">
        <div class="container flex items-center h-full mr-auto ml-auto w-full">
            <div class="menu flex-shrink-0 w-[130px]">
                <button @click="changeMenu" class="menuButtonNav">
                    <i v-if="iconOpenMenu" class="iNav" 
                    :class="{ 'iNavClose': iconOpenMenu, 'iNavOpen': !iconOpenMenu }">
                        <img src="@/assets/iconSVG/navIconSVG/closeMenuNav.svg" alt="Close">
                    </i>
                    <i v-else class="iNav" 
                    :class="{ 'iNavClose': iconOpenMenu, 'iNavOpen': !iconOpenMenu }">
                        <img src="@/assets/iconSVG/navIconSVG/openMenuNav.svg" alt="Open">
                    </i>
                    <span class="font-semibold text-md whitespace-nowrap">Danh mục</span>
                </button>
                <navMenuFull :tab-selected="tabSelected" :isNavSticky="isNavSticky"></navMenuFull>                
            </div>
            <div class="w-[1px] h-10 bg-[#F0F2F4] mx-[12px] my-[0px]"></div>
            <div style="width: calc(100% - 130px - 12px * 2)">
                <div class="items-center flex w-full">
                    <div class="overflow-x-hidden overscroll-auto flex-1">
                        <div ref="productListContainer" class="overflow-x-hidden flex">
                            <!-- thẻ a list danh mục nhanh -->
                            <div class="flex items-center space-x-2">
                                <router-link v-for="itemFast in listFastMenu" :key="itemFast.fastItem" :to="itemFast.to"
                                    class="flex-shrink-0 flex items-center space-x-2 px-3 py-2 hover:bg-[#F6F9FC] rounded-lg">
                                    <img :src="itemFast.fastSrc" :alt="itemFast.fastItem"
                                        class=" w-12 h-12 rounded-lg">
                                    <span class="font-semibold text-[14px] leading-[150%] whitespace-nowrap">
                                        {{ itemFast.fastItem }}
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="ml-3 space-x-4 flex py-[6px]">
                        <buttonPREV 
                            :scrollFunction="scrollPrev" 
                            :extraClassesPrev="'buttonPREVClassNav'"
                            :button-styles-prev="buttonStylesPrev"
                            :scroll-position-prev="scrollPosition">
                        </buttonPREV>
                        <buttonNEXT 
                            :scrollFunction="scrollNext" 
                            :extraClassesNext="'buttonNEXTClassNav'"
                            :button-styles-next="buttonStylesNext"
                            :scroll-position-next="scrollPosition">
                        </buttonNEXT>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import navMenuFull from './navMenuFull.vue';
import buttonPREV from './button/buttonPREV.vue';
import buttonNEXT from './button/buttonNEXT.vue';
export default {
    components : {
        navMenuFull,
        buttonPREV,
        buttonNEXT
    },
    data() {
        return {
            scrollPosition: 0,
            tabSelected: false,
            iconOpenMenu: false,
            isNavSticky: false,
            maxScrollPosition: null,
            listFastMenu: [
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461.png",
                    fastItem: "Laptop",
                    to: "/Laptop"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-3.png",
                    fastItem: "Bàn phím",
                    to: "/Ban-phim"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-5.png",
                    fastItem: "Âm thanh",
                    to: "/Am-thanh"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-1 copy.png",
                    fastItem: "Ghế công thái học",
                    to: "/Ghe-cong-thai-hoc"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/18/logo-ban-nang-ha-thinkpro-01.png",
                    fastItem: "Bàn nâng hạ",
                    to: "/Ban-nang-ha"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2023/7/18/ban-ghe-tre-em-thinkpro-1-thinkpro.png",
                    fastItem: "Bàn ghế trẻ em",
                    to: "/Ban-ghe-tre-em"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2 copy.png",
                    fastItem: "Máy chơi game",
                    to: "/Game-console"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2022/1/14/balo-tui.png",
                    fastItem: "Balo, túi",
                    to: "/Laptop"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2022/3/15/arm-man-hinh-gia-tot-thinkpro.png",
                    fastItem: "Arm màn hình",
                    to: "/Arm-Man-hinh"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2.png",
                    fastItem: "Chuột",
                    to: "/Chuot-may-tinh"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-7.png",
                    fastItem: "Màn hình",
                    to: "/Man-hinh"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-8.png",
                    fastItem: "Cổng chuyển đổi",
                    to: "/Cong-chuyen-doi"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-14.png",
                    fastItem: "Phần mềm",
                    to: "/Phan-mem"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2022/12/14/AQUA_05.png",
                    fastItem: "Nội thất",
                    to: "/Noi-that"
                },
                {
                    fastSrc: "https://images.thinkgroup.vn/unsafe/96x96/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/30/phu-kien-va-setup-thinkpro.png",
                    fastItem: "Phụ kiện & Setup",
                    to: "/Phu-kien-&-Setup"
                },
            ]
        }
    },
    mounted() {
        this.shouldChangeColorNext()
    },
    methods: {
        changeMenu() {
            this.tabSelected = !this.tabSelected;
            this.iconOpenMenu = !this.iconOpenMenu;
            if (this.tabSelected) {
                document.body.style.overflow = 'hidden'
            }
            else {
                document.body.style.overflow = 'auto'
            }
        },
        scrollPrev() {
            const container = this.$refs.productListContainer;
            this.scrollPosition -= 450;
            if (this.scrollPosition < 0) {
                this.scrollPosition = 0;
            }
            container.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        },
        scrollNext() {
            const container = this.$refs.productListContainer;
            this.scrollPosition += 450;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPosition > this.maxScrollPosition) {
                this.scrollPosition = this.maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        },
        handleNavSticky(isSticky) {
            this.isNavSticky = isSticky;
        },
        shouldChangeColorNext() {
            const container = this.$refs.productListContainer;
            if(!container) return;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth
        }
    },
    computed: {
        buttonStylesPrev() {
            const changeColorPrev = this.scrollPosition > 0
            return {
                opacity: changeColorPrev ? '1' : '0.4'
            }
        },
        buttonStylesNext() {
            const changeColorNext = this.scrollPosition < this.maxScrollPosition
            return {
                opacity: changeColorNext ? '1' : '0.4'
            }
        }
    }

}
</script>

<style scoped>
.buttonPREVClassNav {
    opacity: 0.4;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem; /* Hoặc kích thước mong muốn */
    width: 3rem; /* Hoặc kích thước mong muốn */
}
.buttonNEXTClassNav {
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem; /* hoặc kích thước mong muốn */
    width: 3rem; /* Hoặc kích thước mong muốn */
}
.menuButtonNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem; /* Tương đương với h-16 */
    padding: 0 1rem; /* Tương đương với px-4 */
    border-radius: 0.5rem;
}
.menuButtonNav:hover {
    background-color: #F6F9FC;
}
.menuButtonNav > * + * {
    margin-left: 0.5rem;
}
.iNav {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
}
.iNavClose {
    transform: rotate(90deg);
}
.iNavOpen {
    transform: rotate(0deg);
}
</style>