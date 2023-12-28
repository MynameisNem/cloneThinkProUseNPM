<template>
    <button title="NEXT" @click="handleScrollNext" :class="extraClassesNext" :style="buttonStylesNext">
        <i class="h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1rem" height="1rem" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <use href="@/assets/iconSVG/buttonNext.svg#iconNext"></use>
            </svg>
        </i>
    </button>
</template>

<script>
export default {
    props: {
        scrollFunction: Function,
        extraClassesNext: {
            type: String,
            default: "" // Giá trị mặc định là chuỗi rỗng
        },
        scrollPositionNext: {
            type: Number, // hoặc kiểu dữ liệu phù hợp với scrollPositionCate
            required: false,
            default: 0
        },
        buttonStylesNext: {
            type: Object, // hoặc kiểu dữ liệu phù hợp với buttonStyles
            required: false,
        },
    },
    methods: {
        handleScrollNext() {
            // Gọi hàm xử lý scroll từ props
            this.scrollFunction();
        }
    }
}
</script>