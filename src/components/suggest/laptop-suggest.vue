<template>
    <BasePromoContainer
        :infor-product="inforProduct">
    </BasePromoContainer>
</template>

<script>
import BasePromoContainer from '@/components/sharedVue/base-page/base-promo-container.vue';
export default {
    components: {
        BasePromoContainer
    },
    data() {
        return {
            inforProduct: [
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/dell-inspiron-14-5430-thinkpro.jpeg",
                    nameProduct: "Dell Inspiron 14 5430 i7 1360P, 16GB, 1TB, 2.5K",
                    priceProduct: "19.990.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    cpuInfor: "CPU: Core i7 1360P, 12 Cores",
                    ramInfor: "RAM: 16GB, 4800Mhz",
                    ssdInfor: "Ổ cứng: SSD 1024GB",
                    monitorInfor: "Màn hình: 14\", 2560 x 1600,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 149.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/microsoft-surface-pro-8-device-only-thinkpro-BVb.png",
                    nameProduct: "Microsoft Surface Pro 8 (Device Only)",                    
                    priceProduct: "16.990.000",
                    priceDown: "-43%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 1135G7, 4 Cores",
                    ramInfor: "RAM: 8GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 13\", 2880 x 1920, 120Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics"
                },
                // thinkpad t16 có quà tặng
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/lenovo-thinkpad-t16-thinkpro.png",
                    nameProduct: "Lenovo ThinkPad T16",                    
                    priceProduct: "20.390.000",
                    priceDown: "-24%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 1245U, 10 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 16\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 450.000"
                },
                // nitro 5 tiger
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/acer-nitro-5-tiger-5375-thumb.png",
                    nameProduct: "Acer Nitro 5 Tiger",                    
                    priceProduct: "15.990.000",
                    priceDown: "-33%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i5 12500H, 12 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080, 144Hz",
                    vgaInfor: "Card: NVIDIA Geforce RTX 3050 Ti 4GB"
                },
                // vivobook 15 oled
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/asus-vivobook-15x-oled-m1503qa-7402-thumb.png",
                    nameProduct: "Asus Vivobook 15X OLED (M1503QA)",                    
                    priceProduct: "15.790.000",
                    priceDown: "-21%",
                    styleProduct: "border: 1px solid #050F6C; background: #050F6C;",
                    cpuInfor: "CPU: Ryzen 7 5800H, 8 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 2880 x 1620, 60Hz",
                    vgaInfor: "Card: AMD Radeon Graphics"
                },
                // Inspiron 14 7435 2 in 1
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-inspiron-14-7435-2-in-1-7329-thumb.png",
                    nameProduct: "Dell Inspiron 14 7435 2 in 1",                    
                    priceProduct: "14.990.000",
                    priceDown: "-29%",
                    styleProduct: "border: 1px solid #9AD1EF; background: #9AD1EF;",
                    cpuInfor: "CPU: Ryzen 5 7530U, 6 Cores",
                    ramInfor: "RAM: 8GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: AMD Radeon Graphics"
                },
                // thinkpad x1 nano
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-thinkpad-x1-nano-5918-thumb.png",
                    nameProduct: "Lenovo ThinkPad X1 Nano",                    
                    priceProduct: "19.990.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid rgb(0 0 0); background: rgb(0 0 0);",
                    cpuInfor: "CPU: Core i7 1160G7, 4 Cores",
                    ramInfor: "RAM: 16GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 13\", 2160 x 1350, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 550.000"
                },
                // slim 7 pro X
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lenovo-slim-7-prox-5947-thumb.png",
                    nameProduct: "Lenovo Slim 7 ProX",                    
                    priceProduct: "25.990.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #555454; background: #555454;",
                    cpuInfor: "CPU: Ryzen 9 6900HS, 8 Cores",
                    ramInfor: "RAM: 32GB, 6400Mhz",
                    ssdInfor: "Ổ cứng: SSD 1024GB",
                    monitorInfor: "Màn hình: 14.5\", 3072 x 1920, 120Hz",
                    vgaInfor: "Card: Geforce RTX 3050 4GB",
                    giftProduct: "Quà tặng 450.000"
                },
                // Dell XPS 13 Plus 9320
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-plus-9320-5734-thumb.png",
                    nameProduct: "Dell XPS 13 Plus 9320",                    
                    priceProduct: "27.990.000",
                    priceDown: "-44%",
                    styleProduct: "border: 1px solid #ECECEC; background: #ECECEC;",
                    cpuInfor: "CPU: Core i7 1260P, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 13.4\", 3456 x 2160, 60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 550.000"
                },
                // Thinkpad X1 Carbon Gen 6
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/27/lenovo-thinkpad-x1-carbon-gen-6-thinkpro-DnG.jpg",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 6",                    
                    priceProduct: "11.790.000",
                    priceDown: "-37%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 8650U, 4 Cores",
                    ramInfor: "RAM: 16GB, 2133Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1080, 60Hz",
                    vgaInfor: "Card: Intel UHD 620",
                    giftProduct: "Quà tặng 100.000"
                },
                // Precision 5550
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/dell-precision-5550-thinkpro-s6H.png",
                    nameProduct: "Dell Precision 5550",                    
                    priceProduct: "24.990.000",
                    priceDown: "-31%",
                    styleProduct: "border: 1px solid #8D8D8D; background: #8D8D8D;",
                    cpuInfor: "CPU: Core i7 10850H, 6 Cores",
                    ramInfor: "RAM: 32GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1200, 60Hz",
                    vgaInfor: "Card: Quadro T2000 4GB",
                    giftProduct: "Quà tặng 100.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/1/dell-inspiron-13-5330-thinkpro-4MR.png",
                    nameProduct: "Dell Inspiron 13 5330 i5 1340P, 16GB, 512GB, 2.5K",                    
                    priceProduct: "17.490.000",
                    priceDown: "-40%",
                    styleProduct: "border: 1px solid #ECECEC; background: #ECECEC;",
                    styleProduct2: "border: 1px solid #FFB6C1; background: #FFB6C1;",
                    cpuInfor: "CPU: Core i5 1340P, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 13.3\", 2560 x 1600,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/lenovo-thinkbook-14-g5-thinkpro.png",
                    nameProduct: "Lenovo ThinkBook 14 G5+ i5 13500H, 16GB, 512GB, 2.8K 90Hz",                    
                    priceProduct: "21.990.000",
                    priceDown: "-27%",
                    styleProduct: "border: 1px solid #666666; background: #666666;",
                    cpuInfor: "CPU: Core i5 13500H, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 2880 x 1800,  90Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 100.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/dell-latitude-7320-detachable-kem-ban-phim-thinkpro-62Q.png",
                    nameProduct: "Dell Latitude 7320 Detachable i5 1140G7, 16GB, 256GB, FHD+ Touch, Kèm bàn phím",                    
                    priceProduct: "17.390.000",
                    priceDown: "-21%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 1140G7, 4 Cores",
                    ramInfor: "RAM: 16GB, 4267Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 13\", 1920 x 1280,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-13-9315-2022-5693-thumb.png",
                    nameProduct: "Dell XPS 13 9315 (2022) i7 1250U, 16GB, 512GB, FHD+",                    
                    priceProduct: "23.990.000",
                    priceDown: "-35%",
                    styleProduct: "border: 1px solid #8BCBFF; background: #8BCBFF;",
                    cpuInfor: "CPU: Core i7 1250U, 10 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 13.4\", 1920 x 1200,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 499.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/lenovo-thinkpad-x1-carbon-gen-10-thinkpro.jpeg",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 10 i5 1240P, 16GB, 512GB, FHD+ Touch",                    
                    priceProduct: "24.990.000",
                    priceDown: "-34%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 1240P, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 399.000"
                },

                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/lenovo-thinkpad-x1-nano-carbon-edition-thinkpro.jpeg",
                    nameProduct: "Lenovo ThinkPad X1 Nano i7 1180G7, 16GB, 512GB, 2K Touch",                    
                    priceProduct: "19.990.000",
                    priceDown: "-43%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 1180G7, 4 Cores",
                    ramInfor: "RAM: 16GB, 4266Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 13\", 2160 x 1350,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 898.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/dell-xps-15-9520-7122-thumb.png",
                    nameProduct: "Dell XPS 15 9520 i7 12700H, RTX 3050 4GB, 32GB, 512, 3.5K OLED Touch",                    
                    priceProduct: "27.990.000",
                    priceDown: "-15%",
                    styleProduct: "border: 1px solid #ECECEC; background: #ECECEC;",
                    cpuInfor: "CPU: Core i7 12700H, 14 Cores",
                    ramInfor: "RAM: 32GB, 4800Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 3456 x 2160,  60Hz",
                    vgaInfor: "Card: Geforce RTX 3050 4GB",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/12/27/lenovo-thinkpad-x1-carbon-gen-7-thinkpro.jpeg",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 7 i5 8365U, 16GB, 512GB, FHD",                    
                    priceProduct: "11.990.000",
                    priceDown: "-20%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 8365U, 4 Cores",
                    ramInfor: "RAM: 16GB, 2133Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1080,  60Hz",
                    vgaInfor: "Card: Intel UHD Graphics",
                    giftProduct: "Quà tặng 399.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/5/lenovo-thinkpad-x1-carbon-gen-8-thinkpro.png",
                    nameProduct: "Lenovo ThinkPad X1 Carbon Gen 8 i7 10610U, 16GB, 512GB, 2.5K, LTE",                    
                    priceProduct: "16.390.000",
                    priceDown: "-36%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 10610U, 4 Cores",
                    ramInfor: "RAM: 16GB, 2133Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 2560 x 1440,  60Hz",
                    vgaInfor: "Card: Intel UHD Graphics",
                    giftProduct: "Quà tặng 399.000"
                },
            ]
        }        
    },
}
</script>