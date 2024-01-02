<template>
    <div class="mt-4">
        <SharedStyles></SharedStyles>
        <section>
            <div class="productContainer container mr-auto ml-auto grid-cols-5">
                <router-link v-for="itemProduct in displayedProductList" :key="itemProduct.id" class="productItems bg-white shadow-none h-full" to="">
                    <div class="absolute top-4 left-4 z-[1] flex items-center space-x-1"></div>
                    <div class="relative">
                        <div class="productImage">
                            <img :src="itemProduct.productImg" :alt="itemProduct.productName">
                        </div>
                    </div>
                    <div class="itemProductInfor space-x-1">
                        <div class="itemTitle">{{ itemProduct.productName }}</div>
                        <div class="itemPrice space-x-1">
                            <span class="text-[#6B7075] text-xs leading-[150%]">Từ</span>
                            <span class="text-[#FE3464] font-semibold">{{ itemProduct.productPrice }}</span>
                            <div v-if="itemProduct.productDiscount" class="bg-[#FFF5F7] text-[#FE3464] tagItem">
                                {{ itemProduct.productDiscount }}
                            </div>
                        </div>
                        <div class="items-center flex space-x-1">
                            <span class="text-[#6B7075] text-[12px] leading-[150%]">Màu</span>
                            <div class="colorProduct" :style="itemProduct.productColor"></div>
                            <div v-if="itemProduct.productColor2" class="colorProduct" :style="itemProduct.productColor2"></div>
                            <div v-if="itemProduct.productColor3" class="colorProduct" :style="itemProduct.productColor3"></div>
                            <div v-if="itemProduct.productColor4" class="colorProduct" :style="itemProduct.productColor4"></div>
                        </div>
                        <template v-if="itemProduct.productGift">
                            <hr class="mt-3">
                            <div class="itemGift">
                                <span>{{ itemProduct.productGift }}</span>
                            </div>
                        </template>                        
                    </div>
                </router-link>
            </div>
            <div v-if="productInfor.length > 20" class="mt-6 flex justify-center">
                <button @click="loadProduct" class="text-[#0065EE] w-[388px] px-[0.75rem] bg-white buttonLoad">
                    {{ loadMoreProducts ? 'Xem thêm sản phẩm' : 'Thu gọn' }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import SharedStyles from '@/components/sharedVue/sharedCSS/sharedCSSProductContainer.vue'
export default {
    components: {
        SharedStyles
    },
    props: {
        productInfor: Array,        
    },
    data() {
        return {
            displayedProducts: 20,
            loadMoreProducts: true
        }
    },
    computed: {
        displayedProductList() {
            return this.productInfor.slice(0, this.displayedProducts)
        }
    },
    methods: {
        loadProduct() {
            if (this.loadMoreProducts) {
                this.displayedProducts += 20;
                if (this.displayedProducts >= this.productInfor.length) {
                    this.loadMoreProducts = false
                }
            }
            else {
                this.displayedProducts -= 20;
                if (this.displayedProducts <= 20) {
                    this.loadMoreProducts = true;
                }
            }
        }
    }
}
</script>