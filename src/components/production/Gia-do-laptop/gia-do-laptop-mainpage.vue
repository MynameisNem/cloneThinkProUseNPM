<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :items-branch="itemsBranch" :p-text="pText" :sort-button="sortButton"></BasePage>
        <GiaDoLaptop></GiaDoLaptop>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import GiaDoLaptop from './gia-do-laptop-product-container.vue'
export default {
    components: {
        BasePage,
        GiaDoLaptop
    },
    data() {
        return {
            pContent: "Giá Đỡ Laptop/Tablet",
            pText: "Giá Đỡ Laptop/Tablet là thành phần linh kiện điều hòa luồng gió, đưa nhiệt lượng thoát ra khỏi hộp máy nhanh hơn nhằm hạ nhiệt máy nhanh và cân bằng nhiệt độ hộp máy khi vận hành. Từ đó giúp cho máy hoạt động tốt hơn, nâng cao tính bền bỉ của hiệu năng",
            itemsBranch: [
                { nameBranch: "HyperWork" }, { nameBranch: "Cooler Master" }, { nameBranch: "NiceDesign" },
                { nameBranch: "Element" }, { nameBranch: "HYPER" }, { nameBranch: "Rain Design" }, { nameBranch: "mStand" }
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "HyperWork" }, { name: "Cooler Master" }, { name: "NiceDesign" },
                        { name: "Element" }, { name: "HYPER" }, { name: "Rain Design" }, { name: "mStand" }
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 5tr" }, { name: "Từ 5tr - 10tr" }, { name: "Từ 10tr - 15tr" }, { name: "Từ 15tr - 20tr" }, 
                        { name: "Từ 20tr - 25tr" }, { name: "Từ 25tr - 30tr" }, { name: "Trên 30tr" }
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Xám" }, { name: "Vàng" }, { name: "Hồng" }, { name: "Đen" }, 
                        { name: "Trắng" },
                    ]
                },
            ],
        }
    }
}
</script>