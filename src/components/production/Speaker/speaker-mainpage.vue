<template>
    <main class="py-6 bg-[#F6F9FC]">
        <template>
            <BasePageRouterlink :interview="interview" :items-name="itemsName" :sort-button="sortButton"></BasePageRouterlink>
        </template>        
    </main>
</template>

<script>
import BasePageRouterlink from '../base-page-routerlink.vue';
export default {
    components: {
        BasePageRouterlink,
    },
    data() {
        return {
            interview: [
                {
                    pContent: "Âm thanh",
                    pText: "Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây",
                },
                {
                    pContent: "Tai nghe",
                    pText: "Tai nghe là một trong những phụ kiện quan trọng, được sử dụng ngày càng rộng rãi ở thời điểm hiện tại. Thiết bị này có thể hỗ trợ người dùng đa chức năng, đa mục đích, điển hình nhất chính là nghe nhạc và đàm thoại.",
                },     
                {
                    pContent: "Loa",
                    pText: "Loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng, ... Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp hoặc kết nối không dây..",
                },
                {
                    pContent: "Hello",
                    pText: "Loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng, ... Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp hoặc kết nối không dây..",
                },
            ],
            itemsName: [
                { 
                    nameBranch: "Tất cả",
                    to: "/Am-thanh"
                }, 
                { 
                    nameBranch: "Tai nghe",
                    to: "/Tai-nghe"
                }, 
                { 
                    nameBranch: "Loa",
                    to: "/Loa"
                }
            ],
            sortButton: [
                { nameButton: "Khoảng giá" }
            ],
        }
    },
    
}
</script>

<style scoped>
</style>