<template>
    <section class="section-promotional-product space-y-12">
        <div class="relative">
            <h3 class="font-semibold text-2xl">Sản phẩm khuyến mãi nổi bật</h3>
            <div class="items-center flex mt-6">
                <div class="flex-1 overflow-x-hidden">
                    <div class="overflow-hidden flex">
                        <div ref="specialPromotionProductContainer"
                            class="overflow-x-hidden overscroll-auto flex items-center space-x-2">
                            <!-- tên sản phẩm khuyến mãi nổi bật -->
                            <div v-for="itemProductPromo in listProductPromo"
                                :key="itemProductPromo.id"
                                class="itemProductPromo"
                                @click="selectItem(itemProductPromo)"
                                :class="{ 'selected-item': itemProductPromo === selectedItem }">
                                {{ itemProductPromo.nameProduct }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-x-4 py-[16px] flex">
                    <ButtonPrevPromoProduct 
                        :scrollFunction="scrollPrevProductPromo" 
                        :extraClassesPrev="'buttonPrevPromoProduct'"
                        :button-styles-prev="buttonStylesPrev"
                        :scroll-position-prev="scrollPositionProductPromo">
                    </ButtonPrevPromoProduct>
                    <ButtonNextPromoProduct 
                        :scrollFunction="scrollNextProductPromo" 
                        :extraClassesNext="'buttonNextPromoProduct'"
                        :button-styles-next="buttonStylesNext"
                        :scroll-position-next="scrollPositionProductPromo">                            
                    </ButtonNextPromoProduct>
                </div>
            </div>
            <!-- danh sách sản phẩm khuyến mãi nổi bật kèm thông tin chi tiết -->
            <component :is="selectedItemComponent" :selected-item="selectedItem"></component>
        </div>
    </section>
</template>

<script>
import ButtonPrevPromoProduct from "../sharedVue/button/buttonPREV.vue";
import ButtonNextPromoProduct from "../sharedVue/button/buttonNEXT.vue";
import LaptopSpecial from '../promoProductSpecial/laptop-special.vue';
import KeyboardSpecial from '../promoProductSpecial/keyboard-special.vue';
import MouseSpecial from '../promoProductSpecial/mouse-special.vue';
import ConvertSpecial from '../promoProductSpecial/convert-special.vue';
import SoftwareSpecial from '../promoProductSpecial/software-special.vue';
import HeadphoneSpecial from '../promoProductSpecial/headphone-special.vue';
import MonitorSpecial from '../promoProductSpecial/monitor-special.vue';
import EgronomicChairSpecial from '../promoProductSpecial/egronomic-chair-special.vue';
import ArmMonitorSpecial from '../promoProductSpecial/arm-monitor-special.vue';
import SetupSpecial from '../promoProductSpecial/setup-special.vue';
import VRConsoleSpecial from '../promoProductSpecial/vr-console-special.vue';
import CompactDiskGameSpecial from '../promoProductSpecial/compact-disk-game-special.vue';

export default {
    components: {
        ButtonPrevPromoProduct,
        ButtonNextPromoProduct,
        LaptopSpecial,
        KeyboardSpecial,
        MouseSpecial,
        ConvertSpecial,
        SoftwareSpecial,
        HeadphoneSpecial,
        MonitorSpecial,
        EgronomicChairSpecial,
        ArmMonitorSpecial,
        SetupSpecial,
        VRConsoleSpecial,
        CompactDiskGameSpecial
    },
    data() {
        return {
            selectedItem: null,
            scrollPositionProductPromo: 0,
            maxScrollPosition: null,
            listProductPromo: [
                { id: 1500, nameProduct: "Laptop" }, { id: 1501, nameProduct: "Bàn phím" }, { id: 1502, nameProduct: "Chuột" }, { id: 1503, nameProduct: "Cổng chuyển" },
                { id: 1505, nameProduct: "Phần mềm" }, { id: 1506, nameProduct: "Tai nghe" }, { id: 1507, nameProduct: "Màn hình" }, { id: 1508, nameProduct: "Ghế công thái học" }, { id: 1509, nameProduct: "Arm màn hình" },
                { id: 1510, nameProduct: "Phụ kiện & Setup" }, { id: 1511, nameProduct: "Mặt bàn" }, { id: 1512, nameProduct: "Máy game & Thực tế ảo" }, { id: 1513, nameProduct: "Đĩa game & Phụ kiện game" },
                { id: 1514, nameProduct: "Túi" }, { id: 1515, nameProduct: "Balo" }, { id: 1516, nameProduct: "Loa" }, { id: 1517, nameProduct: "Bộ bàn" }, { id: 1518, nameProduct: "Khung bàn" }, { id: 1519, nameProduct: "Bàn ghế trẻ em" },
            ],
        }
    },
    mounted() {
        // Thiết lập màu sắc mặc định cho item đầu tiên khi component được mounted
        this.setDefaultSelectedItem();
        this.shouldChangeColorNext();
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
        setDefaultSelectedItem() {
            // Nếu chưa có selectedItem và listProductPromo không rỗng
            if (!this.selectedItem && this.listProductPromo.length > 0) {
                // Đặt selectedItem là item đầu tiên trong listProductPromo
                this.selectedItem = this.listProductPromo[0];
            }
        },
        scrollPrevProductPromo() {
            const container = this.$refs.specialPromotionProductContainer;
            this.scrollPositionProductPromo -= 150;
            if (this.scrollPositionProductPromo < 0) {
                this.scrollPositionProductPromo = 0;
            }
            container.scrollTo({
                left: this.scrollPositionProductPromo,
                behavior: 'smooth',
            });
        },
        scrollNextProductPromo() {
            const container = this.$refs.specialPromotionProductContainer;
            this.scrollPositionProductPromo += 150;
            const maxScrollPosition = container.scrollWidth - container.clientWidth;
            if (this.scrollPositionProductPromo > maxScrollPosition) {
                this.scrollPositionProductPromo = maxScrollPosition;
            }
            container.scrollTo({
                left: this.scrollPositionProductPromo,
                behavior: 'smooth',
            });
        },
        shouldChangeColorNext() {
            const container = this.$refs.specialPromotionProductContainer;
            if(!container) return;
            this.maxScrollPosition = container.scrollWidth - container.clientWidth
        }
    },
    computed: {
        buttonStylesPrev() {
            const changeColorPrev = this.scrollPositionProductPromo > 0;
            return {
                backgroundColor: changeColorPrev ? '#FFFFFF' : '#E6E8EA',
            }
        },
        buttonStylesNext() {
            const changeColorNext = this.scrollPositionProductPromo < this.maxScrollPosition
            return {
                backgroundColor: changeColorNext ? '#FFFFFF' : '#E6E8EA'
            }
        },
        selectedItemComponent() {
            const productPromoMapping = {
                'Laptop': LaptopSpecial,
                'Bàn phím': KeyboardSpecial,
                'Chuột': MouseSpecial,
                'Cổng chuyển': ConvertSpecial,
                'Phần mềm': SoftwareSpecial,
                'Tai nghe': HeadphoneSpecial,
                'Màn hình': MonitorSpecial,
                'Ghế công thái học': EgronomicChairSpecial,
                'Arm màn hình': ArmMonitorSpecial,
                'Phụ kiện & Setup': SetupSpecial,
                'Máy game & Thực tế ảo': VRConsoleSpecial,
                'Đĩa game & Phụ kiện game': CompactDiskGameSpecial
            };
            if (this.selectedItem) {
                const selectedProduct = this.selectedItem.nameProduct;
                return productPromoMapping[selectedProduct] || LaptopSpecial
            }
            return LaptopSpecial
        }
    }
}
</script>

<style scoped>
.itemProductPromo {
    border-radius: 0.375rem;
    padding: 10px 0.75rem;
    align-items: center;
    display: inline-flex;
    line-height: 1.5;
    white-space: nowrap;
    font-size: 0.75rem;
    cursor: pointer;
    background-color: #FFFFFF;
}
.buttonPrevPromoProduct {
    opacity: 0.4;
    align-items: center;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    justify-content: center;
    border-radius: 9999px;
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    
}
.buttonNextPromoProduct {
    opacity: 0.4;
    align-items: center;
    display: flex;
    height: 2.5rem; /* Tương đương với h-10 trong Tailwind */
    width: 2.5rem; /* Tương đương với w-10 trong Tailwind */
    justify-content: center; /* Tương đương với justify-center trong Tailwind */
    border-radius: 9999px; /* Tương đương với rounded-full trong Tailwind */
    padding: 0.5rem; /* Gộp tất cả các giá trị padding thành một dòng */
    
}
.selected-item {
    background-color: #F6F9FC; /* Màu nền khi item được chọn */
}
</style>