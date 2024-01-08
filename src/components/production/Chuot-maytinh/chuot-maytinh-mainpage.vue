<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePage>
        <ChuotMaytinhProductContainer></ChuotMaytinhProductContainer>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import ChuotMaytinhProductContainer from './chuot-maytinh-product-container.vue'
export default {
    components: {
        BasePage,
        ChuotMaytinhProductContainer
    },
    data() {
        return {
            pContent: "Chuột",
            pText: "Chuột máy tính một thiết bị ngoại vi được sử dụng để điều khiển con trỏ trên màn hình máy tính và thực hiện các thao tác trên giao diện đồ họa. Chuột thông thường được thiết kế nhỏ gọn, có hai, ba hoặc nhiều nút nhấn với bánh xe cuộn được đặt giữa hai nút",
            itemsBranch: [
                { nameBranch: "Logitech" }, { nameBranch: "E-Dra" }, { nameBranch: "Keychron" }, { nameBranch: "Microsoft" }, 
                { nameBranch: "HyperWork" }, { nameBranch: "Ugreen" }, { nameBranch: "Moonsgeek" }
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "Logitech" }, { name: "E-Dra" }, { name: "Keychron" }, { name: "Microsoft" }, 
                        { name: "HyperWork" }, { name: "Ugreen" }, { name: "Moonsgeek" }
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 200K" }, { name: "Từ 200K - 400K" }, { name: "Từ 400K - 600K" }, { name: "Từ 600K - 1 triệu" }, 
                        { name: "Từ 1 triệu - 2tr" }, { name: "Trên 2tr" }
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Trắng" }, { name: "Đen" }, { name: "Hồng" }, { name: "Xám" }, 
                        { name: "Xanh dương" }, { name: "Xanh lá" }, { name: "Đỏ" }, { name: "Vàng" }, 
                    ]
                },
            ],
        }
    }
}
</script>