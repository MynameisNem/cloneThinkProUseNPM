<template>
    <SectionPromoSpecial :list-sale-promo="listSalePromo"></SectionPromoSpecial>
</template>

<script>
import SectionPromoSpecial from '../mainPage/sectionPromoProductSpecial'
export default {
    components: {
        SectionPromoSpecial
    },
    data() {
        return {
            listSalePromo: [
                {
                    id: 21010,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/17/msi-modern-md241pw-238inch-thinkpro-07-thinkpro.png",
                    nameProduct: "Màn hình MSI Modern MD241PW 23.8inch (FHD/IPS/75Hz)",
                    priceProduct: "3.990.000",
                    priceDown: "-39%",
                    styleProduct: "border: 1px solid #000000; background: #000000",
                    giftInfor: "Quà tặng 450.000"
                },
                // có quà
                {
                    id: 21011,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/15/lg-gram-view-2023-16mr70asda5-thinkpro.jpg",
                    nameProduct: "LG Gram +View 2023 16MR70.ASDA5",
                    priceProduct: "7.090.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0",
                    giftInfor: "Quà tặng 450.000"
                },
            ],
        }
    }
}
</script>