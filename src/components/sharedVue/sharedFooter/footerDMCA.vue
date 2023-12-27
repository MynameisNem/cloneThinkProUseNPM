<template>
    <section class="DMCA-section mt-6">
        <hr class="mt-6 mb-5">
        <div class="text-[12px] text-[#6B7075] leading-[150%]">
            <p>{{ textDMCA1 }}</p>
            <p>{{ textDMCA2 }}</p>
            <p>{{ textDMCA3 }}</p>
        </div>
        <div class="mt-5 flex space-x-2">
            <a v-for="itemDMCA in listDMCA" :key="itemDMCA.id" :title="itemDMCA.titleDMCA" rel="noopener"
                :href="itemDMCA.urlDMCA">
                <img :alt="itemDMCA.altDMCA" class="w-[133px] h-[24px]" :src="itemDMCA.srcDMCA">
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            textDMCA1: "© ThinkPro 2023",
            textDMCA2: "Công ty TNHH Công nghệ Think Việt Nam - GPĐKKD: 0107273909 do sở KH & ĐT TP Hà Nội cấp ngày 09/03/2020",
            textDMCA3: "Địa chỉ: 105/562 Đường Láng, Phường Láng Hạ, Quận Đống Đa, Hà Nội. Điện thoại: 1900633579",
            listDMCA: [
                {
                    id: 16010,
                    urlDMCA: "https://www.dmca.com/Protection/Status.aspx?ID=a0c6f0b8-c3c6-4f8b-9344-9a817431c561&refurl=https://thinkpro.vn/",
                    titleDMCA: "DMCA.com Protection Status",
                    altDMCA: "DMCA",
                    srcDMCA: "https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=a0c6f0b8-c3c6-4f8b-9344-9a817431c561",
                },
                {
                    id: 16011,
                    titleDMCA: "GOV",
                    urlDMCA: "http://online.gov.vn/Home/WebDetails/50700?AspxAutoDetectCookieSupport=1",
                    altDMCA: "Đã đăng ký với bộ công thương",
                    srcDMCA: "https://thinkpro.vn/bo-cong-thuong.png"
                }
            ]
        }
    }
}
</script>