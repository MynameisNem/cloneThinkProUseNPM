<template>
    <main class="bg-[#F6F9FC]">
        <div class="container mr-auto ml-auto pb-10">
            <div class="relative flex pt-5 items-start">
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
                                    <div class="mt-3">
                                        <div class="mb-1">
                                            <div class="text-base leading-[150%] font-semibold text-[#6B7075]">
                                                Số lượng
                                            </div>
                                        </div>
                                        <div class="input-number">
                                            <button aria-label="Giảm" 
                                            class="button-minus" @click="decrement" 
                                            :class="{ 'text-[#E6E8EA]': count === 1, 'text-[#1C1F23]': count > 1 }"
                                            :disable="count === 1 ? 'disable' : null">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <use href="@/assets/iconSVG/productFeaturesSVG/buttonMinus.svg#minus"></use>
                                                </svg>
                                            </button>
                                            <input v-model="count" class="count-input" id="count" min="1" inputmode="decimal" type="text">
                                            <button aria-label="Giảm" class="text-[#1C1F23] button-minus" @click="increment">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <use href="@/assets/iconSVG/productFeaturesSVG/buttonPlus.svg#plus"></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between pt-4 space-x-8">
                                    <div class="flex flex-col">
                                        <span class="text-xl leading-[150%] text-[#FE3464] font-semibold">
                                            19.990.000
                                        </span>
                                        <div class="flex items-center space-x-1 text-xs leading-[150%] ">
                                            <span class="line-through">
                                                28.990.000
                                            </span>
                                            <span class="text-[#FE3464]">
                                                -31%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="w-full grid grid-cols-2 gap-2">
                                        <button class="text-[#0065EE] bg-[#F6F9FC] hover:bg-[#DCDCDC] btn-add-to-cart">
                                            <span class="whitespace-nowrap">Thêm vào giỏ</span>
                                        </button>
                                        <button class="text-white bg-[#FE3464] hover:bg-[#DC143C] btn-add-to-cart">
                                            <span class="whitespace-nowrap">Mua ngay</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="bg-white px-6 py-5 rounded">
                            <div class="free-gift">
                                <div class="flex items-start space-x-2">
                                    <div class="mt-1">
                                        <div class="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center text-white bg-[#FE3464]">
                                            <i class="w-3 h-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <use href="@/assets/iconSVG/productFeaturesSVG/flashSale.svg#flashSale"></use>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <span class="text-base leading-[150%] font-semibold">
                                            Quà tặng miễn phí
                                        </span>
                                    </div>
                                </div>
                                <ul class="mt-2 ml-6 list-inside list-disc text-xs leading-[150%] space-y-1">
                                    <li>
                                        <span>
                                            Chuột E-DRA EM604W 149.000đ
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-4 bg-white rounded px-5 divide-y">
                            <div class="py-4">
                                <div class="flex items-center space-x-2">
                                    <div class="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center text-white bg-[#FE3464]">
                                        <i class="w-3 h-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <use href="@/assets/iconSVG/productFeaturesSVG/flashSale.svg#flashSale"></use>
                                            </svg>
                                        </i>
                                    </div>
                                    <div class="flex-1">
                                        <span class="font-semibold text-base leading-[150%]">
                                            Mua kèm
                                        </span>
                                    </div>
                                    <button class="text-[#FE3464] flex items-center space-x-1">
                                        <span class="text-xs">
                                            Tiết kiệm 800.000đ
                                        </span>
                                        <i class="w-3 h-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                            </svg>
                                        </i>
                                    </button>
                                </div>
                                <div class="mt-2 ml-6">
                                    <span class="line-clamp-1 text-xs leading-[150%]">
                                        Balo Cao Cấp Element - By NiceDesign, Balo Cao Cấp Element - By NiceDesign, Balo Cao Cấp Element - By NiceDesign, Balo Cao Cấp Element - By NiceDesign
                                    </span>
                                </div>
                            </div>
                        </div>
                        <section class="bg-white p-6">
                            <div class="space-x-3 flex">
                                <div class="w-[42px] h-[42px] flex items-center justify-center">
                                    <img class="" :src="test5" alt="Dell Inspiron 14">
                                </div>
                                <div class="flex-1 flex flex-col space-y-1">
                                    <div class="flex items-center">
                                        <div class="flex-1 flex items-center space-x-1">
                                            <a class="line-clamp-1 text-sm leading-[150%] font-semibold" href="#">
                                                Dell Inspiron 14
                                            </a>
                                        </div> 
                                        <a class="flex items-center space-x-1" href="#">
                                            <span class="text-xs leading-[150%]">Xem tất cả</span>
                                            <i class="w-3 h-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                                </svg>
                                            </i>
                                        </a>                                       
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <i class="w-4 h-4 text-[#0065EE]">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M1.414 10.586 3.5 8.5v-3a2 2 0 012-2h3l2.086-2.086a2 2 0 012.828 0L15.5 3.5h3a2 2 0 012 2v3l2.086 2.086a2 2 0 010 2.828L20.5 15.5v3a2 2 0 01-2 
                                                2h-3l-2.086 2.086a2 2 0 01-2.828 0L8.5 20.5h-3a2 2 0 01-2-2v-3l-2.086-2.086a2 2 0 010-2.828ZM7 13l3.244 3.244a1 1 0 001.46-.048l5.438-6.215a1.393 1.393 0 10-2.118-1.81L11 13l-2-2a1.414 1.414 0 10-2 2Z" clip-rule="evenodd"/>
                                            </svg>
                                        </i>
                                        <span class="text-xs leading-[150%]">
                                            ThinkPro là nhà bán lẻ chính thức
                                        </span>
                                    </div>                                    
                                </div>                                
                            </div>
                        </section>
                    </div>                    
                </div>
                <div class="flex flex-col order-first space-y-4 w-3/5">
                    <section class="section-media card bg-white">
                        <div class="section-media_thumb">
                            <div class="h-full overflow-y-auto absolute inset-0">
                                <swiper class="swiper gallery-thumbs" 
                                :options="swiperOptionThumbs" ref="swiperThumbs"
                                @swiper="setThumbsSwiper">
                                    <swiper-slide v-for="item in test6" :key="item.src"
                                    class="aspect-w-1 aspect-h-1"
                                    style="border: 1px solid transparent; border-radius: 0.25rem; height: 100px;">
                                        <img :src="item.src" :alt="test7" class="w-full h-full t-img object-contain">
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="section-media_main">
                            <div class="!aspect-w-1 !aspect-h-1 h-full">
                                <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                                    <swiper-slide v-for="item in test6" :key="item.src" class="">
                                        <img :src="item.src" :alt="test7" class="w-full h-full t-img object-contain">
                                    </swiper-slide>
                                    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
                                    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                                </swiper>
                            </div>
                        </div>                     
                    </section>
                    <div class="card bg-white owt-confidence-shopping">
                        <div class="flex items-center space-x-3">
                            <span class="text-xl leading-[150%] font-semibold">
                                ThinkPro
                            </span>
                            <span class="text-[#6B7075] font-semibold">
                                Là nơi để bạn và người thân tin tưởng lựa chọn
                            </span>
                        </div>
                        <div @click="changeMarquee" class="mt-3 slider bg-[#F5FDFF]">
                            <VueMarqueeSlider id="marquee-test" 
                            :speed="40000" :space="50" :width="700">
                                <div v-for="index in 2" :key="index" class="flex items-center space-x-3">
                                    <div v-for="item in vueMarqueeList" :key="item.descript" class="flex shrink-0 items-center space-x-1">
                                        <div class="w-5 h-5 rounded-full bg-[#00D4FF] flex items-center justify-center">
                                            <i v-html="item.icon" class="w-3 h-3">
                                            </i>
                                        </div>
                                        <span class="text-xs leading-[150%] flex-1 whitespace-nowrap">
                                            {{ item.descript }}
                                        </span>
                                    </div>
                                </div>
                            </VueMarqueeSlider>
                            <i class="ml-2 w-3 h-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="1rem" height="1rem"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div class="card bg-white ">
                        <div class="section-demand">
                            <div class="flex items-center justify-between space-x-1">
                                <h2 class="text-xl leading-[150%] font-semibold">
                                    Đánh giá từ chuyên gia
                                </h2>
                                <button @click="changeDemand" class="flex items-center space-x-1">
                                    <span class="text-sm leading-[150%]">
                                        Cách đánh giá
                                    </span>
                                    <i class="w-3 h-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                        </svg>
                                    </i>
                                </button>
                            </div>
                            <div class="mt-5 bg-white">
                                <div class="grid grid-cols-3 gap-x-12 gap-y-6">
                                    <div  v-for="item in sectionDemand" :key="item.demand" class="flex flex-col">
                                        <div class="flex justify-between items-center text-xs leading-[150%]">
                                            <span>{{ item.demand }}</span>
                                            <span>{{ item.score }}</span>
                                        </div>
                                        <div class="mt-2">
                                            <div aria-valuemax="100" aria-valuemin="0" 
                                            aria-label="Đánh giá" role="progressbar" class="progressEvaluate">
                                                <div class="progressEvaluateBar">
                                                    <div class="bg-[#DADDE0] progressEvaluateBarOuter" style="height: 4px;">
                                                        <div class="progressEvaluateBarInner" :style="item.progressBar">
                                                        </div>
                                                        <div class="progressLabel"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4 divide-y space-y-5">
                        <div class="section-attribute">
                            <div class="flex items-center justify-between">
                                <h2 class="font-semibold text-[18px] leading-[150%]">
                                    Cấu hình đặc điểm
                                </h2>
                            </div> 
                            <div class="grid-cols-2 grid gap-4 mt-5">
                                <div v-for="item in attributeList" :key="item.infor0" class="flex flex-col space-y-1 text-sm">
                                    <span class="font-semibold">{{ item.infor0 }}</span>
                                    <div class="block">
                                        <span>{{ item.infor1 }}</span>
                                    </div>
                                    <div v-if="item.infor2" class="block">
                                        <span>{{ item.infor2 }}</span>
                                    </div>
                                    <div v-if="item.infor3" class="block">
                                        <span>{{ item.infor3 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-rentail-outlet pt-5">
                            <div class="flex items-center justify-between">
                                <h2 class="font-semibold text-[18px] leading-[150%]">
                                    Sẵn hàng & Trưng bày
                                </h2>
                                <button @click="changeRentailOutlet" class="flex items-center space-x-1">
                                    <span class="text-sm leading-[150%] text-[#0065EE]">
                                        3 chi nhánh
                                    </span>
                                    <i class="w-3 h-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                        </svg>
                                    </i>
                                </button>
                            </div> 
                        </div>
                        <div class="section-transport pt-5">
                            <div class="flex items-center justify-between">
                                <h2 class="font-semibold text-[18px] leading-[150%]">
                                    Vận chuyển
                                </h2>
                                <button class="flex items-center space-x-1">
                                    <span class="text-sm leading-[150%] text-[#0065EE]">
                                        Chọn địa chỉ giao hàng
                                    </span>
                                    <i class="w-3 h-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                        </svg>
                                    </i>
                                </button>
                            </div> 
                            <div class="mt-2 flex justify-start">
                                <span class="text-sm leading-[150%] text-[#3BB346]">
                                    Miễn phí HN, TP HCM
                                </span>
                            </div>
                        </div>
                        <div class="section-guarantee pt-5">
                            <div class="flex justify-between items-center">
                                <h2 class="font-semibold text-[18px] leading-[150%]">
                                    Bảo hành & đổi trả
                                </h2>
                                <button class="flex items-center space-x-1">
                                    <span class="text-sm leading-[150%] text-[#0065EE]">
                                        12 tháng 
                                    </span>
                                    <i class="w-3 h-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.75rem" height="0.75rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
                                        </svg>
                                    </i>
                                </button>
                            </div>
                            <div class="mt-2 text-sm leading-[150%]">
                                <ul class="list-disc list-inside pl-3">
                                    <li>Bảo hành <strong>12 tháng tại chuỗi cửa hàng</strong></li>
                                    <li>Đổi mới trong <strong>15 ngày đầu tiên</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="section-article pt-5">
                            <h2 class="font-semibold text-[18px] leading-[150%]">
                                Bài viết mô tả
                            </h2>
                            <div class="section-article-wrapper space-y-6" v-html="datatest.content"></div>
                            <div class="mt-4 justify-center flex">
                                <button class="w-full !bg-transparent px-3 button-readmore">
                                    <span class="text-[#0065EE] font-semibold">
                                        Xem thêm
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-show="showMarquee" role="dialog" class="main-dialog main-dialog-center">
            <div class="dialog-overlay"></div>
            <div class="bg-white dialog-wrapper">
                <div class="py-[0.75rem] px-[1.5rem] pr-[60px]">
                    <div class="text-xl leading-[150%] font-semibold">
                        Tự tin mua sắm cùng ThinkPro
                    </div>
                    <button @click="closeMarquee" class="dialog-close-button h-12 w-12 bg-white">
                        <i class="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <use href="@/assets/iconSVG/navIconSVG/closeMenuNav.svg#closeMenuNav"></use>
                            </svg>
                        </i>
                    </button>
                </div>
                <div class="dialog-body">
                    <div class="py-4 px-6">
                        <div class="p-3 bg-[#0A2540] rounded">
                            <span class="text-[10px] leading-[150%] text-white">
                                Một thành viên của
                            </span>
                            <svg fill="none" height="13" viewBox="0 0 203 13" width="203" xmlns="http://www.w3.org/2000/svg" class="text-[#00D4FF]"><path d="M5.68 12.24C4.86933 12.24 4.144 12.112 3.504 11.856C2.87467 11.6 2.34133 11.2267 1.904 10.736C1.46667 10.2347 1.13067 9.62667 0.896 8.912C0.661333 8.18667 0.544 7.36533 0.544 6.448C0.544 5.52 0.661333 4.69333 0.896 3.968C1.13067 3.24267 1.46667 2.62933 1.904 2.128C2.34133 1.616 2.87467 1.22667 3.504 0.959999C4.144 0.693333 4.86933 0.559999 5.68 0.559999C6.49067 0.559999 7.21067 0.693333 7.84 0.959999C8.48 1.22667 9.01867 1.616 9.456 2.128C9.904 2.62933 10.24 3.24267 10.464 3.968C10.6987 4.69333 10.816 5.52 10.816 6.448C10.816 7.36533 10.6987 8.18667 10.464 8.912C10.24 9.62667 9.904 10.2347 9.456 10.736C9.01867 11.2267 8.48 11.6 7.84 11.856C7.21067 12.112 6.49067 12.24 5.68 12.24ZM2.512 6.448C2.512 7.70667 2.78933 8.688 3.344 9.392C3.89867 10.0853 4.67733 10.432 5.68 10.432C6.68267 10.432 7.46133 10.0853 8.016 9.392C8.57067 8.688 8.848 7.70667 8.848 6.448C8.848 5.17867 8.57067 4.192 8.016 3.488C7.46133 2.784 6.68267 2.432 5.68 2.432C4.67733 2.432 3.89867 2.784 3.344 3.488C2.78933 4.192 2.512 5.17867 2.512 6.448ZM16.0954 0.799999L20.0154 11.776H20.0634V0.799999H21.8714V12H18.1594L14.2394 0.976H14.1914V12H12.3994V0.799999H16.0954ZM22.9356 0.799999H24.9356L27.1596 11.728H27.2396L29.3356 0.799999H32.5996L34.7116 11.728H34.7756L36.9836 0.799999H38.9996L36.5036 12H33.0796L30.9836 1.072H30.9356L28.8556 12H25.4156L22.9356 0.799999ZM41.6413 0.799999H45.2093L48.6493 12H46.6333L45.8973 9.44H40.9693L40.2333 12H38.2012L41.6413 0.799999ZM45.4653 7.984L43.4493 1.008H43.4013L41.3853 7.984H45.4653ZM49.6025 0.799999L53.3785 0.783999C54.0398 0.783999 54.6318 0.869333 55.1545 1.04C55.6878 1.2 56.1358 1.43467 56.4985 1.744C56.8718 2.04267 57.1545 2.41067 57.3465 2.848C57.5492 3.28533 57.6505 3.776 57.6505 4.32C57.6505 5.184 57.3892 5.90933 56.8665 6.496C56.3438 7.072 55.6345 7.46133 54.7385 7.664L57.9705 12H55.8425L51.6825 6.384H53.3785C54.1038 6.384 54.6692 6.21333 55.0745 5.872C55.4905 5.52 55.6985 5.03467 55.6985 4.416C55.6985 3.776 55.4905 3.28533 55.0745 2.944C54.6692 2.592 54.1038 2.416 53.3785 2.416H51.5225V12H49.6025V0.799999ZM62.9711 0.799999C63.8458 0.799999 64.6245 0.927999 65.3071 1.184C66.0005 1.44 66.5871 1.808 67.0671 2.288C67.5471 2.768 67.9151 3.35467 68.1711 4.048C68.4271 4.74133 68.5551 5.52533 68.5551 6.4C68.5551 7.27467 68.4271 8.05867 68.1711 8.752C67.9151 9.44533 67.5471 10.032 67.0671 10.512C66.5871 10.992 66.0005 11.36 65.3071 11.616C64.6245 11.872 63.8458 12 62.9711 12H59.2431V0.799999H62.9711ZM62.9551 10.256C64.1178 10.256 65.0138 9.92 65.6431 9.248C66.2831 8.56533 66.6031 7.616 66.6031 6.4C66.6031 5.184 66.2831 4.24 65.6431 3.568C65.0138 2.88533 64.1178 2.544 62.9551 2.544H61.1631V10.256H62.9551ZM75.5289 2.544H72.3929V0.799999H80.6169V2.544H77.4489V12H75.5289V2.544ZM85.9456 12.24C85.135 12.24 84.4096 12.112 83.7696 11.856C83.1403 11.6 82.607 11.2267 82.1696 10.736C81.7323 10.2347 81.3963 9.62667 81.1616 8.912C80.927 8.18667 80.8096 7.36533 80.8096 6.448C80.8096 5.52 80.927 4.69333 81.1616 3.968C81.3963 3.24267 81.7323 2.62933 82.1696 2.128C82.607 1.616 83.1403 1.22667 83.7696 0.959999C84.4096 0.693333 85.135 0.559999 85.9456 0.559999C86.7563 0.559999 87.4763 0.693333 88.1056 0.959999C88.7456 1.22667 89.2843 1.616 89.7216 2.128C90.1696 2.62933 90.5056 3.24267 90.7296 3.968C90.9643 4.69333 91.0816 5.52 91.0816 6.448C91.0816 7.36533 90.9643 8.18667 90.7296 8.912C90.5056 9.62667 90.1696 10.2347 89.7216 10.736C89.2843 11.2267 88.7456 11.6 88.1056 11.856C87.4763 12.112 86.7563 12.24 85.9456 12.24ZM82.7776 6.448C82.7776 7.70667 83.055 8.688 83.6096 9.392C84.1643 10.0853 84.943 10.432 85.9456 10.432C86.9483 10.432 87.727 10.0853 88.2816 9.392C88.8363 8.688 89.1136 7.70667 89.1136 6.448C89.1136 5.17867 88.8363 4.192 88.2816 3.488C87.727 2.784 86.9483 2.432 85.9456 2.432C84.943 2.432 84.1643 2.784 83.6096 3.488C83.055 4.192 82.7776 5.17867 82.7776 6.448ZM94.137 6.544C94.137 7.74933 94.3557 8.69333 94.793 9.376C95.2303 10.0587 95.849 10.4 96.649 10.4C97.3423 10.4 97.8917 10.1653 98.297 9.696C98.7023 9.22667 98.937 8.56 99.001 7.696H97.001V6.064H101.049V12H100.025L99.257 7.696H99.225C99.2037 9.15733 98.9103 10.2827 98.345 11.072C97.7797 11.8507 96.9957 12.24 95.993 12.24C95.417 12.24 94.889 12.112 94.409 11.856C93.9397 11.5893 93.5397 11.2107 93.209 10.72C92.8783 10.2293 92.6223 9.632 92.441 8.928C92.2597 8.224 92.169 7.42933 92.169 6.544C92.169 5.59467 92.297 4.752 92.553 4.016C92.809 3.26933 93.1717 2.64533 93.641 2.144C94.121 1.632 94.6917 1.248 95.353 0.992C96.025 0.725333 96.777 0.591999 97.609 0.591999C98.1743 0.591999 98.729 0.655999 99.273 0.783999C99.8277 0.912 100.329 1.09333 100.777 1.328L100.665 3.328C100.217 3.05067 99.721 2.832 99.177 2.672C98.633 2.512 98.0943 2.432 97.561 2.432C96.473 2.432 95.6303 2.784 95.033 3.488C94.4357 4.192 94.137 5.21067 94.137 6.544ZM110.12 0.799999V2.544H104.632V5.552H108.984V7.168H104.632V10.256H110.28V12H102.712V0.799999H110.12ZM113.873 2.544H110.737V0.799999H118.961V2.544H115.793V12H113.873V2.544ZM128.919 0.799999V12H126.999V7.264H122.023V12H120.103V0.799999H122.023V5.52H126.999V0.799999H128.919ZM138.385 0.799999V2.544H132.898V5.552H137.25V7.168H132.898V10.256H138.546V12H130.978V0.799999H138.385ZM139.743 0.799999L143.519 0.783999C144.18 0.783999 144.772 0.869333 145.295 1.04C145.828 1.2 146.276 1.43467 146.639 1.744C147.012 2.04267 147.295 2.41067 147.487 2.848C147.69 3.28533 147.791 3.776 147.791 4.32C147.791 5.184 147.53 5.90933 147.007 6.496C146.484 7.072 145.775 7.46133 144.879 7.664L148.111 12H145.983L141.823 6.384H143.519C144.244 6.384 144.81 6.21333 145.215 5.872C145.631 5.52 145.839 5.03467 145.839 4.416C145.839 3.776 145.631 3.28533 145.215 2.944C144.81 2.592 144.244 2.416 143.519 2.416H141.663V12H139.743V0.799999ZM154.059 6.544C154.059 7.74933 154.278 8.69333 154.715 9.376C155.152 10.0587 155.771 10.4 156.571 10.4C157.264 10.4 157.814 10.1653 158.219 9.696C158.624 9.22667 158.859 8.56 158.923 7.696H156.923V6.064H160.971V12H159.947L159.179 7.696H159.147C159.126 9.15733 158.832 10.2827 158.267 11.072C157.702 11.8507 156.918 12.24 155.915 12.24C155.339 12.24 154.811 12.112 154.331 11.856C153.862 11.5893 153.462 11.2107 153.131 10.72C152.8 10.2293 152.544 9.632 152.363 8.928C152.182 8.224 152.091 7.42933 152.091 6.544C152.091 5.59467 152.219 4.752 152.475 4.016C152.731 3.26933 153.094 2.64533 153.563 2.144C154.043 1.632 154.614 1.248 155.275 0.992C155.947 0.725333 156.699 0.591999 157.531 0.591999C158.096 0.591999 158.651 0.655999 159.195 0.783999C159.75 0.912 160.251 1.09333 160.699 1.328L160.587 3.328C160.139 3.05067 159.643 2.832 159.099 2.672C158.555 2.512 158.016 2.432 157.483 2.432C156.395 2.432 155.552 2.784 154.955 3.488C154.358 4.192 154.059 5.21067 154.059 6.544ZM162.634 0.799999L166.41 0.783999C167.071 0.783999 167.663 0.869333 168.186 1.04C168.719 1.2 169.167 1.43467 169.53 1.744C169.903 2.04267 170.186 2.41067 170.378 2.848C170.58 3.28533 170.682 3.776 170.682 4.32C170.682 5.184 170.42 5.90933 169.898 6.496C169.375 7.072 168.666 7.46133 167.77 7.664L171.002 12H168.874L164.714 6.384H166.41C167.135 6.384 167.7 6.21333 168.106 5.872C168.522 5.52 168.73 5.03467 168.73 4.416C168.73 3.776 168.522 3.28533 168.106 2.944C167.7 2.592 167.135 2.416 166.41 2.416H164.554V12H162.634V0.799999ZM176.914 12.24C176.104 12.24 175.378 12.112 174.738 11.856C174.109 11.6 173.576 11.2267 173.138 10.736C172.701 10.2347 172.365 9.62667 172.13 8.912C171.896 8.18667 171.778 7.36533 171.778 6.448C171.778 5.52 171.896 4.69333 172.13 3.968C172.365 3.24267 172.701 2.62933 173.138 2.128C173.576 1.616 174.109 1.22667 174.738 0.959999C175.378 0.693333 176.104 0.559999 176.914 0.559999C177.725 0.559999 178.445 0.693333 179.074 0.959999C179.714 1.22667 180.253 1.616 180.69 2.128C181.138 2.62933 181.474 3.24267 181.698 3.968C181.933 4.69333 182.05 5.52 182.05 6.448C182.05 7.36533 181.933 8.18667 181.698 8.912C181.474 9.62667 181.138 10.2347 180.69 10.736C180.253 11.2267 179.714 11.6 179.074 11.856C178.445 12.112 177.725 12.24 176.914 12.24ZM173.746 6.448C173.746 7.70667 174.024 8.688 174.578 9.392C175.133 10.0853 175.912 10.432 176.914 10.432C177.917 10.432 178.696 10.0853 179.25 9.392C179.805 8.688 180.082 7.70667 180.082 6.448C180.082 5.17867 179.805 4.192 179.25 3.488C178.696 2.784 177.917 2.432 176.914 2.432C175.912 2.432 175.133 2.784 174.578 3.488C174.024 4.192 173.746 5.17867 173.746 6.448ZM192.402 7.36C192.402 8.11733 192.295 8.8 192.082 9.408C191.879 10.0053 191.58 10.5173 191.186 10.944C190.791 11.36 190.306 11.68 189.73 11.904C189.164 12.128 188.524 12.24 187.81 12.24C187.095 12.24 186.45 12.128 185.874 11.904C185.308 11.68 184.828 11.36 184.434 10.944C184.039 10.5173 183.735 10.0053 183.522 9.408C183.319 8.8 183.218 8.11733 183.218 7.36V0.799999H185.138V7.36C185.138 8.37333 185.372 9.168 185.842 9.744C186.322 10.3093 186.978 10.592 187.81 10.592C188.642 10.592 189.292 10.3093 189.762 9.744C190.242 9.168 190.482 8.37333 190.482 7.36V0.799999H192.402V7.36ZM197.767 6.8C198.567 6.8 199.186 6.608 199.623 6.224C200.061 5.84 200.279 5.30133 200.279 4.608C200.279 3.91467 200.061 3.38133 199.623 3.008C199.186 2.624 198.567 2.432 197.767 2.432H195.991V6.8H197.767ZM194.071 0.799999H197.767C199.186 0.799999 200.285 1.13067 201.063 1.792C201.853 2.45333 202.247 3.392 202.247 4.608C202.247 5.824 201.853 6.76267 201.063 7.424C200.285 8.08533 199.186 8.416 197.767 8.416H195.991V12H194.071V0.799999Z" fill="currentColor"></path></svg>
                            <span class="text-[10px] leading-[150%] text-white">
                                Tập đoàn bán lẻ Công nghệ - Nội thất phục vụ khách hàng tốt nhất.
                            </span>
                        </div>
                        <div class="mt-4 px-3 rounded bg-[#F5FDFF] divide-y">
                            <div class="py-4" v-for="item in vueMarqueeList" :key="item.descript">
                                <div class="flex space-x-3">
                                    <div class="mt-1 flex">
                                        <i v-html="item.icon" class="w-5 h-5 text-[#00D4FF]"></i>
                                    </div>
                                    <div class="flex-1 text-[#0A2540]">
                                        <span class="text-sm leading-[150%] font-semibold">
                                            {{ item.span }}
                                        </span>
                                        <p class="mt-2 text-xs leading-[150%]">
                                            {{ item.p }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dialog-footer">
                            <div class="flex justify-end">
                                <button @click="closeMarquee" class="max-w-[300px] text-white h-[44px] bg-[#0A2540] w-full button-close">
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showDemand" role="dialog" class="main-dialog main-dialog-center">
            <div class="dialog-overlay"></div>
            <div class="bg-white dialog-wrapper w-[600px]">
                <div class="py-[0.75rem] px-[1.5rem] pr-[60px]">
                    <div class="text-xl leading-[150%] font-semibold">
                        Đánh giá từ chuyên gia
                    </div>
                    <button @click="closeDemand" class="dialog-close-button h-12 w-12 bg-white">
                        <i class="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <use href="@/assets/iconSVG/navIconSVG/closeMenuNav.svg#closeMenuNav"></use>
                            </svg>
                        </i>
                    </button>
                </div>
                <div class="dialog-body">
                    <div class="px-6 pb-4 flex space-x-6">
                        <div class="w-[120px] h-[120px] bg-[#F6F9FC] rounded-full overflow-hidden">
                            <img class="w-full h-full object-contain" src="https://thinkpro.vn/demand/expert-employee.png" alt="Expert Employee">
                        </div>
                        <div class="flex flex-1 flex-col">
                            <div class="flex items-center space-x-1">
                                <span class="font-semibold">ThinkPro Expert</span>
                                <i class="w-4 h-4 text-[#3BB346]">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.414 10.586 3.5 8.5v-3a2 2 0 012-2h3l2.086-2.086a2 2 0 012.828 0L15.5 3.5h3a2 2 0 012 2v3l2.086 2.086a2 2 0 010 2.828L20.5 15.5v3a2 2 0 01-2 2h-3l-2.086 2.086a2 2 0 01-2.828 0L8.5 20.5h-3a2 2 0 01-2-2v-3l-2.086-2.086a2 2 0 010-2.828ZM7 13l3.244 3.244a1 1 0 001.46-.048l5.438-6.215a1.393 1.393 0 10-2.118-1.81L11 13l-2-2a1.414 1.414 0 10-2 2Z" clip-rule="evenodd"/></svg>
                                </i>
                            </div>
                            <div class="mt-2">
                                <p>
                                    {{ assessmentExperts }}
                                </p>
                            </div>
                            <div class="flex justify-between mt-4">
                                <div  v-for="item in assessmentList" :key="item.scoreEx" class="flex flex-col space-y-2 w-[72px]">
                                    <div class="py-[2px] rounded-2xl text-center text-xs leading-[150%] text-white" :class="item.bgEx">
                                        {{ item.scoreEx }}
                                    </div>
                                    <span class="text-sm leading-[150%] text-center">
                                        {{ item.descriptEx }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- đoạn này sau thêm bằng mảng từ file js -->
        <div v-show="showRentailOutlet" role="dialog" class="main-dialog main-dialog-center">
            <div class="dialog-overlay"></div>
            <div class="bg-white dialog-wrapper w-[600px]">
                <div class="py-[0.75rem] px-[1.5rem] pr-[60px]">
                    <div class="text-xl leading-[150%] font-semibold">
                        Sẵn hàng và Trưng bày
                    </div>
                    <button @click="closeRentailOutlet" class="dialog-close-button h-12 w-12 bg-white">
                        <i class="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <use href="@/assets/iconSVG/navIconSVG/closeMenuNav.svg#closeMenuNav"></use>
                            </svg>
                        </i>
                    </button>
                </div>
                <div class="dialog-body">
                    <div class="flex flex-col divide-y px-6">
                        <div class="flex flex-col py-5">
                            <span class="font-semibold text-base leading-[150%]">
                                Thành phố Hồ Chí Minh
                            </span>
                            <div class="mt-3 flex flex-col space-y-5">
                                <div class="flex flex-col justify-between space-x-3 ">
                                    <div class="space-y-1">
                                        <div class="text-sm leading-[150%]">Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh</div>
                                        <div class="flex items-center space-x-1 text-[#3BB346]">
                                            <i class="w-3 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fill-rule="evenodd" 
                                                    d="M21.352 4.265a1.5 1.5 0 01.383 2.087l-10 14.5a1.5 1.5 0 01-2.334.169l-6.5-7a1.5 1.5 0 012.198-2.042l5.228 5.63 8.938-12.96a1.5 1.5 0 012.087-.384Z" clip-rule="evenodd"/>
                                                </svg>
                                            </i>
                                            <span class="text-sm">Còn hàng</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col py-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- thêm đến hết đây -->
    </main>    
</template>

<script>
import { Swiper, SwiperSlide, Thumbs } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { datatest } from './data-test.js'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            selectedItem: null,
            showMarquee: false,
            showDemand: false,
            showRentailOutlet: false,
            count: 1,
            datatest: datatest,
            ariaList: [
                { ariaLabel: "Đánh giá 1 sao" },
                { ariaLabel: "Đánh giá 2 sao" },
                { ariaLabel: "Đánh giá 3 sao" },
                { ariaLabel: "Đánh giá 4 sao" },
                { ariaLabel: "Đánh giá 5 sao" },
            ],
            vueMarqueeList: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5.774 6.309A4.538 4.538 0 0110.24 1c2.802 0 4.94 2.529 4.468 5.298a.644.644 0 11-1.27-.216 3.248 3.248 0 00-3.198-3.793 3.248 3.248 0 00-3.197 3.8.644.644 0 11-1.27.22Z"/><path d="M14.521 10.48a1.934 1.934 0 012.578.86c1.277-.632 2.788.302 2.788 1.734v6.703A3.226 3.226 0 0116.664 23h-5.248a3.235 3.235 0 01-2.351-1.018L4.713 17.34a1.932 1.932 0 01.105-2.768c.77-.695 1.986-.642 2.713.12l.757.792v-9.93c0-1.09.903-1.963 1.992-1.932 1.04.028 1.885.907 1.885 1.96v3.946a1.935 1.935 0 012.356.952Z"/></g></svg>',
                    descript: 'Trải nghiệm',
                    span: 'Được trải nghiệm thực tế sản phẩm, lựa chọn đúng hơn.',
                    p: 'Không còn bọc nilon, hạn chế quyền được trải nghiệm trước mua hàng của người dùng.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.082 8.003a6.002 6.002 0 0111.836 0A1 1 0 0017 9v7a1 1 0 001 1h.532a4.502 4.502 0 01-3.674 2.486A1 1 0 0014 19h-4a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 00.872-.51 6.504 6.504 0 005.841-4.575A3.001 3.001 0 0023 14v-3a3 3 0 00-3-3h-.062A8.001 8.001 0 004.062 8H4a3 3 0 00-3 3v3a3 3 0 003 3h2a1 1 0 001-1V9a1 1 0 00-.918-.997Z"/></svg>',
                    descript: 'Tận tâm tư vấn',
                    span: 'Bạn lo lắng khi không biết sản phẩm nào phù hợp? ThinkPro có đội ngũ tư vấn tận tâm và có chuyên môn.',
                    p: 'Giúp khách hàng lựa chọn sản phẩm đúng nhu cầu là trách nhiệm đầu tiên của Nhân viên tư vấn tại ThinkPro.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 4a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V7a3 3 0 00-3-3H4Zm8 8L3.5 7h17L12 12Z" clip-rule="evenodd"/></svg>',
                    descript: 'Trung tâm bảo vệ quyền lợi khách hàng',
                    span: 'Bạn gặp khó khi gặp lỗi hỏng, ThinkPro có Trung tâm bảo vệ quyền lợi khách hàng',
                    p: 'Để không bỏ sót bất kỳ một trải nghiệm không tốt nào của khách hàng, Ban Lãnh Đạo Tập đoàn có chuyên trang bảo vệ quyền lợi khách hàng.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1.5-16.5v4.879l3.56 3.56a1.5 1.5 0 01-2.12 2.122l-4-4A1.5 1.5 0 0110.5 12V6.5a1.5 1.5 0 013 0Z" clip-rule="evenodd"/></svg>',
                    descript: 'Phục vụ 24/7',
                    span: 'Bạn bận, ThinkPro phục vụ từ sáng tới khuya.',
                    p: 'Khách hàng bận bịu. Cán bộ, nhân viên ThinkPro càng phải phục vụ ngoài giờ để trải nghiệm của khách hàng được thông suốt.'
                }
            ],
            assessmentExperts: "Đánh giá này dựa trên các chuyên gia máy tính từ ThinkPro. Qua các bài kiểm tra và kinh nghiệm thực tế sử dụng, có tham khảo đánh giá từ các chuyên trang đánh giá trong và ngoài nước.",
            assessmentList: [
                {
                    bgEx: "bg-[#F93920]",
                    scoreEx: "1, 2, 3",                    
                    descriptEx: "Không phù hợp"
                },
                {
                    bgEx: "bg-[#FC8800]",
                    scoreEx: "4, 5, 6, 7",                    
                    descriptEx: "Bình thường"
                },
                {
                    bgEx: "bg-[#3BB346]",
                    scoreEx: "8, 9",                    
                    descriptEx: "Tốt"
                },
                {
                    bgEx: "bg-[#3BB346]",
                    scoreEx: "10",                    
                    descriptEx: "Tuyệt vời"
                },
            ],

            // sau bỏ mảng dưới để truyền props, nhớ đổi tên trừ cái sectionDemand để tên như cũ 
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
            test5: "https://images.thinkgroup.vn/unsafe/84x84/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/brands/2023/4/5/logo-dell-thinkpro-10.png",
            test6: [
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/980932B0EC-SP-13170602.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/B14BADE506-SP-13170602.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/6812C016E5-SP-13170602.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/6BE1ABFF40-SP-13170602.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/881D351EB2-SP-13170602.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/in5430nt-cnb-00000ff090-sl-2pc.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/in5430nt-cnb-00055rf110-sl-nonfpr-2pc.jpg"
                },
                {
                    src: "https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/in5430nt-cnb-00055lf110-sl-nonfpr-2pc.jpg"
                },
            ],
            test7: "Dell Inspiron 14 5430 - i7 1360P, 16GB, 1TB, 2.5K - Platinum Silver - Mới, Full box, Nhập khẩu",            
            sectionDemand: [
                {
                    demand: 'Văn phòng, học tập',
                    score: '10/10',
                    progressBar: 'width: 100%; background-color: #3BB346;'
                },
                {
                    demand: '2D Design',
                    score: '8/10',
                    progressBar: 'width: 80%; background-color: #3BB346;'
                },
                {
                    demand: 'Quay dựng Video',
                    score: '4/10',
                    progressBar: 'width: 40%; background-color: #FC8800;'
                },
                {
                    demand: '3D design',
                    score: '4/10',
                    progressBar: 'width: 40%; background-color: #FC8800;'
                },
                {
                    demand: 'Gaming',
                    score: '4/10',
                    progressBar: 'width: 40%; background-color: #FC8800;'
                },
                {
                    demand: 'Lập trình',
                    score: '6/10',
                    progressBar: 'width: 60%; background-color: #FC8800;'
                },
            ],
            attributeList: [
                {
                    infor0: "Bộ xử lý",
                    infor1: "Loại CPU: Intel Core i7 1360P, 12C/16T",
                    infor2: "Tốc độ: 1GHz , Lên tới",
                    infor3: "Bộ nhớ đệm: 12MB"
                },
                {
                    infor0: "Card đồ họa",
                    infor1: "Card onboard: Intel Iris Xe Graphics",
                    infor2: "Card rời: Không"
                },
                {
                    infor0: "RAM",
                    infor1: "Dung lượng: 16GB LPDDR5 4800MHz",
                    infor2: "Hỗ trợ tối đa: 16GB (Không thể nâng cấp)"
                },
                {
                    infor0: "Ổ cứng",
                    infor1: "Dung lượng SSD: 1024GB (M.2 NVMe)",
                    infor2: "Khả năng nâng cấp: Hỗ trợ 1 SSD",
                },
                {
                    infor0: "Màn hình",
                    infor1: "Màn hình: 14inches, 2560 x 1600px, 90Hz",
                    infor2: "Tấm phủ: Nhám, Không cảm ứng",
                    infor3: "Thông số khác: Tỉ lệ 16:10, WVA, 300Nits, 100 sRGB"
                },
                {
                    infor0: "Khối lượng & Kích thước",
                    infor1: "Khối lượng: 1.55kg",
                    infor2: "Kích thước: 314mm x 226.6mm x 15.74mm",
                    infor3: "Chất liệu vỏ: Kim loại"
                },
                {
                    infor0: "Pin",
                    infor1: "54WHr Li-Polymer"
                },
                {
                    infor0: "Webcam và Âm thanh",
                    infor1: "Có"
                },
                {
                    infor0: "Cổng kết nối",
                    infor1: "Cổng kết nối: 1 x USB Type C, 2 x USB Type A, HDMI, Jack tai nghe 3.5mm.",
                    infor2: "Khe thẻ SD/ Micro SD: 1 khe thẻ SD, khe micro SD"
                },
                {
                    infor0: "Kết nối",
                    infor1: "Bluetooth: Có",
                    infor2: "Kết nối LTE/WWAN: Không hỗ trợ"
                },
                {
                    infor0: "Hệ điều hành",
                    infor1: "Windows 11"
                }
            ],
            // bỏ đến đây

            swiperOptionTop: {
                modules: [Thumbs],
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                thumbs: {
                    swiper: this.swiperOptionThumbs
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 10,
                centeredSlides: false,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
                direction: 'vertical',
                height: 105,
            },
            thumbsSwiper: null,
        }
    },
    methods: {
        changeDescription(item) {
            item.showDescription = true;
        },
        hideDescription(item) {
            item.showDescription = false;
        },
        increment() {
            this.count = Math.max (1, this.count + 1)
        },
        decrement() {
            this.count = Math.max (1, this.count - 1)
        },
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper
        },
        changeMarquee() {
            this.showMarquee = !this.showMarquee
        },
        closeMarquee() {
            this.showMarquee = !this.showMarquee
        },
        changeDemand() {
            this.showDemand = !this.showDemand
        },
        closeDemand() {
            this.showDemand = !this.showDemand
        },
        changeRentailOutlet() {
            this.showRentailOutlet = !this.showRentailOutlet
        },
        closeRentailOutlet() {
            this.showRentailOutlet = !this.showRentailOutlet
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    }
}
</script>

<style scoped>
.image-viewer {
    --tw-aspect-h: 9;
    --tw-aspect-w: 16;
    padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.button-readmore {
    height: 44px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
}
.section-article-wrapper {
    /* max-height: 300px; */
    overflow: hidden;
    position: relative;
}
.progressLabel {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}
.progressEvaluateBarOuter, .progressEvaluateBarInner {
    border-radius: 9999px;
}
.progressEvaluateBarInner {
    height: 100%;
    left: 0;
    line-height: 1;
    position: absolute;
    text-align: right;
    top: 0;
    transition: width .3 ease;
    white-space: nowrap;
}
.progressEvaluateBarOuter {
    position: relative;
    width: 100%;
}
.progressEvaluateBar {
    box-sizing: border-box;
    display: inline-flex;
    vertical-align: middle;
    width: 100%;
}
.progressEvaluate {
    align-items: center;
    display: flex;
    line-height: 1;
    position: relative;
}
.button-close {
    align-items: center;
    border-radius: 0.375rem;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    justify-content: center;
}
.dialog-footer {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 1rem 1.5rem;
}
.dialog-body {
    flex: 1 1 0%;
    overflow: hidden;
}
.dialog-close-button {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0.5rem;
    top: 0.225rem;
    border-radius: 9999px;
}
.dialog-wrapper {
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - var(--dialog-margin-y)*2);
    overflow: hidden;
    position: relative;
    z-index: 33;
}
.main-dialog {
    --dialog-margin-y: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 31;
}
.main-dialog-center {
    align-items: center;
    display: flex;
    justify-content: center;
}
.dialog-overlay {
    background-color: rgb(28 31 35/.75);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 32;
}
.owt-confidence-shopping .slider {
    cursor: pointer;
    align-items: center;
    border-radius: .25rem;
    display: flex;
    overflow: hidden;
    padding: .75rem;
}
.t-img {
    transition: opacity 50ms;
}
.aspect-h-1 {
    --tw-aspect-h: 1;
}
.aspect-w-1 > * {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.aspect-w-1 {
    --tw-aspect-w: 1;
    padding-bottom: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
}
.section-media_main {
    flex: 1 1 0%;
    overflow: hidden;
    position: relative;
}
.section-media_thumb {
    position: relative;
    width: 100px;
}
.card {
    padding: 1.5rem;
    border-radius: .25rem;
}
.section-media {
    align-items: stretch;
    display: flex;
    height: 598px;
}
.btn-add-to-cart {
    padding-left: .75rem;
    padding-right: .75rem;
    height: 44px;
    align-items: center;
    border-radius: 0.375rem;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    justify-content: center;
}
.count-input {
    background: inherit;
    width: 70px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    flex: 1 1 0%;
    font-weight: 600;
    height: 100%;
    text-align: center;
}
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
.input-number {
    align-items: center;
    border-radius: .375rem;
    border-style: solid;
    border-width: 1px;
    display: inline-flex;
    height: 40px;
}
.button-minus {
    height: 100%;
    width: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
}
/* .selected-item {
    border: 1px solid;
    border-color: #0065ee;
} */
.swiper {
    .swiper-slide {
        background-size: cover;
        background-position: center;
        background-color: #FFF;
    }

    &.gallery-top {
        height: 100%;
        width: 100%;
    }
    &.gallery-thumbs {
        height: 100%;
        box-sizing: border-box;
        padding: gap 0;
    }
    &.gallery-thumbs .swiper-slide {
        width: 100%;
        height: 100%;
        opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
        border-color: #0065ee !important;
    }
}
</style>