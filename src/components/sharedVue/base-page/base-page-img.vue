<template>
    <div>
        <SharedCSSMainpage></SharedCSSMainpage>
        <template v-if="imgPromotion">
            <div class="h-[410px]">
                <img :src="imgPromotion" :alt="altImgPromotion" class="imgPromo">
            </div>
        </template>        
        <div class="p-6 bg-white">
            <h1 class="text-2xl leading-[34px] font-semibold">
                {{ textHeadPromo }}
            </h1>
            <template v-if="productPromo">
                <div class="items-center flex mt-6">
                    <div class="flex-1 overflow-x-hidden">
                        <div class="overflow-x-auto overflow-y-hidden flex space-x-2">
                            <div v-for="item in productPromo" 
                            :key="item.allProduct" 
                            class="div-item promo bg-[#0065EE] text-white"
                            :class="{ 'promo-selected': selectedItem === item.allProduct, 'promo': selectedItem !== item.allProduct }"
                            @click="selectItem(item.allProduct)">
                                <div class="text-sm leading-[150%] items-center flex space-x-1">
                                    <span>{{ item.allProduct }}</span>
                                    <span>{{ item.quantityProduct }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>            
        </div> 
    </div>               
</template>

<script>
import SharedCSSMainpage from '../sharedCSS/sharedCSSMainpage.vue';
export default {
    components: {
        SharedCSSMainpage
    },
    props: {
        imgPromotion: String,
        altImgPromotion: String,
        textHeadPromo: String,
        productPromo: Array,
    },
    data() {
        return {
            selectedItem: null
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item
        }
    },
    mounted() {
        if(this.productPromo.length > 0) {
            this.selectedItem = this.productPromo[0].allProduct;
        }
    }
}
</script>

<style scoped>
.imgPromo {
    transition: opacity 50ms;
}
.promo,
.promo-selected {
  border-radius: 0.5rem;
  padding: 10px 0.75rem;
  font-weight: 600;
}

.promo {
  background-color: #f6f9fc;
  color: #1c1f23;
}

.promo-selected {
  background-color: #0065ee;
  color: #fff;
}
</style>