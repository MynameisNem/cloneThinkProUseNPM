<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :items-branch="itemsBranch" :p-text="pText" :sort-button="sortButton"></BasePage>
        <OCung></OCung>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import OCung from './o-cung-product-container'
export default {
    components: {
        BasePage,
        OCung
    },
    data() {
        return {
            pContent: "Ổ cứng",
            pText: "Ổ cứng là một thiết bị lưu trữ dữ liệu trong máy tính hoặc thiết bị di động. Nó có khả năng lưu trữ các tập tin, ứng dụng và hệ điều hành của hệ thống. Ổ cứng có thể được chia thành các phân vùng khác nhau để quản lý dữ liệu hiệu quả hơn.",
            itemsBranch: [
                { nameBranch: "KIOXIA" }, { nameBranch: "Intel 6" }, { nameBranch: "Western Digital" },
                { nameBranch: "Samsung" }, { nameBranch: "HSGT" }, { nameBranch: "Seagate" }, { nameBranch: "Toshiba" }, 
                { nameBranch: "Kingston" }, { nameBranch: "Lite-on" }, { nameBranch: "SK Hynix" }
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "KIOXIA" }, { name: "Intel 6" }, { name: "Western Digital" },
                        { name: "Samsung" }, { name: "HSGT" }, { name: "Seagate" }, { name: "Toshiba" }, 
                        { name: "Kingston" }, { name: "Lite-on" }, { name: "SK Hynix" }
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