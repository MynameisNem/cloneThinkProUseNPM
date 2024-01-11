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
                // có quà
                {
                    id: 20200,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/Herman-Miller-Aeron-02.png",
                    nameProduct: "Ghế Công Thái Học Herman Miller Aeron",
                    priceProduct: "22.500.000",
                    priceDown: "-30%",
                    styleProduct: "border: 1px solid #201F1F; background: #201F1F;",
                    styleProduct2: "border: 1px solid #716D6D; background: #716D6D;",
                    styleProduct3: "border: 1px solid #F2F2F2; background: #F2F2F2;"
                },
                // có quà
                {
                    id: 20201,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/HyperWork-HW01-Gray-01.png",
                    nameProduct: "Ghế Công Thái Học Xiaomi Butterfly Wing",
                    priceProduct: "3.290.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20202,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-Davry-Ivino-GII-01.png",
                    nameProduct: "Ghế Công Thái Học GT Chair Dvary Ivino Gen II",
                    priceProduct: "7.990.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #1A1A1A; background: #1A1A1A;",
                    styleProduct2: "border: 1px solid #545050; background: #545050;",
                    styleProduct3: "border: 1px solid #CCBEBE; background: #CCBEBE;",
                },
                {
                    id: 20203,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Herman-Miller-Mirra-2-Black-01.png",
                    nameProduct: "Ghế công thái học Herman Miller Mirra 2",
                    priceProduct: "21.990.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;"
                },
                {
                    id: 20204,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/5/T21 Pro_01.jpg",
                    nameProduct: "Ghế văn phòng CTH Ergo T21 Pro",
                    priceProduct: "2.590.000",
                    priceDown: "-4%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #607B8B; background: #607B8B;",
                },
                // có quà
                {
                    id: 20205,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/6/Vera_00.jpg",
                    nameProduct: "Ghế Công Thái Học Manson Vera",
                    priceProduct: "3.990.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #555454; background: #555454;",
                },
                // có quà
                {
                    id: 20206,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/GT-Chair-I-see-M-Black-01.png",
                    nameProduct: "Ghế Công Thái Học GT Chair I-see M",
                    priceProduct: "5.590.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                },
                // có quà
                {
                    id: 20207,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-I-see-X-01.png",
                    nameProduct: "Ghế Công Thái Học GT Chair Dvary I-see X",
                    priceProduct: "8.450.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20208,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/27/ghe-cong-thai-hoc-linochair-thinkpro-nicespace-KvI.png",
                    nameProduct: "Ghế Công Thái Học Lino Chair",
                    priceProduct: "2.790.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    id: 20209,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/21/Ảnh màn hình 2022-12-21 lúc 17.06.01.png",
                    nameProduct: "Ghế công thái học E-Dra EEC214",
                    priceProduct: "3.590.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;"
                },
                // có quà
                {
                    id: 20210,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Vchair-Commander-Gray-08.png",
                    nameProduct: "Ghế công thái học Vchair Commander",
                    priceProduct: "5.590.000",
                    priceDown: "-29%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",

                },
                {
                    id: 20211,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Vchair-Evolution-Gray-01.png",
                    nameProduct: "Ghế công thái học Vchair Evolution",
                    priceProduct: "9.990.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20212,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/Sihoo-M90C-01.png",
                    nameProduct: "Ghế Công Thái Học Sihoo M90C",
                    priceProduct: "4.690.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #B2AFAF; background: #B2AFAF;"
                },
                {
                    id: 20213,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-Dvary-Butterfly-1.png",
                    nameProduct: "Ghế Công Thái Học  GT Chair Dvary Butterfly",
                    priceProduct: "13.490.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    styleProduct3: "border: 1px solid #FFB5C5; background: #FFB5C5;",
                },
                // có quà
                {
                    id: 20214,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/6/ghe-cong-thai-hoc-manson-iris-thinkpro-nicespace.jpg",
                    nameProduct: "Ghế Công Thái Học Manson Iris",
                    priceProduct: "4.290.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                },
                {
                    id: 20215,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/5/ghe-cong-thai-hoc-sihoo-au-doro-s300-thinkpro-nicespace-7TA.png",
                    nameProduct: "Ghế Công Thái Học Sihoo AU - Doro S300",
                    priceProduct: "11.890.000",
                    priceDown: "-21%",
                    styleProduct: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20216,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/19/ghe-cong-thai-hoc-merryfair-work-thinkpro-nicespace.png",
                    nameProduct: "Ghế Công Thái Học Merryfair Work",
                    priceProduct: "2.990.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #CD0000; background: #CD0000;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 20217,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/4/p069yma78v_bl418_sm01_(1).jpg",
                    nameProduct: "Ghế Công Thái Học MERRYFAIR Fulkrum",
                    priceProduct: "3.990.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #78DED3; background: #78DED3;",
                },
                // có quà
                {
                    id: 20218,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/8/Spinelli-High-Back-Front-Honey-doimau.jpg",
                    nameProduct: "Ghế Công thái học MerryFair Spinelly",
                    priceProduct: "5.990.000",
                    priceDown: "-30%",
                    styleProduct: "border: 1px solid #FF7200; background: #FF7200;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;"

                },
                // có quà
                {
                    id: 20219,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/26/ghe-cong-thai-hoc-herman-miller-cosm-high-back-thinkpro-nicespace-qo6.png",
                    nameProduct: "Ghế Công Thái Học Herman Miller Cosm - High Back",
                    priceProduct: "34.490.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #205381; background: #205381;",
                    styleProduct3: "border: 1px solid #FF0000; background: #FF0000;",
                },
            ],
        }
    }
}
</script>