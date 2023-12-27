<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePageButton :p-content="pContent" :p-text="pText" :items-branch="itemsBranch" :sort-button="sortButton"></BasePageButton>
        <KeyboardProductContainer></KeyboardProductContainer>
    </main>
</template>

<script>
import BasePageButton from '../base-page-button.vue';
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
                { nameButton: "Thương hiệu" }, { nameButton: "Khoảng giá" }, { nameButton: "Màu sắc" },
            ],
        }
    }
}
</script>

<style scoped>
</style>