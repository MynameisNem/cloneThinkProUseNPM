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
                    <div class="flex-1">
                        <div class="flex">
                            <div class="flex align-center relative">
                                <!-- còn thiếu 1 đoạn div để sort nữa, làm sau -->
                                <div v-for="itemButton in sortButton" :key="itemButton.nameButton" class="mr-3">
                                    <div class="items-filter">
                                        <div>
                                            <button class="button-filter bg-white" @click="clickShowBox(itemButton.nameButton)">
                                                <span class="text">
                                                    {{ itemButton.nameButton }}
                                                </span>
                                                <i class="ml-1 w-3 h-3">
                                                    <img :src="iconButtonDown" alt="Down">
                                                </i>
                                            </button>
                                        </div>
                                        <div class="z-[19] w-[675px] absolute sort-box" v-show="showSortBox">
                                            <div class="max-h-[400px] bg-white rounded-[0.25rem] overflow-auto">
                                                <div class="py-2 px-3">
                                                    <div class="mb-[0.5rem]">
                                                        <label class="inline-flex items-center cursor-pointer relative">
                                                            <input type="radio" class="sr-only">
                                                            <div class="border-[#0065EE] border-[5px] radio-checkmark">
                                                            </div>
                                                            <span
                                                                class="text-[#1C1F23] text-[14px] leading-[150%] ml-[0.5rem]">Tất
                                                                cả</span>
                                                        </label>
                                                    </div>
                                                    <div class="grid gap-x-4 gap-y-1 sort-content" v-if="selectData?.itemsSortButton?.length">
                                                        <div v-for="item in selectData.itemsSortButton" :key="item.nameButton">
                                                            <label class="items-center cursor-pointer inline-flex relative">
                                                                <input type="checkbox" class="sr-only"
                                                                    :id="item.name">
                                                                <div class="check-mark"></div>
                                                                <span
                                                                    class="text-[#1C1F23] text-[14px] leading-[150%] ml-[.5rem] flex-1"
                                                                    :for="item.name">
                                                                    {{ item.name }}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
import SharedStylesMainpage from '../sharedCSS/sharedCSSMainpage.vue';
import ButtonPrev from '../button/buttonPREV.vue';
import ButtonNext from '../button/buttonNEXT.vue';
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
            isChecked: false,
            selectData: null,
            showSortBox: false
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
        },
        clickShowBox(nameButton) {
            this.showSortBox = !this.showSortBox
            this.selectData = this.sortButton.find((item) => item.nameButton === nameButton)
        },
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
        },
        notNull() {
            return this.itemsBranch && this.itemsBranch.length > 0;
        }
    }
}
</script>
<style scoped>
.sort-box {
    inset: 0px auto auto 0px;
    margin: 0px;
    transform: translate(0px, 60px);
    border-radius: 0.25rem;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.3);
}

.radio-checkmark {
    border-radius: 9999px;
    border-style: solid;
    display: block;
    height: 1rem;
    position: relative;
    width: 1rem;
}

.sort-content {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
}

.check-mark {
    border-style: solid;
    border-radius: 0.125rem;
    border-width: 1.5px;
    flex-shrink: 0;
    height: 1rem;
    position: relative;
    width: 1rem;
}
</style>