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
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/msi-modern-15-b12m-5852-thumb.png",
                    nameProduct: "MSI Modern 15 B12M i5 1235U, 8GB, 512GB, FHD 220VN",                    
                    priceProduct: "12.990.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 1235U, 10 Cores",
                    ramInfor: "RAM: 8GB, 3200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 15.6\", 1920 x 1080,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 249.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-17-2022-4478-thumb.png",
                    nameProduct: "LG Gram 17 2022 i7 1260P, 16GB, 512GB, 2.5K 17Z90Q-G.AH74A5",                    
                    priceProduct: "29.990.000",
                    priceDown: "-38%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    cpuInfor: "CPU: Core i7 1260P, 12 Cores",
                    ramInfor: "RAM: 16GB, 5200Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 17\", 2560 x 1600,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 3.890.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-14-2023-6762-thumb.png",
                    nameProduct: "LG Gram 14 2023 i5 1340P, 8GB, 256GB, FHD+ 14ZD90R-G.AX52A5",                    
                    priceProduct: "20.990.000",
                    priceDown: "-19%",
                    styleProduct: "border: 1px solid #DADDE0; background: #FFFFFF;",
                    styleProduct2: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 1340P, 16 Cores",
                    ramInfor: "RAM: 8GB, 6000Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-14-2023-6764-thumb.png",
                    nameProduct: "LG Gram 14 2023 i5 1340P, 16GB, 256GB, FHD+ 14Z90R-G.AH53A5",                    
                    priceProduct: "24.990.000",
                    priceDown: "-23%",
                    styleProduct: "border: 1px solid #B2AFAF; background: #B2AFAF;",
                    cpuInfor: "CPU: Core i5 1340P, 16 Cores",
                    ramInfor: "RAM: 16GB, 6000Mhz",
                    ssdInfor: "Ổ cứng: SSD 256GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-14-2023-6765-thumb.png",
                    nameProduct: "LG Gram 14 2023 i7 1360P, 16GB, 512GB, FHD+ 14Z90R-G.AH75A5",                    
                    priceProduct: "28.390.000",
                    priceDown: "-26%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i7 1360P, 16 Cores",
                    ramInfor: "RAM: 16GB, 6000Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 14\", 1920 x 1200,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/27/thumb/lg-gram-16-2023-6766-thumb.png",
                    nameProduct: "LG Gram 16 2023 i5 1340P, 16GB, 512GB, 2.5K 16ZD90R-G.AX55A5",                    
                    priceProduct: "32.990.000",
                    priceDown: "-18%",
                    styleProduct: "border: 1px solid #000000; background: #000000;",
                    cpuInfor: "CPU: Core i5 1340P, 16 Cores",
                    ramInfor: "RAM: 16GB, 6000Mhz",
                    ssdInfor: "Ổ cứng: SSD 512GB",
                    monitorInfor: "Màn hình: 16\", 2560 x 1600,  60Hz",
                    vgaInfor: "Card: Intel Iris Xe Graphics",
                    giftProduct: "Quà tặng 3.790.000"
                },
                {
                    srcProduct: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/5/15/lg-gram-view-2023-16mr70asda5-thinkpro.jpg",
                    nameProduct: "LG Gram +View 2023 16MR70.ASDA5",                    
                    priceProduct: "7.090.000",
                    priceDown: "-28%",
                    styleProduct: "border: 1px solid #C0C0C0; background: #C0C0C0;",
                    giftProduct: "Quà tặng 450.000"
                },
            ]
        }        
    },
}
</script>