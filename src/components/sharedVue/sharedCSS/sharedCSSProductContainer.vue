<template>
    <div></div>
</template>

<script>
    export default {
        name: 'SharedStylesContainer'
    }
</script>

<style>
.productContainer {
    grid-gap:0.75rem;
    display: grid;
    gap: 0.75rem;
}
.productItems {
    border-radius: 0.75rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
}
.productImage {
    --tw-aspect-h: 1;
    --tw-aspect-w: 1;
    position: relative;
}
.itemProductInfor {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    padding: 1rem;
}
.itemTitle {
    font-size: 14px;
    line-height: 150%;
    font-weight: 600;
}
.itemPrice {
    align-items: center;
    display: flex;
    margin-top: 0.25rem;
}
.tagItem {
    border-radius: .125rem;
    font-size: 10px;
    line-height: 14px;
    padding: 0px 2px;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    white-space: nowrap;
}
.colorProduct {
    height: .75rem;
    width: .75rem;
    border-radius: 2px;
}
.itemGift {
    font-size: 14px;
    line-height: 150%;
    text-decoration: underline;
    align-items: center;
    display: flex;
    margin-top: .75rem;
}
.buttonLoad {
    align-items: center;
    border-radius: 0.375rem;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    justify-content: center;
    height: 44px;
}
</style>