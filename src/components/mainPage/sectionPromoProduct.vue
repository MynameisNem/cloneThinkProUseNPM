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
                    <ButtonPrevPromoProduct :scrollFunction="scrollPrevProductPromo" :extraClassesPrev="'buttonPrevPromoProduct'"></ButtonPrevPromoProduct>
                    <ButtonNextPromoProduct :scrollFunction="scrollNextProductPromo" :extraClassesNext="'buttonNextPromoProduct'"></ButtonNextPromoProduct>
                </div>
            </div>
            <!-- danh sách sản phẩm khuyến mãi nổi bật kèm thông tin chi tiết -->
            <SectionPromoProductSpecial></SectionPromoProductSpecial>
        </div>
    </section>
</template>

<script>
import ButtonPrevPromoProduct from "../sharedVue/button/buttonPREV.vue";
import ButtonNextPromoProduct from "../sharedVue/button/buttonNEXT.vue";
import SectionPromoProductSpecial from "./sectionPromoProductSpecial.vue";
export default {
    components: {
        ButtonPrevPromoProduct,
        ButtonNextPromoProduct,
        SectionPromoProductSpecial
    },
    data() {
        return {
            selectedItem: null,
            scrollPositionProductPromo: 0,
            listProductPromo: [
                { id: 1500, nameProduct: "Laptop" }, { id: 1501, nameProduct: "Bàn phím" }, { id: 1502, nameProduct: "Chuột" }, { id: 1503, nameProduct: "Cổng chuyển" }, { id: 1504, nameProduct: "Phần mềm" },
                { id: 1505, nameProduct: "Phần mềm" }, { id: 1506, nameProduct: "Tai nghe" }, { id: 1507, nameProduct: "Màn hình" }, { id: 1508, nameProduct: "Ghế công thái học" }, { id: 1509, nameProduct: "Arm màn hình" },
                { id: 1510, nameProduct: "Phụ kiện & Setup" }, { id: 1511, nameProduct: "Mặt bàn" }, { id: 1512, nameProduct: "Máy game & Thực tế ảo" }, { id: 1513, nameProduct: "Đĩa game & Phụ kiện game" },
                { id: 1514, nameProduct: "Túi" }, { id: 1515, nameProduct: "Balo" }, { id: 1516, nameProduct: "Loa" }, { id: 1517, nameProduct: "Bộ bàn" }, { id: 1518, nameProduct: "Khung bàn" }, { id: 1519, nameProduct: "Bàn ghế trẻ em" },
            ],
        }
    },
    mounted() {
        // Thiết lập màu sắc mặc định cho item đầu tiên khi component được mounted
        this.setDefaultSelectedItem();
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
    background-color: #E6E8EA;
    color: #6B7075;
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
    background-color: #FFFFFF;
}
.selected-item {
    background-color: #F6F9FC; /* Màu nền khi item được chọn */
}
</style>