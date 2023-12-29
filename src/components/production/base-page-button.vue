<template>
    <div>
        <SharedStylesMainpage></SharedStylesMainpage>
        <div class="container mr-auto ml-auto">
            <section class="category-overview">
                <div class="p-6 bg-white">
                    <h1 class="text-2xl font-semibold leading-[34px]">{{ pContent }}</h1>
                    <p class="mt-2 text-sm leading-[150%] max-w-[600px]">
                        {{ pText }}
                    </p>
                    <hr class="my-4">
                    <div class="align-center flex">
                        <div class="flex-1 overflow-x-hidden overscroll-auto">
                            <div ref="nameBranchContainer" class="overflow-x-hidden flex">
                                <div class="align-center flex space-x-2">
                                    <router-link v-for="itemBranch in itemsBranch" :key="itemBranch.nameBranch" 
                                        class="overview" to="/Ban-phim">
                                        <div class="bg-[#F6F9FC] text-[#1C1F23] div-overview div-item">
                                            {{ itemBranch.nameBranch }}
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <ButtonPrev 
                            :scrollFunction="scrollPrev" 
                            :extraClassesPrev="'buttonPREVClassMainpage'"
                            :button-styles-prev="buttonStylesPrev"
                            :scroll-position-prev="scrollPosition">                            
                        </ButtonPrev>
                        <ButtonNext 
                            :scrollFunction="scrollNext" 
                            :extraClassesNext="'buttonNEXTClassMainpage'"
                            :button-styles-next="buttonStylesNext"
                            :scroll-position-next="scrollPosition">                                
                        </ButtonNext>
                    </div>
                </div>
            </section>
        </div>
        <div class="section-sort" >
            <div class="container mr-auto ml-auto py-3">
                <div class="align-center flex">
                    <div class="flex-1 overflow-x-hidden">
                        <div class="overflow-x-auto overflow-y-hidden flex">
                            <div class="flex align-center">
                                <!-- còn thiếu 1 đoạn div để sort nữa, làm sau -->
                                <div v-for="itemButton in sortButton" :key="itemButton.nameButton" class="mr-3">
                                    <div class="items-filter">
                                        <button class="button-filter bg-white">
                                            <span class="text">
                                                {{ itemButton.nameButton }}
                                            </span>
                                            <i class="ml-1 w-3 h-3">
                                                <img :src="iconButtonDown" alt="Down">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 container mr-auto ml-auto flex items-center justify-between">
            <div class="items-center flex space-x-2">

                <!-- <label role="switch" class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" checked>
                    <span class="bg-[#E6E8EA] rounded-full block h-6 p-[3px] w-10 button-control">
                        <span class="bg-white shadows-md rounded-full block h-[18px] w-[18px] button-inside"></span>
                    </span>
                </label> -->
                <!-- <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" v-model="isChecked">
                    <div class="w-11 h-6 bg-[#E6E8EA] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[#E6E8EA] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label> -->
                
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" v-model="isChecked">
                    <div class="w-11 h-6 bg-[#E6E8EA] rounded-full peer dark:bg-[#E6E8EA] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>                        
                </label>  
                <span class="text-xs leading-[150%] font-semibold">So sánh</span>                 
            </div>
            <div class="sortButton">
                <button class="bg-white button-filter">
                    <span class="text">Sắp xếp: Nổi bật nhất</span>
                    <i class="ml-1 w-3 h-3">
                        <img :src="iconButtonDown" alt="Down">
                    </i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import SharedStylesMainpage from '../sharedVue/sharedCSS/sharedCSSMainpage.vue';
import ButtonPrev from '../sharedVue/button/buttonPREV.vue';
import ButtonNext from '../sharedVue/button/buttonNEXT.vue';
export default {
    components: {
        SharedStylesMainpage,
        ButtonPrev,
        ButtonNext
    },
    props: {
        pContent: String,
        pText: String,
        itemsBranch: Array,
        sortButton: Array
    },
    data() {
        return {
            scrollPosition: 0,
            iconButtonDown: require("@/assets/iconSVG/laptopIconSVG/semi-chervon-down.svg"),
            maxScrollPosition: null,
        }
    },
    mounted() {
        this.shouldChangeColorNext()
    },
    methods: {
        scrollPrev() {
            const container = this.$refs.nameBranchContainer;
            this.scrollPosition -= 350;
            if (this.scrollPosition < 0) {
                this.scrollPosition = 0;
            }
            container.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        },
        scrollNext() {
            const container = this.$refs.nameBranchContainer;
            this.scrollPosition += 350;
            const maxscrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPosition > maxscrollPosition) {
                this.scrollPosition = maxscrollPosition;
            }
            container.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        },
        shouldChangeColorNext() {
            const container = this.$refs.nameBranchContainer;
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