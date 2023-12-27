<template>
    <div v-show="tabSelected" role="dialog" class="items-center justify-center bottom-0 left-0 right-0 fixed z-[20]"
        :class="!isSticky ? 'top-[170px]' : 'top-[80px]'">
        <div class="menuOutside1">
            <div class="max-h-[540px] flex-1 overflow-hidden">
                <div class="menuOutside2 container">
                    <div class="menu-side-left h-full w-[200px]">
                        <div class="overflow-auto h-full flex flex-col space-y-2">
                            <div v-for="itemNavMenuLeft in listItemsNav" :key="itemNavMenuLeft.id"
                                class="px-3 py-2 cursor-pointer rounded" @click="selectItem(itemNavMenuLeft)"
                                :class="{ 'selected-item': itemNavMenuLeft === selectedItem }">
                                <div class="flex items-center space-x-2">
                                    <div class="w-8 h-8 rounded cursor-pointed">
                                        <img :src="itemNavMenuLeft.srcProduct" :alt="itemNavMenuLeft.nameProduct">
                                    </div>
                                    <span class="text-[14px] font-semibold leading-[150%]">
                                        {{ itemNavMenuLeft.nameProduct }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 space-x-5 overflow-auto">
                        <div class="flex space-x-5">
                            <component :is="selectedItemComponent" :selected-item="selectedItem"></component>
                            <navMenuEnd></navMenuEnd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navMenuLaptop from './menuRight/menuProduct/navMenuLaptop.vue';
import navMenuKeyBoard from './menuRight/menuProduct/navMenuKeyBoard.vue';
import navMenuSounds from './menuRight/menuProduct/navMenuSounds.vue';
import navMenuChair from './menuRight/menuProduct/navMenuChair.vue';
import navMenuLiftTable from './menuRight/menuProduct/navMenuLiftTable.vue';
import navMenuVRGameConsole from './menuRight/menuProduct/navMenuVRGameConsole.vue';
import navTableFrame from './menuRight/menuProduct/navTableFrame.vue';
import navTableSets from './menuRight/menuProduct/navTableSets.vue';
import navBaloAndBag from './menuRight/menuProduct/navBaloAndBag.vue';
import navArmMonitor from './menuRight/menuProduct/navArmMonitor.vue';
import navMenuEnd from './menuRight/navMenuEnd.vue';
import navHeadphone from './menuRight/menuProduct/navHeadphone.vue';
import navSmartHome from './menuRight/menuProduct/navSmartHome.vue';
import navMouseComputer from './menuRight/menuProduct/navMouseComputer.vue';
import navMenuMonitor from './menuRight/menuProduct/navMenuMonitor.vue';
import navMenuPort from './menuRight/menuProduct/navMenuPort.vue';
import navMenuSoftware from './menuRight/menuProduct/navMenuSoftware.vue';
import navMenuSetup from './menuRight/menuProduct/navMenuSetup.vue';
import navMenuGameAccessory from './menuRight/menuProduct/navMenuGameAccessory.vue';
import navMenuFurniture from './menuRight/menuProduct/navMenuFurniture.vue';
import navMenuTabletops from './menuRight/menuProduct/navMenuTabletops.vue';
import navMenuBalo from './menuRight/menuProduct/navMenuBalo.vue';
import navMenuBags from './menuRight/menuProduct/navMenuBags.vue';
import navMenuSpeaker from './menuRight/menuProduct/navMenuSpeaker.vue'

export default {
    components: {
        navMenuLaptop,
        navMenuEnd,
        navMenuKeyBoard,
        navMenuSounds,
        navMenuChair,
        navMenuLiftTable,
        navMenuVRGameConsole,
        navTableFrame,
        navTableSets,
        navBaloAndBag,
        navArmMonitor,
        navHeadphone,
        navSmartHome,
        navMouseComputer,
        navMenuMonitor,
        navMenuPort,
        navMenuSoftware,
        navMenuSetup,
        navMenuGameAccessory,
        navMenuFurniture,
        navMenuTabletops,
        navMenuBalo,
        navMenuBags,
        navMenuSpeaker
    },
    props: {
        tabSelected: Boolean,
        isNavSticky: Boolean
    },
    data() {
        return {
            selectedItem: null,
            listItemsNav: [
                {
                    id: 50,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461.png",
                    nameProduct: "Laptop",
                },
                {
                    id: 51,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-3.png",
                    nameProduct: "Bàn phím"
                },
                {
                    id: 52,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-5.png",
                    nameProduct: "Âm thanh"
                },
                {
                    id: 53,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-1 copy.png",
                    nameProduct: "Ghế công thái học"
                },
                {
                    id: 54,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/18/logo-ban-nang-ha-thinkpro-01.png",
                    nameProduct: "Bàn nâng hạ"
                },
                {
                    id: 55,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2 copy.png",
                    nameProduct: "Máy chơi game"
                },
                {
                    id: 56,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/22/khung-ban-nang-ha-cao-cap-fansi-thinkpro.png",
                    nameProduct: "Khung bàn"
                },
                {
                    id: 57,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/22/bo-tron-2-vuong-vang-thinkpro.png",
                    nameProduct: "Bộ bàn"
                },
                {
                    id: 58,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2022/1/14/balo-tui.png",
                    nameProduct: "Balo, Túi"
                },
                {
                    id: 59,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2022/3/15/arm-man-hinh-gia-tot-thinkpro.png",
                    nameProduct: "Arm màn hình"
                },
                {
                    id: 60,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/20/tai-nghe-marshall-major-iv-black-thinkpro.png",
                    nameProduct: "Tai nghe"
                },
                {
                    id: 61,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2022/12/3/pms_1587539048.53711822.jpg",
                    nameProduct: "Smart Home"
                },
                {
                    id: 62,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-2.png",
                    nameProduct: "Chuột"
                },
                {
                    id: 63,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-7.png",
                    nameProduct: "Màn hình"
                },
                {
                    id: 64,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-8.png",
                    nameProduct: "Cổng chuyển"
                },
                {
                    id: 65,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2021/12/29/Rectangle 1461-14.png",
                    nameProduct: "Phần mềm"
                },
                {
                    id: 66,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/30/phu-kien-va-setup-thinkpro.png",
                    nameProduct: "Phụ kiện & Setup"
                },
                {
                    id: 67,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/25/dia-game-mario.png",
                    nameProduct: "Đĩa game & Phụ kiện game"
                },
                {
                    id: 68,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2022/12/14/AQUA_05.png",
                    nameProduct: "Nội thất"
                },
                {
                    id: 69,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/22/mat-ban-den1524x600x25-thinkpro-thinkpro.png",
                    nameProduct: "Mặt bàn"
                },
                {
                    id: 70,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/4/28/fit-black-1-thinkpro.png",
                    nameProduct: "Túi"
                },
                {
                    id: 71,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/4/balo-thinkpro-02-thinkpro.png",
                    nameProduct: "Balo"
                },
                {
                    id: 72,
                    srcProduct: "https://images.thinkgroup.vn/unsafe/64x64/https://media-api-beta.thinkpro.vn/media/core/categories/2023/5/20/loa-bluetooth-marshall-woburn-ii-thinkpro.png",
                    nameProduct: "Loa"
                },
            ],
            isSticky: false
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
        },
        setDefaultSelectedItem() {
            // Nếu chưa có selectedItem và listItemsNav không rỗng
            if (!this.selectedItem && this.listItemsNav.length > 0) {
                // Đặt selectedItem là item đầu tiên trong listItemsNav
                this.selectedItem = this.listItemsNav[0];
            }
        },
        handleScroll() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const threshold = 80;
            this.isSticky = scrollTop > threshold;
            this.handleNavSticky; // Gọi phương thức của component cha để cập nhật giá trị
        },
    },
    mounted() {
        // Gọi phương thức để đặt giá trị mặc định khi component được mounted
        this.setDefaultSelectedItem();
        window.addEventListener("scroll", this.handleScroll);
    },
    // computed: {
    //     selectedItemComponent() {
    //         if (this.selectedItem && this.tabSelected) {
    //             if (this.selectedItem.nameProduct === 'Laptop') {
    //                 return navMenuLaptop;
    //             } 
    //             else if (this.selectedItem.nameProduct === 'Bàn phím') {
    //                 return navMenuKeyBoard;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Âm thanh') {
    //                 return navMenuSounds;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Ghế công thái học') {
    //                 return navMenuChair;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Bàn nâng hạ') {
    //                 return navMenuLiftTable;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Máy chơi game') {
    //                 return navMenuVRGameConsole;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Khung bàn') {
    //                 return navTableFrame;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Bộ bàn') {
    //                 return navTableSets;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Balo, Túi') {
    //                 return navBaloAndBag;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Arm màn hình') {
    //                 return navArmMonitor;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Tai nghe') {
    //                 return navHeadphone;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Smart Home') {
    //                 return navSmartHome;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Chuột') {
    //                 return navMouseComputer;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Màn hình') {
    //                 return navMenuMonitor;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Cổng chuyển') {
    //                 return navMenuPort;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Phần mềm') {
    //                 return navMenuSoftware;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Phụ kiện & Setup') {
    //                 return navMenuSetup;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Đĩa game & Phụ kiện game') {
    //                 return navMenuGameAccessory;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Nội thất') {
    //                 return navMenuFurniture;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Mặt bàn') {
    //                 return navMenuTabletops;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Túi') {
    //                 return navMenuBags;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Balo') {
    //                 return navMenuBalo;
    //             }
    //             else if (this.selectedItem.nameProduct === 'Loa') {
    //                 return navMenuSpeaker;
    //             }
    //         }
    //         return navMenuEnd
    //     },
    // },
    computed: {
        selectedItemComponent() {
            const productComponentMapping = {
                'Laptop': navMenuLaptop,
                'Bàn phím': navMenuKeyBoard,
                'Âm thanh': navMenuSounds,
                'Ghế công thái học': navMenuChair,
                'Bàn nâng hạ': navMenuLiftTable,
                'Máy chơi game': navMenuVRGameConsole,
                'Khung bàn': navTableFrame,
                'Bộ bàn': navTableSets,
                'Balo, Túi': navBaloAndBag,
                'Arm màn hình': navArmMonitor,
                'Tai nghe': navHeadphone,
                'Smart Home': navSmartHome,
                'Chuột': navMouseComputer,
                'Màn hình': navMenuMonitor,
                'Cổng chuyển': navMenuPort,
                'Phần mềm': navMenuSoftware,
                'Phụ kiện & Setup': navMenuSetup,
                'Đĩa game & Phụ kiện game': navMenuGameAccessory,
                'Nội thất': navMenuFurniture,
                'Mặt bàn': navMenuTabletops,
                'Túi': navMenuBags,
                'Balo': navMenuBalo,
                'Loa': navMenuSpeaker,
            };

            if (this.selectedItem && this.tabSelected) {
                const selectedProduct = this.selectedItem.nameProduct;
                return productComponentMapping[selectedProduct] || navMenuEnd;
            }
            return navMenuEnd;
        },
    },

}
</script>

<style scoped>
.menuOutside1 {
    width: 100%;
    height: 100%;
    background-color: rgba(246, 249, 252, 0.75);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    z-index: 30;
}

.menuOutside2 {
    width: 100%;
    padding: 1.25rem;
    background-color: #FFFFFF;
    border-radius: 0.375rem;
    height: 100%;
    display: flex;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: auto;
}

.selected-item {
    background-color: #F6F9FC;
    /* Màu nền khi item được chọn */
}
</style>