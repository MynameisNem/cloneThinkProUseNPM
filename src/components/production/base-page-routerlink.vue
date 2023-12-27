<template>
    <div>
        <SharedStylesMainpage></SharedStylesMainpage>
        <div class="container mr-auto ml-auto">
            <section class="category-overview">
                <div class="p-6 bg-white">
                    <div v-for="text in interview" :key="text.pContent">
                        <h1 class="text-2xl font-semibold leading-[34px]">{{ text.pContent }}</h1>
                        <p class="mt-2 text-sm leading-[150%] max-w-[600px]">
                            {{ text.pText }}
                        </p>
                    </div>                     
                    <div class="mt-2">
                        <div>
                            <div class="items-center flex">
                                <div class="flex-1 overflow-x-hidden">
                                    <div class="flex overflow-x-auto overflow-y-hidden">
                                        <div class="overflow-hidden">
                                            <div class="flex flex-1 contain overflow-hidden">
                                                <div class="content space-x-6">
                                                    <router-link v-for="itemName in itemsName" 
                                                    :key="itemName.nameBranch" 
                                                    :to="itemName.to"
                                                    @click="selectItem(itemName)"
                                                    :class="{ 'selected-item': itemName === selectedItem }">
                                                        <span class="text-sm leading-[150%]">
                                                            {{ itemName.nameBranch }}
                                                        </span>
                                                    </router-link>                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
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
            <div></div>
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
export default {
    components: {
        SharedStylesMainpage
    },
    props: {
        interview: Array,
        itemsName: Array,
        sortButton: Array,
        itemsBranch: Array
    },
    data() {
        return {
            iconButtonDown: require("@/assets/iconSVG/laptopIconSVG/semi-chervon-down.svg"),
            selectedItem: null,
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
    },
    mounted() {
        if (this.itemsName.length > 0) {
            this.selectedItem = this.itemsName[0];
        }
    },
}
</script>

<style scoped>
.contain {
    contain: content;
}
.content {
    display: flex;
    flex: 1 1 0%;
    padding-top: .5rem;
    padding-bottom: .5rem;
    position: relative;
    white-space: nowrap;
}
.selected-item {
    font-weight: 700;
}
</style>