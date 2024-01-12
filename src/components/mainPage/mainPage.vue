<template>
    <main class="page-home bg-[#F6F9FC]">
        <div class="container py-8 mr-auto ml-auto">
            <!-- intro section -->
            <section class="introSection rounded overflow-hidden h-[350px]"
                style="color: rgb(255, 255, 255); background-color: rgb(0, 219, 255);">
                <div class="flex h-full">
                    <div class="w-1/3 px-6 py-8">
                        <h1 class="font-semibold text-[28px] leading-[40px]">Tận Hưởng Năm Mới 🎉</h1>
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
            pTagIntro: "Thinkpro gửi tặng bạn những lời chúc tốt lành cùng hàng loạt \"Deal Hot\" đầy hấp dẫn. Tại đây, bạn sẽ khám phá những sản phẩm công nghệ chất lượng và tiên tiến nhất để bắt đầu một năm mới tràn đầy cơ hội và thành công!",
            imgSrcIntro: "https://images.thinkgroup.vn/unsafe/1600x600/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/categories/2023/12/26/frame-95551666-thinkpro-6bX.jpeg"
        }
    }
}
</script>

<style scoped>

</style>