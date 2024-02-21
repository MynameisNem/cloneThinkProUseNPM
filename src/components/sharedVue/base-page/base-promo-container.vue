<template>
    <div class="product-list mt-6">
        <section class=" grid gap-3 grid-cols-5">
            <!-- Thinkpad T16 có quà tặng -->
            <div v-for="(item, index) in inforProduct" :key="item.id" style="grid-gap: 0.75rem">
                <router-link v-if="index < 20" 
                class="bg-[#FFFFFF] cursor-pointer flex flex-col relative overflow-hidden rounded-[0.75rem] h-full"
                :to="{ name: 'detailsProduct', params: {slug: item.slugPath , id: item.id} }">
                    <!--  -->
                    <div class="absolute top-4 left-4 z-[1] flex items-center space-x-1 ">
                    </div>
                    <div class="relative">
                        <div
                            style="padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);--tw-aspect-h: 1; --tw-aspect-w: 1;">
                            <img class="opacity-100 bottom-0 h-full left-0 absolute right-0 top-0 w-full"
                                :src="item.productImg"
                                :alt="item.productName">
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col p-4">
                        <div class="text-sm leading-[150%] font-semibold">
                            {{ item.productName }}
                        </div>
                        <div class="items-center flex mt-1">
                            <span class="text-[#6B7075] leading-[150%] text-xs">
                                Từ
                            </span>
                            <span class="ml-1 font-semibold text-[#FE3464]">
                                {{ item.productPrice }}
                            </span>
                            <div
                                class="rounded-sm pr-[2px] pl-[2px] leading-[14px] text-[10px] items-center cursor-pointer inline-flex whitespace-nowrap ml-1 text-[#FE3464] bg-[#FFF5F7]">
                                {{ item.productDiscount }}
                            </div>
                        </div>
                        <template v-if="item.productColor">
                            <div class="items-center flex">
                                <span class="text-xs text-opacity-100 text-[#6B7075]">Màu</span>
                                <template v-if="item.productColor">
                                    <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="item.productColor"></span>
                                </template>
                                <template v-if="item.productColor2">
                                    <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="item.productColor2"></span>
                                </template>                         
                                <template v-if="item.productColor3">
                                    <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="item.productColor3"></span>
                                </template>
                                <template v-if="item.productColor4">
                                    <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="item.productColor4"></span>
                                </template>
                                <template v-if="item.productColor5">
                                    <span class="rounded-sm w-3 h-3 ml-1"
                                    :style="item.productColor5"></span>
                                </template>
                            </div>
                        </template>                        
                        <template v-if="item.productCpuInfor">
                            <div class="flow-root mt-2"
                            style="--gap-x-negative: calc((8px)*-1); --gap-y-negative: calc((8px)*-1);">
                                <div
                                    class="flex flex-wrap ml-[var(--gap-x-negative)] mt-[var(--gap-x-negative)]">
                                </div>
                            </div>
                            <hr class="my-3">
                            <div class="text-xs leading-[150%]">
                                {{ item.productCpuInfor }}
                                <br>
                                {{ item.productRamInfor }}
                                <br>
                                {{ item.productSsdInfor }}
                                <br>
                                {{ item.productMonitorInfor }}
                                <br>
                                {{ item.productVgaInfor }}
                            </div>
                        </template>                        
                        <template v-if="item.productGift">
                            <hr class="mt-3">
                            <div class="text-sm underline items-center flex mt-3 leading-[150%]">
                                <span>{{ item.productGift }}</span>
                            </div>
                        </template>                        
                    </div>
                </router-link>
            </div>           
        </section>
    </div>
</template>

<script>
export default {
    props: {
        inforProduct: Array
    },
}
</script>