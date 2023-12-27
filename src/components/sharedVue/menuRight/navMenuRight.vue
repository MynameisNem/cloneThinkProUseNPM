<template>
    <div class="flex-1 px-6 py-5 bg-[#F6F9FC] rounded">
        <a class="font-semibold text-[#0065EE] flex items-center">
            <span class="flex-shrink-0">Xem tất cả {{ nameProduct }}</span>
            <i class="w-4 h-4 flex-shrink-0 ml-1">
                <img :src="arrowRight" alt="GO">
            </i>
        </a>
        <div class="mt-3 grid grid-cols-2 gap-4">
            <div v-if="listNav" class="space-y-2">
                <div class="font-semibold">
                    Hoặc chọn {{ nameProduct }} theo thương hiệu
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="item in listNav"
                        :key="item.nameBranch">
                        <a class="flex items-center space-x-1" href="">
                            <span class="text-[14px] leading-[150%]">
                                {{ item.nameBranch }}
                            </span>
                            <i class="w-4 h-4 text-[#0065EE]">
                                <img :src="arrowTopRight" alt="GO">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <div>
                    <span class="font-semibold">Khoảng giá</span>
                    <div class="mt-3 flex flex-col space-y-2">
                        <div v-for="itemPrice in listPrice"
                            :key="itemPrice.price">
                            <a class="flex space-x-1 items-center" href="">
                                <span class="text-[14px] leading-[150%]">
                                    {{ itemPrice.price }}
                                </span>
                                <i class="w-4 h-4">
                                    <img :src="arrowTopRight" alt="GO">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-if="listRequire">
                    <span class="font-semibold">Nhu cầu</span>
                    <div class="mt-3 flex flex-col space-y-2">
                        <div v-for="itemRequire in listRequire"
                            :key="itemRequire.require">
                            <a class="flex space-x-1 items-center" href="">
                                <span class="text-[14px] leading-[150%]">
                                    {{ itemRequire.require }}
                                </span>
                                <i class="w-4 h-4 text-[#0065EE]">
                                    <img :src="arrowTopRight" alt="GO">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nameProduct: String,
        listNav: Array,
        listPrice: Array,
        listRequire: Array
    },
    data() {
        return {
            arrowRight: require("@/assets/iconSVG/arrowRight.svg"),
            arrowTopRight: require("@/assets/iconSVG/arrowTopRight.svg"),
        }
    }
}
</script>