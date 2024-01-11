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
                    id: 21900,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/2/22/multipro7in1-0jpg",
                    nameProduct: "Cổng chuyển đổi Mazer USB-C Multimedia Pro 7-in-1 M-UC2MULTI7002-BK",                    
                    priceProduct: "1.090.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // Dell XPS 13 Plus 9320 bản i5 1240P done
                {
                    id: 21901,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/18/cap-sac-mazer-thinkpro-nicespace.png",
                    nameProduct: "Cổng  Chuyển Đổi Mazer ALU USB-C to HDMI 4k/60Hz Adapter Output HDMI 4K 60Hz",                    
                    priceProduct: "399.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #716D6D; background: #716D6D;",
                    inforProduct1: "Output HDMI 4K 60Hz",
                },
                // Dell Inspiron 16 5630 done
                {
                    id: 21902,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2020/12/28/HD22EGRAY_00.png",
                    nameProduct: "Cổng chuyển USB-C HyperDrive BAR 6 in 1 HD22E-GRAY",                    
                    priceProduct: "1.490.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #716D6D; background: #716D6D;",
                },
                // Dell Inspiron 13 5330 done
                {
                    id: 21903,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/10/30/hyperdrive-6in1jpg",
                    nameProduct: "Cổng chuyển HyperDriver Gen 2 6 in 1 HD-G206",                    
                    priceProduct: "1.390.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #5C5C5C; background: #5C5C5C;",
                },
                // ThinkBook 14 G5+ bản R7 7735H done
                {
                    id: 21904,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/25/hub-lenovo-thinkplus-6-in-1-thinkpro-KyJ.png",
                    nameProduct: "Cổng chuyển đổi Lenovo ThinkPlus 6 in 1 Hub Type 6 in 1 1 x USB - C 1 x HDMI 1 x VGA 3 x USB - A",                    
                    priceProduct: "690.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Hub Type 6 in 1",
                    inforProduct2: "1 x USB - C",
                    inforProduct3: "1 x HDMI",
                    inforProduct4: "1 x VGA",
                    inforProduct5: "3 x USB - A"
                },
                // Dell Inspiron 14 5430 bản FHD+ done
                {
                    id: 21905,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/2/22/multipro6in1-0jpg",
                    nameProduct: "Cổng chuyển đổi Mazer USB-C Multimedia Pro 6-in-1 M-UC2MULTI7001-BK",                    
                    priceProduct: "880.000",
                    priceDown: "-25%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1265U done
                {
                    id: 21906,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/25/lenovo-thinkplus-video-adapter-usb-type-c-to-hdmi-4k-vga-1080p-thinkpro-thinkpro.png",
                    nameProduct: "Cổng chuyển đổi Lenovo ThinkPlus 4 in 1 Hub Type C 4 in 1 1 x USB - C (DP) 1 x HDMI 1 x VGA 1 x USB - A",                    
                    priceProduct: "360.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Hub Type C 4 in 1",
                    inforProduct2: "1 x USB - C (DP)",
                    inforProduct3: "1 x HDMI",
                    inforProduct4: "1 x VGA",
                    inforProduct5: "1 x USB - A"
                },                             
            ],
        }
    }
}
</script>