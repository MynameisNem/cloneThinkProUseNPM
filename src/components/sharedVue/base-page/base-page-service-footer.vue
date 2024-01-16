<template>
    <div class="my-6 py-3 border-t border-b font-semibold text-[#6B7075]">
        <div class="flex items-center space-x-2">
            <span class="text-[#1C1F23]">{{ ownerPost }}</span>
            <svg fill="none" height="4" viewBox="0 0 4 4" width="4" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" fill="currentColor" r="2"></circle>
            </svg>
            <span>{{ timePost }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ownerPost: String,
        timePost: String
    }
}
</script>

<style>
.text-h2 {
    font-size: 28px;
    line-height: 40px;
    font-weight: 800;
    text-align: justify;
}
.text-h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    text-align: justify;
}
.pText {
    text-align: justify;
    font-weight: 400;
}
.liDecimal {
    list-style-type: decimal;
    padding-left: 3rem;
}
.liDisc {
    list-style-type: disc;
    padding-left: 3rem;
}
.textBold {
    font-weight: 700;
}
</style>