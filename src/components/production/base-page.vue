<template>
    <div>
        <div class="container mr-auto ml-auto">
            <SharedStylesMainpage></SharedStylesMainpage>
            <section class="category-overview">
                <div class="p-6 bg-white">
                    <h1 class="text-2xl font-semibold leading-[34px]">{{ pContent }}</h1>
                    <p class="mt-2 text-sm leading-[150%] max-w-[600px]">
                        {{ pText }}
                    </p>
                    <template v-if="notNull">
                        <hr class="my-4">
                        <div class="align-center flex">
                            <div class="flex-1 overflow-hidden">
                                <div class="overflow-x-auto overflow-y-hidden flex">
                                    <div class="align-center flex space-x-2">
                                        <router-link v-for="itemBranch in itemsBranch" :key="itemBranch.nameBranch"
                                            class="overview" to="/Laptop">
                                            <div class="bg-[#F6F9FC] text-[#1C1F23] div-overview div-item">
                                                {{ itemBranch.nameBranch }}
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>                    
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
import SharedStylesMainpage from '@/components/sharedVue/sharedCSS/sharedCSSMainpage.vue'

export default {
    components: {
        SharedStylesMainpage
    },
    data() {
        return {
            iconButtonDown: require("@/assets/iconSVG/laptopIconSVG/semi-chervon-down.svg"),
        }
    },
    props: {
        pContent: String,
        pText: String,
        itemsBranch: Array,
        sortButton: Array
    },
    computed: {
        notNull() {
            return this.itemsBranch && this.itemsBranch.length > 0;
        }
    }
}
</script>

<style scoped>
</style>