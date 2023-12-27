<template>
    <div></div>
</template>

<script>
export default {
    name: 'SharedStylesMainpage'
}
</script>

<style>
.category-overview {
    border-radius: 1rem;
    overflow: hidden;
}
.overview {
    color: inherit;
    text-decoration: inherit; 
}
.div-overview {
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
}
.div-item {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: 12px;
    line-height: 150%;
    white-space: nowrap;
}

.items-filter {
    border: 6px solid transparent;
}
.button-filter {
    border-radius: 0.5rem;
    padding: 0.75rem;
    transition: background-color 0.2 ease;
    align-items: center;
    display: flex;
}
.text {
    display: block;
    font-size: 13px;
    font-weight: 600;
    line-height: 150%;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sortButton {
    border: 6px solid transparent;
    margin: -6px
}
.buttonPREVClassMainpage {
    opacity: 0.4;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.75rem; /* Hoặc kích thước mong muốn */
    width: 2.75rem; /* Hoặc kích thước mong muốn */
}
.buttonNEXTClassMainpage {
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.75rem; /* hoặc kích thước mong muốn */
    width: 2.75rem; /* Hoặc kích thước mong muốn */
}
</style>