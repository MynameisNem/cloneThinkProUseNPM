<template>
    <BaseProductContainer :product-infor="productInfor"></BaseProductContainer>
</template>

<script>
import BaseProductContainer from '@/components/sharedVue/base-page/base-product-container.vue';
export default {
    components: {
        BaseProductContainer
    },
    data() {
        return {
            productInfor: [
                // inspiron 14 5430
                {
                    id: 20000,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-qzZ.png",
                    productName: "Dell Inspiron 14 5430",
                    productPrice: "17.990.000",
                    productDiscount: "-38%",
                    productColor: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    name: 'detailsProduct'       
                },
                // có quà
                {
                    id: 20001,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-nIo.png",
                    productName: "Lenovo ThinkPad X1 Carbon Gen 11",
                    productPrice: "26.990.000",
                    productDiscount: "-33%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productGift: "Quà tặng 399.000",                    
                    
                },
                // có quà
                {
                    id: 20002,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkbook-16-g5-thinkpro-zbb.png",
                    productName: "Lenovo ThinkBook 16 G5+",
                    productPrice: "22.390.000",
                    productDiscount: "-25%",
                    productColor: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    productGift: "Quà tặng 100.000",                    
                    

                },
                {
                    id: 20003,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-SQP.png",
                    productName: "Lenovo ThinkBook 14 G5+",
                    productPrice: "23.990.000",
                    productDiscount: "-20%",
                    productColor: "border: 1px solid rgb(110 109 109); background: rgb(110 109 109);",                    
                    
                },
                {
                    id: 20004,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-9315-2022-thinkpro-V7d.png",
                    productName: "Dell XPS 13 9315 (2022)",
                    productPrice: "18.990.000",
                    productDiscount: "-34%",
                    productColor: "border: 1px solid rgb(139 203 255); background: rgb(139 203 255);",
                    productColor2: "border: 1px solid rgb(113 65 65); background: rgb(113 65 65);",                    
                    
                },
                // có quà
                {
                    id: 20005,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/1/15/Lenovo_ThinkPad_X1_Nano_Gen_2.png",
                    productName: "Lenovo ThinkPad X1 Nano Gen 2",
                    productPrice: "21.990.000",
                    productDiscount: "-37%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productGift: "Quà tặng 898.000",                    
                    
                },
                // có quà
                {
                    id: 20006,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/19/lenovo-thinkpad-x1-carbon-gen-10-thinkpro.png",
                    productName: "Lenovo ThinkPad X1 Carbon Gen 10",
                    productPrice: "20.790.000",
                    productDiscount: "-31%",
                    productColor: "border: 1px solid #000000; background: #000000;",
                    productGift: "Quà tặng 499.000",                    
                    
                },
                // có quà
                {
                    id: 20007,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-zC3.png",
                    productName: "Dell XPS 13 Plus 9320",
                    productPrice: "25.990.000",
                    productDiscount: "-41%",
                    productColor: "border: 1px solid rgb(236 236 236); background: rgb(236 236 236);",
                    productColor2: "border: 1px solid #353535; background: #353535;",
                    productGift: "Quà tặng 399.000",                    
                    
                },
                {
                    id: 20008,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/22/lenovo-legion-5-pro-2022-thinkpro-001.png",
                    productName: "Lenovo Legion 5 Pro 2022",
                    productPrice: "26.990.000",
                    productDiscount: "-33%",
                    productColor: "border: 1px solid #666666; background: #666666;",                    
                    
                },
                {
                    id: 20009,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-latitude-7320-detachable-thinkpro.png",
                    productName: "Dell Latitude 7320 Detachable",
                    productPrice: "11.990.000",
                    productDiscount: "-25%",
                    productColor: "border: 1px solid #000000; background: #000000;",                    
                    
                },
                // có quà
                {
                    id: 20010,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/24/microsoft-surface-pro-9-thinkpro-1.png",
                    productName: "Microsoft Surface Pro 9",
                    productPrice: "26.990.000",
                    productDiscount: "-10%",
                    productColor: "border: 1px solid #E5E4E2; background: #E5E4E2;",
                    productGift: "Quà tặng 399.000",                    
                    
                },
                {
                    id: 20011,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-e14-gen-4-thinkpro-Fcj.png",
                    productName: "Lenovo ThinkPad E14 Gen 4",
                    productPrice: "15.490.000",
                    productDiscount: "-34%",
                    productColor: "border: 1px solid #000000; background: #000000;",                    
                    
                },
                // có quà
                {
                    id: 20012,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/hp-probook-440-g8-thinkpro-01.jpg",
                    productName: "HP ProBook 440 G8",
                    productPrice: "12.990.000",
                    productDiscount: "-19%",
                    productColor: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    productGift: "Quà tặng 100.000",                    
                    
                },
                {
                    id: 20013,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-xps-9520-thinkpro-01.jpg",
                    productName: "Dell XPS 15 9520",
                    productPrice: "27.990.000",
                    productDiscount: "-15%",
                    productColor: "border: 1px solid #ECECEC; background: #ECECEC;",                    
                    
                },
                // có quà
                {
                    id: 20014,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/macbook-air-2022-apple-m2-thinkpro.png",
                    productName: "MacBook Air 2022 (Apple M2)",
                    productPrice: "22.390.000",
                    productDiscount: "-23%",
                    productColor: "border: 1px solid #FFE5BF; background: #FFE5BF;",
                    productColor2: "border: 1px solid #302C2C; background: #302C2C;",
                    productColor3: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    productColor4: "border: 1px solid #747272; background: #747272;",
                    productGift: "Quà tặng 499.000",                    
                    
                },
                {
                    id: 20015,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/19/lenovo-thinkbook-16-g4-thinkpro.png",
                    productName: "Lenovo ThinkBook 16 G4+",
                    productPrice: "21.490.000",
                    productDiscount: "-12%",
                    productColor: "border: 1px solid #8C8C8C; background: #8C8C8C;",                    
                    
                },
                // có quà
                {
                    id: 20016,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lg-gram-17-2022-nhap-khau-thinkpro-uhT.png",
                    productName: "LG Gram 17 2022 (Nhập khẩu)",
                    productPrice: "18.990.000",
                    productDiscount: "-39%",
                    productColor: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    productGift: "Quà tặng 399.000",                    
                    
                },
                {
                    id: 20017,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/17/lenovo-thinkpad-t14-gen-3-amd-den_5.png",
                    productName: "Lenovo ThinkPad T14 Gen 3 AMD",
                    productPrice: "18.490.000",
                    productDiscount: "-38%",
                    productColor: "border: 1px solid #000000; background: #000000;",                    
                    
                },
                // có quà
                {
                    id: 20018,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-plus-7420-thinkpro-hE8.png",
                    productName: "Dell Inspiron 14 Plus (7420)",
                    productPrice: "20.390.000",
                    productDiscount: "-30%",
                    productColor: "border: 1px solid #ECECEC; background: #ECECEC;",
                    productColor2: "border: 1px solid #134953; background: #134953;",
                    productGift: "Quà tặng 399.000",                    
                    
                },
                // có quà
                {
                    id: 20019,
                    productImg: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/dell-inspiron-16-5625-thinkpro-wi5.png",
                    productName: "Dell Inspiron 16 5625",
                    productPrice: "14.390.000",
                    productDiscount: "-28%",
                    productColor: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    productGift: "Quà tặng 100.000",                    
                    
                },
            ],
        }
    },    
}
</script>

<style scoped></style>