<template>
    <main class="page-home bg-[#F6F9FC]">
        <div class="container py-8 mr-auto ml-auto">
            <!-- intro section -->
            <section class="introSection rounded overflow-hidden h-[300px]"
                style="color: rgb(255, 255, 255); background-color: rgb(11, 203, 224);">
                <div class="flex h-full">
                    <div class="w-1/3 px-6 py-8">
                        <h1 class="font-semibold text-[28px] leading-[40px]">Tháng ThinkPro Fans 😉🎁</h1>
                        <p class="mt-2">
                            {{ pTagIntro }}
                        </p>
                    </div>
                    <div class="w-2/3 overflow-hidden">
                        <img class="h-full w-full object-cover" :src="imgSrcIntro" alt="Tháng ThinkPro Fans 😉🎁">
                    </div>
                </div>
            </section>
            <SectionCategory></SectionCategory>
            <SectionPromo></SectionPromo>
            <SectionPreOrder></SectionPreOrder>
            <SectionChoose></SectionChoose>
            <SectionSuggest></SectionSuggest>
        </div>
    </main>
</template>

<script>
import SectionCategory from './sectionCategory.vue'
import SectionPromo from './sectionPromo.vue'
import SectionPreOrder from './sectionPreOrder.vue'
import SectionChoose from './sectionChoose.vue'
import SectionSuggest from './sectionSuggest.vue'
export default {
    components: {
        SectionCategory,
        SectionPromo,
        SectionPreOrder,
        SectionChoose,
        SectionSuggest
    },
    data() {
        return {
            pTagIntro: "Tháng ThinkPro Fans đã đến và đem theo ngàn ưu đãi hấp dẫn. ThinkPro, mang đến những món đồ công nghệ hiện đại, tiện lợi và giải pháp thông minh tối ưu cho cuộc sống của bạn.Đừng bỏ lỡ cơ hội trải nghiệm những sản phẩm và dịch vụ tốt nhất với giá Ưu Đãi đặc biệt trong tháng này!!",
            imgSrcIntro: "https://images.thinkgroup.vn/unsafe/1600x600/https://media-api-beta.thinkpro.vn/media/core/categories/2023/10/6/thinkpro-backgroud-thinkpro.jpg"
        }
    }
}
</script>

<style>

</style>