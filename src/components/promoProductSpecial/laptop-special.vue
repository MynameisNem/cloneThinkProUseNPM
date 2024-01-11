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
            // ThinkBook 16 G5 + bản i5 13500H 16gb ram done
                {
                    id: 2000,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkbook-16-g5-thinkpro-xxv.png",
                    nameProduct: "Lenovo ThinkBook 16 G5+",                    
                    priceProduct: "22.790.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    inforProduct1: "i5 13500H",
                    inforProduct2: "2.5K",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                },
                // Dell XPS 13 Plus 9320 bản i5 1240P done
                {
                    id: 2001,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-VnX.png",
                    nameProduct: "Dell XPS 13 Plus 9320",                    
                    priceProduct: "27.990.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i5 1240P",
                    inforProduct2: "FHD+ Touch",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                },
                // Dell Inspiron 16 5630 done
                {
                    id: 2002,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/9/in5630nt-cnb-00000ff090-sl.jpg",
                    nameProduct: "Dell Inspiron 16 5630",                    
                    priceProduct: "14.990.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i5 1335U",
                    inforProduct2: "QHD+",
                    inforProduct3: "8GB",
                    inforProduct4: "512GB",
                },
                // Dell Inspiron 13 5330 done
                {
                    id: 2003,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-inspiron-13-5330-6308-thumb.png",
                    nameProduct: "Dell Inspiron 13 5330",                    
                    priceProduct: "18.790.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid rgb(236 236 236); background: rgb(236 236 236);",
                    inforProduct1: "i5 1340P",
                    inforProduct2: "QHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                },
                // ThinkBook 14 G5+ bản R7 7735H done
                {
                    id: 2004,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-bmA.png",
                    nameProduct: "Lenovo ThinkBook 14 G5+",                    
                    priceProduct: "22.990.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    inforProduct1: "R7 7735H",
                    inforProduct2: "2.8K",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 900.000đ"
                },
                // Dell Inspiron 14 5430 bản FHD+ done
                {
                    id: 2005,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-yum.png",
                    nameProduct: "Dell Inspiron 14 5430",                    
                    priceProduct: "19.390.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i7 1360P",
                    inforProduct2: "FHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "1TB",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1265U done
                {
                    id: 2006,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-carbon-gen-10-7271-thumb.png",
                    nameProduct: "ThinkPad X1 Carbon Gen 10",                    
                    priceProduct: "31.990.000",
                    priceDown: "-16%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    inforProduct1: "i7 1265U",
                    inforProduct2: "FHD+ Touch",
                    inforProduct3: "16GB",
                    inforProduct4: "256GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Legion 5 Pro 2022 done
                {
                    id: 2007,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-legion-5-pro-2022-7297-thumb.png",
                    nameProduct: "Legion 5 Pro 2022",                    
                    priceProduct: "26.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    inforProduct1: "i7 12700H",
                    inforProduct2: "QHD+ 165Hz",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    vgaInfor: "RTX3050Ti",
                },
                // Dell Inspiron 14 5430 bản QHD+ done
                {
                    id: 2008,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-yum.png",
                    nameProduct: "Dell Inspiron 14 5430",                    
                    priceProduct: "17.990.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i7 1360P",
                    inforProduct2: "QHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "1TB",
                },
                // Dell XPS 13 9315 (2022) done
                {
                    id: 2009,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7491-thumb.png",
                    nameProduct: "Dell XPS 13 9315 (2022)",                    
                    priceProduct: "26.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(139 203 255); background: rgb(139 203 255);",
                    inforProduct1: "i7 1250U",
                    inforProduct2: "UHD+ Touch",
                    inforProduct3: "32GB",
                    inforProduct4: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkBook 14 G5+ bản i5 13500H done
                {
                    id: 2010,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro-bmA.png",
                    nameProduct: "Lenovo ThinkBook 14 G5+",                    
                    priceProduct: "24.990.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    inforProduct1: "i5 13500H",
                    inforProduct2: "2.8K",
                    inforProduct3: "32GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkPad X1 Carbon Gen 11 done
                {
                    id: 2011,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-BdR.png",
                    nameProduct: "ThinkPad X1 Carbon Gen 11",                    
                    priceProduct: "27.990.000",
                    priceDown: "-30%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    inforProduct1: "i5 1355U",
                    inforProduct2: "FHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkBook 16 G5+ bản R7 7735H 16gb ram  done
                {
                    id: 2012,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkbook-16-g5-thinkpro-xxv.png",
                    nameProduct: "Lenovo ThinkBook 16 G5+",                    
                    priceProduct: "22.390.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid rgb(102 102 102); background: rgb(102 102 102);",
                    inforProduct1: "R7 7735H",
                    inforProduct2: "2.5K",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 900.000đ"
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 16gb ram done
                {
                    id: 2013,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-rHc.png",
                    nameProduct: "Dell XPS 13 Plus 9320",                    
                    priceProduct: "26.990.000",
                    priceDown: "-44%",
                    styleProduct: "border: 1px solid rgb(236 236 236); background: rgb(236 236 236);",
                    inforProduct1: "i7 1260P",
                    inforProduct2: "3.5K OLED Touch",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 100.000đ"
                },
                // Dell Inspiron 14 5430 bản i5 1340P FHD+ done
                {
                    id: 2014,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    nameProduct: "Dell Inspiron 14 5430",                    
                    priceProduct: "17.290.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i5 1260P",
                    inforProduct2: "FHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 31.990 done
                {
                    id: 2015,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    nameProduct: "Dell XPS 13 Plus 9320",                    
                    priceProduct: "31.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid rgb(54 54 54); background: rgb(54 54 54);",
                    inforProduct1: "i7 1260P",
                    inforProduct2: "3.5K OLED Touch",
                    inforProduct3: "32GB",
                    inforProduct4: "1TB",
                    giftInfor: "Quà tặng 100.000đ"
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 32gb ram done
                {
                    id: 2016,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-10-thinkpro-5vj.png",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 10",                    
                    priceProduct: "31.990.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    inforProduct1: "i7 1270P",
                    inforProduct2: "4K OLED Touch",
                    inforProduct3: "32GB",
                    inforProduct4: "256GB",
                },
                // Dell XPS 13 9315 (2022) bản màu (113 65 65) done
                {
                    id: 2017,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7491-thumb.png",
                    nameProduct: "Dell XPS 13 9315 (2022)",                    
                    priceProduct: "27.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(113 65 65); background: rgb(113 65 65);",
                    inforProduct1: "i7 1250U",
                    inforProduct2: "FHD+",
                    inforProduct3: "32GB",
                    inforProduct4: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell XPS 13 9315 (2022) bản màu (139 203 255) done
                {
                    id: 2018,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-7236-thumb.png",
                    nameProduct: "Dell XPS 13 9315 (2022)",                    
                    priceProduct: "27.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid rgb(139 203 255); background: rgb(139 203 255);",
                    inforProduct1: "i7 1250U",
                    inforProduct2: "FHD+",
                    inforProduct3: "32GB",
                    inforProduct4: "1TB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // ThinkPad X1 Carbon Gen 11 bản i7 1365U 32gb ram giá 53.990 done
                {
                    id: 2019,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-carbon-gen-11-6950-thumb.png",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 11",                    
                    priceProduct: "53.990.000",
                    priceDown: "-10%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    inforProduct1: "i7 1365U",
                    inforProduct2: "FHD+",
                    inforProduct3: "32GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell Inspiron 14 5430 bản i7 1360P QHD+ 16gb ram giá 19.390 done
                {
                    id: 2020,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    nameProduct: "Dell Inspiron 14 5430",                    
                    priceProduct: "19.390.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i7 1360P",
                    inforProduct2: "QHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "1TB",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 16gb ram done
                {
                    id: 2021,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-x1-carbon-gen-10-thinkpro-5vj.png",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 10",                    
                    priceProduct: "32.990.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    inforProduct1: "i7 1270P",
                    inforProduct2: "FHD+ Touch",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                    giftInfor: "Quà tặng 450.000đ"
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 28.990 done
                {
                    id: 2022,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-xps-13-plus-9320-thinkpro-CCH.png",
                    nameProduct: "Dell XPS 13 Plus 9320",                    
                    priceProduct: "28.990.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid rgb(54 54 54); background: rgb(54 54 54);",
                    inforProduct1: "i7 1260P",
                    inforProduct2: "3.5K OLED Touch",
                    inforProduct3: "32GB",
                    inforProduct4: "1TB",
                    giftInfor: "Quà tặng 550.000đ"
                },
                // Dell Inspiron 14 5430 bản i5 1340P QHD+ giá 18.390
                {
                    id: 2023,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-inspiron-14-5430-thinkpro-ORA.png",
                    nameProduct: "Dell Inspiron 14 5430",                    
                    priceProduct: "18.390.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid rgb(192 192 192); background: rgb(192 192 192);",
                    inforProduct1: "i5 1340P",
                    inforProduct2: "QHD+",
                    inforProduct3: "16GB",
                    inforProduct4: "512GB",
                }
            ],
        }
    }
}
</script>