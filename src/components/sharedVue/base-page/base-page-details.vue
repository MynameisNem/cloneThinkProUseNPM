<template>
    <main class="bg-[#F6F9FC]">
        <div class="container mr-auto ml-auto pb-10">
            <div class="relative flex">
                <div class="sticky inset-0 h-full ml-6 overflow-visible w-2/5 z-10 divLeft">
                    <div class="flex flex-col h-full space-y-4 overflow-auto" 
                    style="max-height: calc(100vh - var(--t-navigation) - 24px); padding: 1px;">
                        <div>
                            <div class="discount-status bg-[#FE3464] text-white">
                                <div class="flex items-center space-x-2">
                                    <i class="w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1rem" height="1rem" 
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <use href="@/assets/iconSVG/productFeaturesSVG/couponTag.svg#coupon"></use>
                                        </svg>
                                    </i>
                                    <div class="flex-1 font-semibold line-clamp-1">
                                        DELL INSPIRON HIỆU SUẤT CAO
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="bg-white rounded p-6 space-y-4">
                            <div class="divide-y space-y-4">
                                <div class="flex flex-col">
                                    <div class="flex items-center space-x-2 text-sm leading-[150%]">
                                        <span>SKU: Inspirion14543003NF</span>
                                    </div>
                                    <div class="mt-2">
                                        <h1 class="text-base leading-[150%] font-semibold">
                                            Dell Inspiron 14 5430 - i7 1360P, 16GB, 1TB, 2.5K - Platinum Silver - Mới, Full box, Nhập khẩu
                                        </h1>
                                    </div>
                                    <div class="mt-2 flex items-center space-x-2">
                                        <div aria-valuemax="5" aria-valuemin="0" aria-valuenow="0" tabindex="0"
                                        class="pointer-events-none rating" style="--icon-size: 16px;">
                                            <button v-for="item in ariaList" :key="item.ariaLabel" class="buttonRatting" :aria-label="item.ariaLabel" style="color: rgb(218, 221, 224)">
                                                <!-- <i style="color: rgb(218, 221, 224)"> -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1rem" height="1rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                        <!-- <path id="ratting" fill="currentColor" d="M10.752 1.904c.393-1.205 2.103-1.205 2.495 0L15.24 8.02h6.447c1.27 0 1.799 1.622.77 2.367l-5.214 3.78 1.992 6.115c.392 1.206-.99 2.208-2.019 
                                                        1.463L12 17.964l-5.215 3.78c-1.028.745-2.411-.257-2.019-1.463l1.992-6.115-5.215-3.78c-1.028-.745-.5-2.367.771-2.367H8.76l1.992-6.115Z"/> -->
                                                        <use href="@/assets/iconSVG/productFeaturesSVG/ratingIcon.svg#rating"></use>
                                                    </svg>
                                                <!-- </i> -->
                                            </button>
                                        </div>
                                        <span class="text-sm leading-[150%]">Chưa có đánh giá</span>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="version">
                                        <div class="flex flex-col pt-4 space-y-3">
                                            <div>
                                                <div class="text-sm leading-[150%] font-semibold text-[#6B7075]">Phiên bản</div>
                                                <div class="mt-2">
                                                    <div class="flexGap">
                                                        <div class="flexGapWrap">
                                                            <label v-for="item in test" :key="item.detailsProduct" :for="item.detailsProduct" class="t-radio">
                                                                <input type="radio" class="sr-only" :value="item.detailsProduct">
                                                                <router-link to="" class="itemRouter">
                                                                    <p class="whitespace-pre-line">
                                                                        <span class="block text-xs font-semibold text-center">
                                                                            {{ item.detailsProduct }}
                                                                        </span>
                                                                    </p>
                                                                </router-link>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="text-sm leading-[150%] font-semibold text-[#6B7075]">Màu</div>
                                                <div class="mt-2">
                                                    <div class="flexGap">
                                                        <div class="flexGapWrap">
                                                            <label v-for="item in test2" :key="item.colorProduct" :for="item.colorProduct" class="t-radio">
                                                                <input type="radio" class="sr-only" :value="item.colorProduct">
                                                                <router-link to="" class="itemRouter">
                                                                    <p class="whitespace-pre-line">
                                                                        <span class="block text-xs font-semibold text-center">
                                                                            {{ item.colorProduct }}
                                                                        </span>
                                                                    </p>
                                                                </router-link>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="text-sm leading-[150%] font-semibold text-[#6B7075]">Loại hàng</div>
                                                <div class="mt-2">
                                                    <div class="flexGap">
                                                        <div class="flexGapWrap">
                                                            <div v-for="item in test3" :key="item.typeProduct" 
                                                            @mousemove="changeDescription(item)"
                                                            @mouseleave="hideDescription(item)"
                                                            @mousemove.stop>
                                                                <div class="radioWrap">
                                                                    <div>
                                                                        <label class="t-radio" :for="item.typeProduct">
                                                                            <input class="sr-only" :value="item.typeProduct" type="radio">
                                                                            <router-link to="" class="itemRouter space-x-1">
                                                                                <span class="text-xs font-semibold text-center leading-[150%]">
                                                                                    {{ item.typeProduct }}
                                                                                </span>
                                                                                <i class="w-3 h-3">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.8em" height="0.8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                                                        <use href="@/assets/iconSVG/productFeaturesSVG/alertCircle.svg#alertCircle"></use>
                                                                                    </svg>
                                                                                </i>
                                                                            </router-link>
                                                                        </label>
                                                                    </div>
                                                                    <div v-show="item.showDescription"  class="productDescrip">
                                                                        <div class="contentWrap" style="max-height: 400px;">
                                                                            <div class="px-2 py-1 space-y-2 text-sm leading-[150%]">
                                                                                <p>{{ item.productDescrip1 }}</p>
                                                                                <p>{{ item.productDescrip2 }}</p>
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
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>    
</template>

<script>
export default {
    data() {
        return {
            ariaList: [
                { ariaLabel: "Đánh giá 1 sao" },
                { ariaLabel: "Đánh giá 2 sao" },
                { ariaLabel: "Đánh giá 3 sao" },
                { ariaLabel: "Đánh giá 4 sao" },
                { ariaLabel: "Đánh giá 5 sao" },
            ],
            // sau bỏ mảng dưới để truyền props
            test: [
                { detailsProduct: "i5 1340P, 16GB, 512GB, FHD+" },
                { detailsProduct: "i7 1360P, 16GB, 1TB, 2.5K" },
                { detailsProduct: "i7 1360P, 16GB, 1TB, FHD+" },
            ],
            test2: [
                { colorProduct: "Platinum Silver" }
            ],
            test3: [
                { 
                    typeProduct: "Mới, Full box, Nhập khẩu",
                    productDescrip1: "Nhập khẩu: Là sản phẩm được nhập khẩu và phân phối bởi ThinkPro, được bảo hành tại tất cả các cửa hàng thuộc hệ thống ThinkPro.",
                    productDescrip2: "Mới, Fullbox: Là sản phẩm mới 100% chưa qua sử dụng đầy đủ hộp, phụ kiện, sách hướng dẫn sử dụng đi kèm.",
                    showDescription: false,
                },
                { 
                    typeProduct: "Used, Nhập khẩu",
                    productDescrip1: "Nhập khẩu: Là sản phẩm được nhập khẩu và phân phối bởi ThinkPro, được bảo hành tại tất cả các cửa hàng thuộc hệ thống ThinkPro.",
                    productDescrip2: "Used: Là sản phẩm đã qua sử dụng, có bao gồm sản phẩm và phụ kiện chính đi kèm (sạc đối với Laptop hoặc cáp sạc đối với phụ kiện.",
                    showDescription: false,
                },
                { 
                    typeProduct: "Outlet, Nhập khẩu",
                    productDescrip1: "Nhập khẩu: Là sản phẩm được nhập khẩu và phân phối bởi ThinkPro, được bảo hành tại tất cả các cửa hàng thuộc hệ thống ThinkPro.",
                    productDescrip2: "Outlet: Là sản phẩm tồn kho được bán giảm giá hoặc hàng trả bảo hành từ nhà sản xuất, có đầy đủ máy và phụ kiện đi kèm.",
                    showDescription: false,
                },
            ],
        }
    },
    methods: {
        changeDescription(item) {
            item.showDescription = true;
        },
        hideDescription(item) {
            item.showDescription = false;
        }
    },
}
</script>

<style scoped>
.divLeft {
    --t-navigation: 88px;
    top: calc(var(--t-navigation) + 12px )
}
.discount-status {
    border-radius: .25rem;
    padding: 1.25rem 1.5rem;
}
.rating {
    display: inline-flex;
    outline: none !important;;
}
.buttonRatting {
    cursor: pointer;
    display: inline-flex;
    position: relative;
}
.flexGap {
    --gap-x: 8px;
    --gap-y: 8px;
    --gap-x-negative: calc(var(--gap-x)* -1);
    --gap-y-negative: calc(var(--gap-y)* -1);
}
.flexGapWrap {
    display: flex;
    flex-wrap: wrap;
    margin-left: var(--gap-x-negative);
    margin-top: var(--gap-x-negative);
}
.t-radio {
    margin-left: var(--gap-x);
    margin-top: var(--gap-y);
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    overflow: hidden;
    position: relative;
}
.itemRouter {
    align-items: center;
    border-radius: .25rem;
    border-width: 1px;
    display: flex;
    padding: 6px .75rem;
}
.radioWrap {
    border: 6px solid transparent;
    margin: -6px;
}
.productDescrip {
    z-index: 999;
    width: 400px;
    position: absolute;
    /* inset: 0px auto auto 0px; */
    margin: 0px;
    /* transform: translate(-86px, 366px); */
}
.contentWrap {
    background: #41464C;
    color: #FFF;
}
</style>