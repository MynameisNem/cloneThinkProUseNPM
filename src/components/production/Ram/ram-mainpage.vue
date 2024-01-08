<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage :p-content="pContent" :p-text="pText" :sort-button="sortButton"></BasePage>
        <RamMayTinh></RamMayTinh>
    </main>
</template>

<script>
import BasePage from '@/components/sharedVue/base-page/base-page.vue'
import RamMayTinh from './ram-product-container.vue'
export default {
    components: {
        BasePage,
        RamMayTinh
    },
    data() {
        return {
            pContent: "Ram",
            pText: "RAM được viết tắt từ Random Access Memory - một trong những yếu tố hết sức quan trọng bên cạnh vi xử lý. RAM là bộ nhớ tạm của máy giúp lưu trữ thông tin hiện hành để CPU có thể truy xuất và xử lý.",
            itemsBranch: [
                { nameBranch: "Micron" }, { nameBranch: "SK Hynix" }, { nameBranch: "Crucial" }, { nameBranch: "Samsung" }, { nameBranch: "Lexar" },  
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "Micron" }, { name: "SK Hynix" }, { name: "Crucial" }, { name: "Samsung" }, { name: "Lexar" },
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 5tr" }, { name: "Từ 5tr - 10tr" }, { name: "Từ 10tr - 15tr" }, { name: "Từ 15tr - 20tr" }, 
                        { name: "Từ 20tr - 25tr" }, { name: "Từ 25tr - 30tr" }, { name: "Trên 30tr" }
                    ]
                },
            ],
        }
    }
}
</script>