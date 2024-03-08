<template>
    <main class="py-6 bg-[#F6F9FC]">
        <BasePage 
            :p-content="pContent" 
            :p-text="pText" 
            :items-branch="itemsBranch"
            :sort-button="sortButton">
        </BasePage>
        <LaptopProductContainer></LaptopProductContainer>
    </main>
</template>
<!-- hleo 12312312313 -->
<!-- đoàn tuấn khang nguyễn đức tùng -->
<script>
import LaptopProductContainer from './laptop-product-container.vue'
import BasePage from '@/components/sharedVue/base-page/base-page.vue';
export default {
    components: {
        LaptopProductContainer,
        BasePage
    },
    data() {
        return {
            pContent: "Laptop",
            pText: "Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.",
            itemsBranch: [
                { nameBranch: "Dell" }, { nameBranch: "Lenovo" }, { nameBranch: "LG" }, { nameBranch: "Microsoft" }, { nameBranch: "Asus" },
                { nameBranch: "HP" }, { nameBranch: "Acer" }, { nameBranch: "GIGABYTE" }, { nameBranch: "Apple" }, { nameBranch: "VAIO" },
                { nameBranch: "MSI" },
            ],
            sortButton: [
                { 
                    nameButton: "Thương hiệu", 
                    itemsSortButton: [
                        { name: "Dell" }, { name: "Lenovo" }, { name: "LG" }, { name: "Microsoft" }, { name: "Asus" },
                        { name: "HP" }, { name: "Acer" }, { name: "GIGABYTE" }, { name: "Apple" }, { name: "VAIO" },
                        { name: "MSI" },
                    ]
                },
                { 
                    nameButton: "Nhu cầu", 
                    itemsSortButton: [
                        { name: "Văn phòng, học tập" }, { name: "2D Design" }, { name: "Quay dựng Video" }, 
                        { name: "3D Design" }, { name: "Gaming" }, { name: "Lập trình" },
                    ],
                }, 
                { 
                    nameButton: "Khoảng giá", 
                    itemsSortButton: [
                        { name: "Dưới 10tr " }, { name: "Từ 10tr - 15tr" }, { name: "Từ 15tr - 20tr" }, 
                        { name: "Từ 20tr - 25tr" }, { name: "Từ 25tr - 30tr" }, { name: "Từ 30tr - 40tr" },
                        { name: "Trên 40tr" },
                    ]
                },
                { 
                    nameButton: "Nguồn hàng", 
                    itemsSortButton: [
                        { name: "Chính hãng" }, { name: "Nhập khẩu" },
                    ]
                }, 
                { 
                    nameButton: "Tình trạng", 
                    itemsSortButton: [
                        { name: "Mới, Sealed" }, { name: "Mới, Full box" }, { name: "Outlet" }, 
                        { name: "Used" },
                    ]
                }, 
                { 
                    nameButton: "Màu sắc", 
                    itemsSortButton: [
                        { name: "Trắng" }, { name: "Đen" }, { name: "Hồng" }, { name: "Xám" }, 
                        { name: "Đỏ" }, { name: "Vàng" }, { name: "Xanh dương" }, { name: "Cam" }, 
                        { name: "Xanh lá" }, { name: "Tím" }, 
                    ]
                },
            ],
        }
    },
    
}
</script>