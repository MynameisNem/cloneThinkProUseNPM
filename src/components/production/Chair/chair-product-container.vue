<template>
    <BaseProductContainer :product-infor="productInfor"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '../base-product-container.vue';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            productInfor: [
                // inspiron 14 5430
                {
                    id: 20200,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/Herman-Miller-Aeron-02.png",
                    productName: "Ghế Công Thái Học Herman Miller Aeron",
                    productPrice: "22.500.000",
                    productDiscount: "-30%",
                    productColor: "border: 1px solid #201F1F; background: #201F1F;",
                    productColor2: "border: 1px solid #716D6D; background: #716D6D;",
                    productColor3: "border: 1px solid #F2F2F2; background: #F2F2F2;"
                },
                // có quà
                {
                    id: 20201,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/HyperWork-HW01-Gray-01.png",
                    productName: "Ghế Công Thái Học Xiaomi Butterfly Wing",
                    productPrice: "3.290.000",
                    productDiscount: "-18%",
                    productColor: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20202,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-Davry-Ivino-GII-01.png",
                    productName: "Ghế Công Thái Học GT Chair Dvary Ivino Gen II",
                    productPrice: "7.990.000",
                    productDiscount: "-19%",
                    productColor: "border: 1px solid #1A1A1A; background: #1A1A1A;",
                    productColor2: "border: 1px solid #545050; background: #545050;",
                    productColor3: "border: 1px solid #CCBEBE; background: #CCBEBE;",
                },
                {
                    id: 20203,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Herman-Miller-Mirra-2-Black-01.png",
                    productName: "Ghế công thái học Herman Miller Mirra 2",
                    productPrice: "21.990.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #BEBEBE; background: #BEBEBE;"
                },
                {
                    id: 20204,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/5/T21 Pro_01.jpg",
                    productName: "Ghế văn phòng CTH Ergo T21 Pro",
                    productPrice: "2.590.000",
                    productDiscount: "-4%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #607B8B; background: #607B8B;",
                },
                // có quà
                {
                    id: 20205,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/6/Vera_00.jpg",
                    productName: "Ghế Công Thái Học Manson Vera",
                    productPrice: "3.990.000",
                    productDiscount: "-11%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #555454; background: #555454;",
                },
                // có quà
                {
                    id: 20206,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/GT-Chair-I-see-M-Black-01.png",
                    productName: "Ghế Công Thái Học GT Chair I-see M",
                    productPrice: "5.590.000",
                    productDiscount: "-14%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                },
                // có quà
                {
                    id: 20207,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-I-see-X-01.png",
                    productName: "Ghế Công Thái Học GT Chair Dvary I-see X",
                    productPrice: "8.450.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                {
                    id: 20208,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/9/27/ghe-cong-thai-hoc-linochair-thinkpro-nicespace-KvI.png",
                    productName: "Ghế Công Thái Học Lino Chair",
                    productPrice: "2.790.000",
                    productDiscount: "-22%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                },
                {
                    id: 20209,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/21/Ảnh màn hình 2022-12-21 lúc 17.06.01.png",
                    productName: "Ghế công thái học E-Dra EEC214",
                    productPrice: "3.590.000",
                    productDiscount: "-28%",
                    productColor: "border: 1px solid #000000; background: #000000;"
                },
                // có quà
                {
                    id: 20210,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Vchair-Commander-Gray-08.png",
                    productName: "Ghế công thái học Vchair Commander",
                    productPrice: "5.590.000",
                    productDiscount: "-29%",
                    productColor: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    productColor2: "border: 1px solid #000000; background: #000000;",

                },
                {
                    id: 20211,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/22/Vchair-Evolution-Gray-01.png",
                    productName: "Ghế công thái học Vchair Evolution",
                    productPrice: "9.990.000",
                    productDiscount: "-31%",
                    productColor: "border: 1px solid #8C8C8C; background: #8C8C8C;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20212,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/Sihoo-M90C-01.png",
                    productName: "Ghế Công Thái Học Sihoo M90C",
                    productPrice: "4.690.000",
                    productDiscount: "-22%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #B2AFAF; background: #B2AFAF;"
                },
                {
                    id: 20213,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/23/GT-Chair-Dvary-Butterfly-1.png",
                    productName: "Ghế Công Thái Học  GT Chair Dvary Butterfly",
                    productPrice: "13.490.000",
                    productDiscount: "-22%",
                    productColor: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                    productColor3: "border: 1px solid #FFB5C5; background: #FFB5C5;",
                },
                // có quà
                {
                    id: 20214,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/6/ghe-cong-thai-hoc-manson-iris-thinkpro-nicespace.jpg",
                    productName: "Ghế Công Thái Học Manson Iris",
                    productPrice: "4.290.000",
                    productDiscount: "-28%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                },
                {
                    id: 20215,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/5/ghe-cong-thai-hoc-sihoo-au-doro-s300-thinkpro-nicespace-7TA.png",
                    productName: "Ghế Công Thái Học Sihoo AU - Doro S300",
                    productPrice: "11.890.000",
                    productDiscount: "-21%",
                    productColor: "border: 1px solid #BEBEBE; background: #BEBEBE;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                },
                // có quà
                {
                    id: 20216,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/19/ghe-cong-thai-hoc-merryfair-work-thinkpro-nicespace.png",
                    productName: "Ghế Công Thái Học Merryfair Work",
                    productPrice: "2.990.000",
                    productDiscount: "-8%",
                    productColor: "border: 1px solid #CD0000; background: #CD0000;",
                    productColor2: "border: 1px solid #000000; background: #000000;",
                },
                {
                    id: 20217,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/4/p069yma78v_bl418_sm01_(1).jpg",
                    productName: "Ghế Công Thái Học MERRYFAIR Fulkrum",
                    productPrice: "3.990.000",
                    productDiscount: "-17%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #78DED3; background: #78DED3;",
                },
                // có quà
                {
                    id: 20218,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/2/8/Spinelli-High-Back-Front-Honey-doimau.jpg",
                    productName: "Ghế Công thái học MerryFair Spinelly",
                    productPrice: "5.990.000",
                    productDiscount: "-30%",
                    productColor: "border: 1px solid #FF7200; background: #FF7200;",
                    productColor2: "border: 1px solid #000000; background: #000000;"

                },
                // có quà
                {
                    id: 20219,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/26/ghe-cong-thai-hoc-herman-miller-cosm-high-back-thinkpro-nicespace-qo6.png",
                    productName: "Ghế Công Thái Học Herman Miller Cosm - High Back",
                    productPrice: "34.490.000",
                    productDiscount: "-13%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productColor2: "border: 1px solid #205381; background: #205381;",
                    productColor3: "border: 1px solid #FF0000; background: #FF0000;",
                },
            ],
        }
    }
}
</script>

