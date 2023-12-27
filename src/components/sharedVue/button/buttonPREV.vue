<template>
        <button title="PREV" @click="handleScrollPrev" :class="extraClassesPrev">
        <i class="h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1rem" height="1rem" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <use href="@/assets/iconSVG/buttonPrev.svg#iconPrev"></use>
            </svg>
        </i>
        </button>   
</template>

<script>
export default {
    props: {
        scrollFunction: Function,
        extraClassesPrev: {
            type: String,
            default: "" // Giá trị mặc định là chuỗi rỗng
        }
    },
    methods: {
        handleScrollPrev() {
            // Gọi hàm xử lý scroll từ props
            this.scrollFunction();
        }
    }
}
</script>