<template>
    <section class="section-container">
        <div class="bg-[#F6F9FC]">
            <div class="flex items-center space-x-4">
                <h2 class="text-[28px] font-semibold leading-[40px]">
                    Chọn ThinkPro?
                </h2>
                <span class="font-semibold text-[24px] text-[#6B7075] leading-[40px]">
                    Chọn sự Thoải mái, An tâm vì có sự Tận tâm.
                </span>
            </div>
            <div class="mt-4">
                <div class="items-center flex">
                    <div class="flex-1 overflow-x-hidden">
                        <div class="overflow-x-auto overflow-y-hidden flex">
                            <div class="service items-center flex space-x-3 w-full">
                                <template>
                                    <!-- service -->
                                    <div v-for="itemService in listService"
                                        :key="itemService.id"
                                        class="h-[var(--box-size)] w-[100%] relative rounded cursor-pointer"
                                        :style="itemService.styleService">
                                        <!-- w-[var(--box-size)] -->
                                        <span
                                            class="left-3 absolute text-[14px] font-semibold max-w-[85px] top-3 leading-[150%]">
                                            {{ itemService.nameService }}
                                        </span>
                                        <button
                                            class="bg-[#FFFFFF] items-center rounded-full bottom-3 flex h-[32px] px-[10px] py-0 left-3 absolute hover:bg-[#F6F9FC]">
                                            <span class="text-[14px] font-semibold">
                                                {{ itemService.buttonService }}
                                            </span>
                                            <i class="ml-[4px] ti-arrow-right"></i>
                                        </button>
                                        <div
                                            class="bottom-3 h-[var(--image-size)] absolute right-3 w-[var(--image-size)]">
                                            <img :alt="itemService.nameService" class="w-[80px] h-[80px]"
                                                :src="itemService.srcService">
                                        </div>
                                    </div>
                                </template>

                                <!-- thành viên onward -->
                                <div class="h-[var(--box-size)] w-[100%] relative rounded bg-[#FFFFFF] p-3">
                                    <div class="w-5 h-5 rounded-full flex items-center justify-center relative bg-[#3BB346]">
                                        <i class="w-3 h-3 inline-block text-[15px] absolute">
                                            <img :src="checkSVG" alt="check">
                                        </i>
                                    </div>
                                    <div class="mt-2">
                                        <div class="text-[12px] leading-[150%]">
                                            {{ this.onwardPara }}
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
</template>

<script>
export default {
    data() {
        return {
            checkSVG: require("@/assets/iconSVG/check.svg"),
            listService: [
                {
                    id: 2700,
                    nameService: "Trải nghiệm tận tay",
                    styleService: "background: rgb(250, 244, 255)",
                    buttonService: "Khám phá",
                    srcService: "https://thinkpro.vn/usp/usp-1.png"
                },
                {
                    id: 2701,
                    nameService: "Tư vấn viên tận tâm",
                    styleService: "background: rgb(254, 238, 204);",
                    buttonService: "Khám phá",
                    srcService: "https://thinkpro.vn/usp/usp-2.png"
                },
                {
                    id: 2702,
                    nameService: "Trung tâm bảo vệ khách hàng",
                    styleService: "background: rgb(203, 231, 254);",
                    buttonService: "Khám phá",
                    srcService: "https://thinkpro.vn/usp/usp-3.png"
                },
                {
                    id: 2703,
                    nameService: "Phục vụ đến 24h",
                    styleService: "background: rgb(251, 207, 216);",
                    buttonService: "Khám phá",
                    srcService: "https://thinkpro.vn/usp/usp-4.png"
                },
            ],
            onwardPara: "Thành viên thuộc Onward Together Group. Tập đoàn bán lẻ từ 2013 với nguyên tắc hoạt động: Khách hàng là trung tâm."
        }
    }
}
</script>

<style>
.section-container {
    margin-top: 3rem;
    --box-size: 132px;
    --image-size: 80px;
}
</style>