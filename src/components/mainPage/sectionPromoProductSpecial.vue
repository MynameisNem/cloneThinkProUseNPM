<template>
    <div class="mt-6">
        <div class="promoProductSpecial">
            <div ref="promoProductSpecialContainer"
                class="box-content flex h-full relative w-full z-[1] overflow-x-hidden overscroll-auto space-x-3"
                style="transition-property: transform;">
                <!-- product promo, cần xử lý, chưa xong -->
                <div v-for="itemInforPromo in listSalePromo"
                    :key="itemInforPromo.id"
                    class="cursor-pointer flex-shrink-0 h-full relative w-[288px]"
                    style="transition-property: transform;">
                    <router-link class="rounded-xl cursor-pointer flex flex-col overflow-hidden relative ring-0 bg-[#FFFFFF]"
                    :to="{ name: 'detailsProduct', params: {slug: itemInforPromo.slugPath , id: itemInforPromo.id} }">
                        <div
                            class="absolute top-4 left-4 z-[1] flex items-center space-x-1">
                        </div>
                        <div class="relative">
                            <div class="relative"
                                style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                                <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                    :src="itemInforPromo.productImg"
                                    :alt="itemInforPromo.productName">
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col p-4">
                            <div class="text-sm font-semibold leading-[150%]">
                                {{ itemInforPromo.productName }}
                            </div>
                            <div class="items-center flex mt-1">
                                <span class="text-[#6B7075] text-xs leading-[150%]">
                                    Từ
                                </span>
                                <span class="ml-1 font-semibold text-[#FE3464]">
                                    {{ itemInforPromo.productPrice }}
                                </span>
                                <div
                                    class="rounded-sm pr-[2px] pl-[2px] leading-[14px] text-[10px] items-center cursor-pointer inline-flex whitespace-nowrap ml-1 text-[#FE3464] bg-[#FFF5F7]">
                                    {{ itemInforPromo.productDiscount }}
                                </div>

                            </div>
                            <template v-if="itemInforPromo.productColor">
                                <div class="items-center flex">
                                    <span class="text-xs text-[#6B7075] leading-[150%]">Màu</span>
                                    <template v-if="itemInforPromo.productColor">
                                        <span class="rounded-sm w-3 h-3 ml-1"
                                        :style="itemInforPromo.productColor">
                                        </span>
                                    </template>
                                    <template v-if="itemInforPromo.productColor2">
                                        <span class="rounded-sm w-3 h-3 ml-1"
                                        :style="itemInforPromo.productColor2">
                                        </span>
                                    </template>
                                    <template v-if="itemInforPromo.productColor3">
                                        <span class="rounded-sm w-3 h-3 ml-1"
                                        :style="itemInforPromo.productColor3">
                                        </span>
                                    </template>
                                    <template v-if="itemInforPromo.productColor4">
                                        <span class="rounded-sm w-3 h-3 ml-1"
                                        :style="itemInforPromo.productColor4">
                                        </span>
                                    </template>
                                </div>
                            </template>                   
                            <div class="mt-1 flow-root"
                            style="row-gap: calc(0.5rem*-1); column-gap: calc(0.5rem*-1);">
                                <template v-if="itemInforPromo.productShortInfor1">
                                    <div class="flex flex-wrap ml-[calc(0.5rem*-1)] mt-[calc(0.5rem*-1)]">
                                        <div
                                            class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                            {{ itemInforPromo.productShortInfor1 }}
                                        </div>
                                        <template v-if="itemInforPromo.productShortInfor2">
                                            <div class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                                {{ itemInforPromo.productShortInfor2 }}
                                            </div>
                                        </template>
                                        <template v-if="itemInforPromo.productShortInfor3">
                                            <div class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                                {{ itemInforPromo.productShortInfor3 }}
                                            </div>
                                        </template>
                                        <template v-if="itemInforPromo.productShortInfor4">
                                            <div class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                                {{ itemInforPromo.productShortInfor4 }}
                                            </div>
                                        </template>
                                        <template v-if="itemInforPromo.productShortInfor5">
                                            <div class="rounded cursor-pointer inline-flex text-xs whitespace-nowrap px-2 py-[2px] ml-2 mt-2 text-[#1C1F23] bg-[#F6F9FC] leading-[150%]">
                                                {{ itemInforPromo.productShortInfor5 }}
                                            </div>
                                        </template>                                      
                                    </div>
                                </template>
                                <template v-if="itemInforPromo.productGift">
                                    <hr class="mt-3">
                                    <div class="text-sm underline items-center flex mt-3">
                                        {{ itemInforPromo.productGift }}
                                    </div>
                                </template>
                            </div>                            
                        </div>
                    </router-link>
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
    props: {
        listSalePromo: Array
    },
    data() {
        return {
            scrollPositionPromoProductSpecial: 0,            
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