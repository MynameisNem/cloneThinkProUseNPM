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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080, 144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/gigabyte-aorus-15p-gaming-laptop-kd-72s1223gh-thinkpro-LyD.png",
                    nameProduct: "GIGABYTE AORUS 15P Gaming Laptop i7 11800H, RTX 3060 6GB, 16GB, 512GB, FHD 240Hz KD-72S1223GH",                    
                    priceProduct: "26.990.000",
                    priceDown: "-41%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 11800H, 8 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080, 240Hz",
                    vgaInfor: "Card: Geforce RTX 3060 6GB",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/2/gigabyte-aorus-15p-gaming-laptop-kd-72s1223gh-thinkpro-LyD.png",
                    nameProduct: "GIGABYTE AORUS 15P Gaming Laptop i7 11800H, RTX 3080 8GB, 16GB, 1024GB, FHD 240Hz YD-73S1224GH",                    
                    priceProduct: "36.900.000",
                    priceDown: "-47%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 11800H, 8 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 1024GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080, 240Hz",
                    vgaInfor: "Card: Geforce RTX 3080 8GB",
                    giftProduct: "Quà tặng 3.890.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/17/msi-modern-md241pw-238inch-thinkpro-07-thinkpro.png",
                    nameProduct: "Màn hình MSI Modern MD241PW 23.8inch (FHD/IPS/75Hz)",                    
                    priceProduct: "3.990.000",
                    priceDown: "-39%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    giftProduct: "Quà tặng 450.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/11/6/gigabyte-g5-gaming-laptop-md-51s1123sh-thinkpro.png",
                    nameProduct: "GIGABYTE G5 Gaming Laptop i5 11400H, RTX 3050Ti 4GB, 16GB, 512GB, FHD 144Hz MD-51S1123SH",                    
                    priceProduct: "18.390.000",
                    priceDown: "-14%",
                    styleProduct: "border: 1px solid #F2F2F2; background: #F2F2F2;",
                    cpuInfor: "CPU: Core i5 11400H, 6 Cores",
                    ramInfor: "RAM: 16GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  144Hz",
                    vgaInfor: "Card: Geforce RTX 3050Ti 4GB",
                    giftProduct: "Quà tặng 1.600.000"
                },
            ]
        }        
    },
}
</script>