<template>
    <section class="complain">
        <div class="h-full p-4 rounded bg-[#F6F9FC]">
            <h2 class="text-[18px] font-semibold leading-[150%]">{{ textComplain1 }}</h2>
            <p class="mt-3 text-[14px] leading-[150%]">
                {{ textComplain2 }}
            </p>
            <div class="mt-8">
                <a :aria-label="textComplain3" :href="srcComplain" target="blank">
                    <button class="text-[#FFFFFF] bg-[#0065EE] hover:bg-[#0032EE] buttonComplain">
                        <span>{{ textComplain3 }}</span>
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            textComplain1: "Phản hồi, góp ý, khiếu nại",
            textComplain2: "Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng tôi sẵn sàng lắng nghe quý khách.",
            srcComplain: "https://onwardtogether.one/listen",
            textComplain3: "Gửi phản hồi ngay"
        }
    }
}
</script>

<style scoped>
.buttonComplain {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; /* Tương đương với space-x-2 trong Tailwind */
    padding-left: 0.75rem; /* Tương đương với px-3 trong Tailwind */
    padding-right: 0.75rem; /* Tương đương với px-3 trong Tailwind */
    width: 100%; /* Tương đương với w-full trong Tailwind */
    height: 44px; /* Tương đương với h-[44px] trong Tailwind */
    border-radius: 0.375rem; /* Tương đương với rounded-md trong Tailwind */
    cursor: pointer;
    font-weight: bold;
}
</style>