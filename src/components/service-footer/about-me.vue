<template>
    <main class="bg-[#F6F9FC] py-6">
        <div class="container bg-white overflow-hidden rounded-3xl mr-auto ml-auto">
            <section class="px-[108px] py-9">
                <h1 class="font-semibold text-[32px] leading-[44px]">{{ serviceThinkpro }}</h1>
                <BasePageServiceFooter :ownerPost="ownerPost" :timePost="timePost"></BasePageServiceFooter>
                <div class="mt-8 text-xl leading-[150%] italic">
                    <span class="mr-2 font-bold text-[#0065EE]">//</span>
                    {{ serviceThinkpro }}
                </div>
                <div class="mt-6">
                    <div class="text-[20px] leading-[150%] space-y-6"
                    v-html="aboutMe.content">
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import BasePageServiceFooter from '../sharedVue/base-page/base-page-service-footer.vue';
import { data } from './service-json/about-me.js'
export default {
    components: {
        BasePageServiceFooter
    },
    data() {
        return {
            serviceThinkpro: "Về chúng tôi - ThinkPro",
            ownerPost: "Huyền",
            timePost: "12:32, 25/03/2023",
            aboutMe: data
        }
    },
}
</script>