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
                    v-html="formatData">
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import BasePageServiceFooter from '../sharedVue/base-page/base-page-service-footer.vue';
import json from './service-json/delivery-service.json'
export default {
    components: {
        BasePageServiceFooter
    },
    data() {
        return {
            serviceThinkpro: "Chính sách vận chuyển - ThinkPro",
            ownerPost: "Nguyễn Công Minh",
            timePost: "09:44, 28/01/2023",
            deliveryData: json
        }
    },
    computed: {
        formatData() {
            return this.deliveryData.content.join('');
        }
    }
    // mounted() {
    //     fetch(this.deliveryData)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.deliveryData = data;
    //             console.log('Fetched data: ', data)

    //         })
    //         .catch(error => {
    //             console.error('Fetching failed: ', error)
    //         })
    // }
}
</script>