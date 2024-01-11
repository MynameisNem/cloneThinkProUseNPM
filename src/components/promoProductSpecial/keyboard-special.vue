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
                    id: 21700,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-monsgeek-m1w-aluminium-cnc-6960-thumb.png",
                    nameProduct: "Bàn phím Cơ Monsgeek M1W Aluminium CNC M1W - AKKO Cream Yellow Pro Swwitch",                    
                    priceProduct: "1.999.000",
                    priceDown: "-20%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    styleProduct2: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    styleProduct3: "border: 1px solid #A020F0; background: #A020F0;",
                    inforProduct1: "M1W - AKKO Cream Yellow Pro Swwitch ",
                },
                // Dell XPS 13 Plus 9320 bản i5 1240P done
                {
                    id: 21701,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/co-iqunix-f97-wintertide-wireless-4525-thumb.png",
                    nameProduct: "Bàn Phím Cơ IQUNIX F97 Wintertide Wireless Led RGB - Cherry MX Brown Switch",                    
                    priceProduct: "5.790.000",
                    priceDown: "-3%",
                    styleProduct: "border: 1px solid #73BDEE; background: #73BDEE;",
                    inforProduct1: "Led RGB",
                    inforProduct2: "Cherry MX Brown Switch"
                },
                // Dell Inspiron 16 5630 done
                {
                    id: 21702,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/5/cmk75-08-thinkpro-nicespace.png",
                    nameProduct: "Bàn Phím Cơ FL ESPORT CMK75 FLCMMK Ice Violet Switch - Tactile",                    
                    priceProduct: "2.179.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #1BB4E0; background: #1BB4E0;",
                    inforProduct1: "FLCMMK Ice Violet Switch - Tactile ",
                },
                // Dell Inspiron 13 5330 done
                {
                    id: 21703,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4154-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Non Led- Cherry MX Red Switch",                    
                    priceProduct: "4.400.000",
                    priceDown: "-6%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Non Led",
                    inforProduct2: "Cherry MX Red Switch"
                },
                // ThinkBook 14 G5+ bản R7 7735H done
                {
                    id: 21704,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/keychron-v1-max-qmk-via-01-thinkpro-4Y2.jpg",
                    nameProduct: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless Gateron Jupiter Red",                    
                    priceProduct: "2.190.000",
                    priceDown: "-12%",
                    styleProduct: "border: 1px solid #030303; background: #030303;",
                    inforProduct1: "Gateron Jupiter Red ",
                },
                // Dell Inspiron 14 5430 bản FHD+ done
                {
                    id: 21705,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-newmen-gm780-nebula-gasket-4392-thumb.png",
                    nameProduct: "Bàn phím cơ Newmen GM780 - Nebula Gasket Kailh NAT Switch",                    
                    priceProduct: "1.590.000",
                    priceDown: "-47%",
                    styleProduct: "border: 1px solid #E6E6FA; background: #E6E6FA;",
                    inforProduct1: "Kailh NAT Switch ",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1265U done
                {
                    id: 21706,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/11/K2 Pro_04.png",
                    nameProduct: "Bàn phím cơ Keychron K2 Pro QMK/VIA Case Nhôm - Led RGB - Keychron K Pro Red Switch",                    
                    priceProduct: "2.490.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #1E3568; background: #1E3568;",
                    inforProduct1: "Case Nhôm",
                    inforProduct2: "Led RGB",
                    inforProduct3: "Keychron K Pro Red Switch"
                },
                // Legion 5 Pro 2022 done
                {
                    id: 21707,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-cidoo-v65-v2-aluminum-cnc-6884-thumb.png",
                    nameProduct: "Bàn phím cơ CIDOO V65 v2 - Aluminum CNC Quake Matte Switch - Linear",                    
                    priceProduct: "2.490.000",
                    priceDown: "-17%",
                    styleProduct: "border: 1px solid #E7E0A5; background: #E7E0A5;",
                    inforProduct1: "Quake Matte Switch - Linear",
                },
                // Dell Inspiron 14 5430 bản QHD+ done
                {
                    id: 21708,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/kit-co-keydous-nj80-ap-4228-thumb.png",
                    nameProduct: "Kit Bàn Phím Cơ Keydous NJ80 AP Steel Plate",                    
                    priceProduct: "1.390.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid #73BDEE; background: #73BDEE;",
                    inforProduct1: "Steel Plate",
                },
                // Dell XPS 13 9315 (2022) done
                {
                    id: 21709,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-keychron-k3-v2-2389-thumb.png",
                    nameProduct: "Bàn phím Keychron K3 v2 Gateron Brown Switch",                    
                    priceProduct: "1.690.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Gateron Brown Switch",
                },
                // ThinkBook 14 G5+ bản i5 13500H done
                {
                    id: 21710,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-khong-day-keychron-q1-pro-qmkvia-knob-7168-thumb.png",
                    nameProduct: "Bàn phím cơ không dây Keychron Q1 Pro QMK/VIA - Knob Keychron K Pro Red Switch",                    
                    priceProduct: "4.090.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #C9C0BB; background: #C9C0BB;",
                    inforProduct1: "Keychron K Pro Red Switch",
                },
                // ThinkPad X1 Carbon Gen 11 done
                {
                    id: 21711,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-fl-esport-fl750-polar-night-4562-thumb.png",
                    nameProduct: "Bàn phím cơ FL-ESport FL750 Polar Night Kailh Box V2 Red Switch",                    
                    priceProduct: "1.890.000",
                    priceDown: "-21%",
                    styleProduct: "border: 1px solid #0B1317; background: #0B1317;",
                    inforProduct1: "Kailh Box V2 Red Switch",
                },
                // ThinkBook 16 G5+ bản R7 7735H 16gb ram  done
                {
                    id: 21712,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/7/ban-phim-co-keychron-k8-pro-qmkvia-thinkpro-nicespace.jpg",
                    nameProduct: "Bàn phím cơ Keychron K8 Pro QMK/VIA Case Nhựa - Led Đơn - Gateron G pro Brown Switch",                    
                    priceProduct: "2.150.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Case Nhựa",
                    inforProduct2: "Led Đơn",
                    inforProduct3: "Gateron G pro Brown Switch",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 16gb ram done
                {
                    id: 21713,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-monsgeek-m1w-aluminium-cnc-7263-thumb.png",
                    nameProduct: "Bàn phím Cơ Monsgeek M1W Aluminium CNC M1W SP - AKKO Piano V3 Pro Switch",                    
                    priceProduct: "2.099.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #625E5E; background: #625E5E;",
                    styleProduct2: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    inforProduct1: "M1W SP - AKKO Piano V3 Pro Switch",
                },
                // Dell Inspiron 14 5430 bản i5 1340P FHD+ done
                {
                    id: 21714,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4156-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Non Led - Cherry Silent Red Switch",                    
                    priceProduct: "4.400.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Non led",
                    inforProduct2: "Cherry Silent Red Switch",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 31.990 done
                {
                    id: 21715,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4155-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Non Led - Cherry MX Brown Switch",                    
                    priceProduct: "4.400.000",
                    priceDown: "-6%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Non Led",
                    inforProduct2: "Cherry MX Brown Switch ",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 32gb ram done
                {
                    id: 21716,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-cidoo-v75-pro-aluminum-cnc-6871-thumb.png",
                    nameProduct: "Bàn phím cơ CIDOO V75 Pro - Aluminum CNC Matte Switch-Linear",                    
                    priceProduct: "2.790.000",
                    priceDown: "-10%",
                    styleProduct: "border: 1px solid #E7E0A5; background: #E7E0A5;",
                    inforProduct1: "Matte Switch-Linear ",
                },
                // Dell XPS 13 9315 (2022) bản màu (113 65 65) done
                {
                    id: 21717,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/8/ban-phim-co-keychron-v1-max-qmkvia-wireless-thinkpro-9M7.jpg",
                    nameProduct: "Bàn phím cơ Keychron V1 Max QMK/VIA Wireless Gateron Jupiter Brown",                    
                    priceProduct: "2.190.000",
                    priceDown: "-12%",
                    styleProduct: "border: 1px solid #030303; background: #030303;",
                    inforProduct1: "Gateron Jupiter Brown ",
                },
                // Dell XPS 13 9315 (2022) bản màu (139 203 255) done
                {
                    id: 21718,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-keydous-nj81-moonlight-6929-thumb.png",
                    nameProduct: "Bàn Phím Cơ KeyDous NJ81 - Moonlight Steel Plate - Gateron Brown Pro Switch",                    
                    priceProduct: "2.100.000",
                    priceDown: "-22%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    inforProduct1: "Steel Plate",
                    inforProduct2: "Gateron Brown Pro Switch ",
                },
                // ThinkPad X1 Carbon Gen 11 bản i7 1365U 32gb ram giá 53.990 done
                {
                    id: 21719,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-keychron-k8-pro-qmkvia-4499-thumb.png",
                    nameProduct: "Bàn phím cơ Keychron K8 Pro QMK/VIA Case Nhôm - Led RGB - Gateron G pro Brown Switch",                    
                    priceProduct: "2.490.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #4A4F94; background: #4A4F94;",
                    inforProduct1: "Case Nhôm",
                    inforProduct2: "Led RGB",
                    inforProduct3: "Gateron G pro Brown Switch",
                },
                // Dell Inspiron 14 5430 bản i7 1360P QHD+ 16gb ram giá 19.390 done
                {
                    id: 21720,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4159-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Led RGB - TTC Speed Sliver Switch",                    
                    priceProduct: "4.950.000",
                    priceDown: "-9%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Led RGB",
                    inforProduct2: "TTC Speed Sliver Switch",
                },
                // ThinkPad X1 Carbon Gen 10 bản i7 1270P 16gb ram done
                {
                    id: 21721,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-khong-day-keychron-q1-pro-qmkvia-knob-7169-thumb.png",
                    nameProduct: "Bàn phím cơ không dây Keychron Q1 Pro QMK/VIA - Knob Keychron K Pro Banana Switch",                    
                    priceProduct: "4.090.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #030303; background: #030303;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Keychron K Pro Banana Switch",
                },
                // Dell XPS 13 Plus 9320 bản i7 1260P 32gb ram giá 28.990 done
                {
                    id: 21722,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-keychron-k2-pro-qmkvia-5861-thumb.png",
                    nameProduct: "Bàn phím cơ Keychron K2 Pro QMK/VIA Case Nhôm - Led RGB - Keychron K Pro Brown Switch",                    
                    priceProduct: "2.490.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #1E3568; background: #1E3568;",
                    inforProduct1: "Case Nhôm",
                    inforProduct2: "Led RGB",
                    inforProduct3: "Keychron K Pro Brown Switch",
                },
                // Dell Inspiron 14 5430 bản i5 1340P QHD+ giá 18.390
                {
                    id: 21723,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4158-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Led RGB  - TTC Gold Pink Switch",                    
                    priceProduct: "4.950.000",
                    priceDown: "-9%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Led RGB",
                    inforProduct2: "TTC Gold Pink Switch",
                },
                {
                    id: 21724,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/co-iqunix-f97-wintertide-wireless-4664-thumb.png",
                    nameProduct: "Bàn Phím Cơ IQUNIX F97 Wintertide Wireless Led RGB - Cherry MX Silent Red Switch",                    
                    priceProduct: "5.790.000",
                    priceDown: "-3%",
                    styleProduct: "border: 1px solid #73BDEE; background: #73BDEE;",
                    inforProduct1: "Led RGB",
                    inforProduct2: "Cherry MX Silent Red Switch",
                },
                {
                    id: 21725,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-keychron-k8-pro-qmkvia-4402-thumb.png",
                    nameProduct: "Bàn phím cơ Keychron K8 Pro QMK/VIA Case Nhựa - Led Đơn - Gateron G pro Red Switch",                    
                    priceProduct: "2.150.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    inforProduct1: "Case Nhựa",
                    inforProduct2: "Led Đơn",
                    inforProduct3: "Gateron G pro Red Switch",
                },
                {
                    id: 21726,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-fl-esport-cmk75-6865-thumb.png",
                    nameProduct: "Bàn Phím Cơ FL ESPORT CMK75 FLCMMK Ice Pink Switch - Linear",                    
                    priceProduct: "2.199.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #1BB4E0; background: #1BB4E0;",
                    styleProduct2: "border: 1px solid #585252; background: #585252;",
                    inforProduct1: "FLCMMK Ice Pink Switch - Linear ",
                },
                {
                    id: 21727,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/1/ban-phim-co-keychron-k8-pro-qmkvia-thinkpro-nicespace.png",
                    nameProduct: "Bàn phím cơ Keychron K8 Pro QMK/VIA Case Nhôm - Led RGB - Keychron K Pro Banana Switch",                    
                    priceProduct: "2.490.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    inforProduct1: "Case Nhôm",
                    inforProduct2: "Led RGB",
                    inforProduct3: "Keychron K Pro Banana Switch",
                },
                {
                    id: 21728,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-keychron-k8-pro-qmkvia-4721-thumb.png",
                    nameProduct: "Bàn phím cơ Keychron K8 Pro QMK/VIA Case Nhôm - Led RGB - Gateron G pro Red Switch",                    
                    priceProduct: "2.490.000",
                    priceDown: "-11%",
                    styleProduct: "border: 1px solid #4A4F94; background: #4A4F94;",
                    inforProduct1: "Case Nhôm",
                    inforProduct2: "Led RGB",
                    inforProduct3: "Gateron G pro Red Switch ",
                },
                {
                    id: 21723,
                    srcImgProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/ban-phim-co-iqunix-zx75-gravity-wave-4157-thumb.png",
                    nameProduct: "Bàn phím cơ IQUNIX ZX75 Gravity Wave Led RGB  - Cherry Silent Red Switch",                    
                    priceProduct: "4.850.000",
                    priceDown: "-8%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    inforProduct1: "Led RGB",
                    inforProduct2: "Cherry Silent Red Switch",
                }
            ],
        }
    }
}
</script>