<template>
    <div class="mt-6 grid grid-cols-4 gap-3">
        <FooterPayment></FooterPayment>
        <FooterHelpfullInfor></FooterHelpfullInfor>
        <FooterSocialNetwork></FooterSocialNetwork>
        <FooterComplain></FooterComplain>
    </div>
</template>

<script>
import FooterPayment from './footerPayment.vue';
import FooterHelpfullInfor from './footerHelpfull.vue';
import FooterSocialNetwork from './footerSocialNetwork.vue';
import FooterComplain from './footerComplain.vue'
export default {
    components: {
        FooterPayment,
        FooterHelpfullInfor,
        FooterSocialNetwork,
        FooterComplain
    }
}
</script>