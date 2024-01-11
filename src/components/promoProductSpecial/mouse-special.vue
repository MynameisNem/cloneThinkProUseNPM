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
                    id: 21800,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/14/img-5671-thinkpro.png",
                    nameProduct: "Chuột Không Dây E-DRA EM605W - Ergonomic Bluetooth & Wireless 2.4Ghz",                    
                    priceProduct: "299.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Bluetooth & Wireless 2.4Ghz"
                },
                // Dell XPS 13 Plus 9320 bản i5 1240P done
                {
                    id: 21801,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-keychron-m1-6610-thumb.png",
                    nameProduct: "Chuột không dây Keychron M1 Bluetooth 5.1 & Wireless 2.4Ghz",                    
                    priceProduct: "1.190.000",
                    priceDown: "-20%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Bluetooth 5.1 & Wireless 2.4Ghz ",
                },
                // Dell Inspiron 16 5630 done
                {
                    id: 21802,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-hyperwork-silentium-6895-thumb.png",
                    nameProduct: "Chuột không dây HyperWork Silentium Bluetooth & Wireless",                    
                    priceProduct: "440.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Bluetooth & Wireless ",
                },
                // Dell Inspiron 13 5330 done
                {
                    id: 21803,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-cong-thai-hoc-lift-vertical-4204-thumb.png",
                    nameProduct: "Chuột Công Thái Học LIFT VERTICAL",                    
                    priceProduct: "1.390.000",
                    priceDown: "-13%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // ThinkBook 14 G5+ bản R7 7735H done
                {
                    id: 21804,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/e-dra-em604w-5526-thumb.png",
                    nameProduct: "Chuột E-DRA EM604W",                    
                    priceProduct: "109.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // Dell Inspiron 14 5430 bản FHD+ done
                {
                    id: 21805,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-microsoft-1850-1841-thumb.png",
                    nameProduct: "Chuột không dây Microsoft 1850 U7Z-00005",                    
                    priceProduct: "209.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1265U done
                {
                    id: 21806,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/khong-day-logitech-signature-m650-3652-thumb.png",
                    nameProduct: "Chuột không dây Logitech SIGNATURE M650",                    
                    priceProduct: "650.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                },
                // Legion 5 Pro 2022 done
                {
                    id: 21807,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/microsoft-modern-mouse-ws3-4124-thumb.png",
                    nameProduct: "Chuột Microsoft Modern Mouse (WS3)",                    
                    priceProduct: "849.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                },
                // Dell Inspiron 14 5430 bản QHD+ done
                {
                    id: 21808,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-keychron-m3-6603-thumb.png",
                    nameProduct: "Chuột không dây Keychron M3 Mini",                    
                    priceProduct: "1.150.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Mini",
                },
                // Dell XPS 13 9315 (2022) done
                {
                    id: 21809,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-logitech-mx-anywhere-2s-1026-thumb.png",
                    nameProduct: "Chuột Logitech MX Anywhere 2S",                    
                    priceProduct: "1.190.000",
                    priceDown: "-20%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // ThinkBook 14 G5+ bản i5 13500H done
                {
                    id: 21810,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-ugreen-silent-5986-thumb.png",
                    nameProduct: "Chuột không dây  Ugreen Silent Wireless 2.4Ghz",                    
                    priceProduct: "199.000",
                    priceDown: "-49%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Wireless 2.4Ghz",
                },
                // ThinkPad X1 Carbon Gen 11 done
                {
                    id: 21811,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-monsgeek-d1-7369-thumb.png",
                    nameProduct: "Chuột không dây Monsgeek D1 Wireless 2.4Ghz",                    
                    priceProduct: "189.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    styleProduct3: "border: 1px solid #FFC0CB; background: #FFC0CB;",
                    inforProduct1: "Wireless 2.4Ghz",
                },
                // ThinkBook 16 G5+ bản R7 7735H 16gb ram  done
                {
                    id: 21812,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/6/29/logitech_mx_master_3S_04.jpg",
                    nameProduct: "Chuột Logitech MX Master 3S",                    
                    priceProduct: "2.290.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 16gb ram done
                {
                    id: 21813,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-khong-day-keychron-m3-6603-thumb.png",
                    nameProduct: "Chuột không dây Keychron M3 Standard",                    
                    priceProduct: "1.190.000",
                    priceDown: "-20%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Standard",
                },
                // Dell Inspiron 14 5430 bản i5 1340P FHD+ done
                {
                    id: 21814,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/chuot-logitech-mx-anywhere-3s-6844-thumb.png",
                    nameProduct: "Chuột Logitech MX Anywhere 3S",                    
                    priceProduct: "1.590.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid #7D7D7D; background: #7D7D7D;",
                    styleProduct2: "border: 1px solid #DADDE0; background: #FFFFFF;",
                },                
            ],
        }
    }
}
</script>