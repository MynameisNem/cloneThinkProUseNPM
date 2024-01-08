<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePageButton :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePageButton>
        <KeyboardProductContainer></KeyboardProductContainer>
    </main>
</template>

<script>
import BasePageButton from '@/components/sharedVue/base-page/base-page-button.vue';
import KeyboardProductContainer from '@/components/production/Ban-phim/banphim-product-container.vue';
export default {
    components: {
        KeyboardProductContainer,
        BasePageButton
    },
    data() {
        return {
            pContent: "Bàn phím",
            pText: "Bàn phím là một thiết bị đầu vào cho máy tính, được sử dụng để nhập dữ liệu và điều khiển các chức năng của máy tính. Bàn phím bao gồm một loạt các phím nhấn, các phím chữ, số, các ký tự đặc biệt và các phím chức năng để thực hiện các tác vụ.",
            itemsBranch: [
                { nameBranch: "Keychron" }, { nameBranch: "IQUINIX" }, { nameBranch: "FL-ESPORT" }, { nameBranch: "Keydous" }, { nameBranch: "CIDOO" },
                { nameBranch: "Newmen" }, { nameBranch: "James Donkey" }, { nameBranch: "Darmonshark" }, { nameBranch: "WEIKAV" }, { nameBranch: "Dell" },
                { nameBranch: "Microsoft" }, { nameBranch: "Logitech" }, { nameBranch: "Akko" }, { nameBranch: "Mistel" }, { nameBranch: "HyperWork" },
                { nameBranch: "Monsgeek" }, { nameBranch: "Zuoya" }, { nameBranch: "XINMENG" }, { nameBranch: "Lofree" }, { nameBranch: "NuPhy" },
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu",
                    itemsSortButton: [
                        { name: "Keychron" }, { name: "IQUINIX" }, { name: "FL-ESPORT" }, { name: "Keydous" }, { name: "CIDOO" },
                        { name: "Newmen" }, { name: "James Donkey" }, { name: "Darmonshark" }, { name: "WEIKAV" }, { name: "Dell" },
                        { name: "Microsoft" }, { name: "Logitech" }, { name: "Akko" }, { name: "Mistel" }, { name: "HyperWork" },
                        { name: "Monsgeek" }, { name: "Zuoya" }, { name: "XINMENG" }, { name: "Lofree" }, { name: "NuPhy" },
                    ]
                }, 
                { 
                    nameButton: "Khoảng giá",
                    itemsSortButton: [
                        { name: "Dưới 1 triệu" }, { name: "Từ 1 triệu - 2tr" }, { name: "Từ 2tr - 3tr" }, { name: "Từ 3tr - 4tr" }, { name: "Trên 4tr" },
                    ]
                }, 
                { 
                    nameButton: "Màu sắc",
                    itemsSortButton: [
                        { name: "Đen" }, { name: "Xanh lá" }, { name: "Xám" }, { name: "Trắng" }, { name: "Tím" },
                        { name: "Xanh dương" }, { name: "Hồng" }, { name: "Cam" }, { name: "Đỏ" }, { name: "Vàng" },
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>
</style>