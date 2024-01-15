<template>
    <div v-show="showService" role="dialog" class="items-center flex justify-center dialog">
        <div class="dialog-overlay"></div>
        <div role="document" class="w-[800px] bg-white dialog-wrapper">
            <div class="py-[0.75rem] px-[1.5rem] pr-[60px]">
                <div class="text-xl leading-[150%] font-semibold">
                    Tại sao bạn nên chọn ThinkPro?
                </div>
                <button @click="changeService" class="dialog-close-button h-12 w-12 bg-white">
                    <i class="">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="1.5rem" height="1.5rem" preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24">
                            <use href="@/assets/iconSVG/navIconSVG/closeMenuNav.svg#closeMenuNav"></use>
                        </svg>
                    </i>
                </button>
            </div>
            <div class="overflow-y-auto flex-1 overflow-x-hidden">
                <div class="px-6">
                    <div>
                        <div contenteditable="false" translate="no" class="main-document space-y-6 text-[20px] leading-[150%]">
                            <div contenteditable="false" class="bg-gray-50 my-6 mt-0 flex justify-center whitespace-normal">
                                <div class="rounded overflow-hidden relative">
                                    <img :src="imgDoc1" alt="">
                                </div>
                            </div>
                            <h2 class="text-[28px] leading-10 font-extrabold">
                                <strong>Trải nghiệm tận tay</strong>
                            </h2>
                            <p>
                                ThinkPro là đơn vị tiên phong trên thị trường đầu tư hàng trưng bày số lượng lớn. 
                                Vì thế, trước khi đưa ra quyết định mua, khách hàng có thể trực tiếp trải nghiệm tận tay hàng trăm mẫu laptop và phụ kiện công nghệ hiện đại nhất, 
                                đi kèm với đó là thực hiện những tác vụ liên quan đến nhu cầu sử dụng của mình thông qua các phần mềm, công cụ đã được cài đặt sẵn trên máy.
                            </p>
                            <div class="whitespace-normal">
                                <div class="img-viewer">
                                    <img :src="imgDoc2" class="object-cover bottom-0 top-0 left-0 right-0 h-full w-full absolute">
                                </div>
                            </div>
                            <h2 class="text-[28px] leading-10 font-extrabold">
                                Tư vấn viên tận tâm
                            </h2>
                            <p>
                                Được đào tạo bài bản, chuyên nghiệp cả về tác phong nghề nghiệp lẫn chuyên môn nghiệp vụ, 
                                kèm theo đó là kỹ năng giao tiếp và xử lý tình huống cực kỳ nhạy bén, đội ngũ tư vấn của ThinkPro luôn đặt lợi ích của khách hàng lên hàng đầu, 
                                đề cao trách nhiệm giúp khách hàng lựa chọn sản phẩm phù hợp nhất với nhu cầu.
                            </p>
                            <div class="whitespace-normal">
                                <div class="img-viewer">
                                    <img :src="imgDoc3" class="object-cover bottom-0 top-0 left-0 right-0 h-full w-full absolute">
                                </div>
                            </div>
                            <h2 class="text-[28px] leading-10 font-extrabold">
                                Trung tâm bảo vệ khách hàng
                            </h2>
                            <p>
                                Chuyên trang “<a class="text-[#0065EE] hover:text-[#00008B]" target="_blank" rel="nofollow noopener" href="https://onwardtogether.one/listen"><strong>Trung tâm bảo vệ quyền lợi khách hàng</strong></a>” ra đời với sứ mệnh lắng nghe khách hàng nhiều hơn, 
                                thấu hiểu và có những hành động kịp thời để khách hàng luôn có cảm giác thoải mái và ấn tượng tốt về những trải nghiệm mua sắm tại ThinkPro. 
                                Mỗi đóng góp quý báu từ Quý khách hàng đều mang lại những giá trị to lớn, chuyển hoá thành động lực để đội ngũ ThinkPro nỗ lực hoàn thiện và tiến gần hơn đến sứ mệnh cao cả là phục vụ cộng đồng.
                            </p>
                            <div class="whitespace-normal">
                                <div class="img-viewer">
                                    <img :src="imgDoc4" class="object-cover bottom-0 top-0 left-0 right-0 h-full w-full absolute">
                                </div>
                            </div>
                            <h2 class="text-[28px] leading-10 font-extrabold">
                                Phục vụ đến 24 giờ
                            </h2>
                            <p>
                                Lấy khách hàng làm trung tâm, mong muốn khách hàng có những trải nghiệm trọn vẹn nhất, 
                                đội ngũ ThinkPro luôn sẵn lòng để phục vụ và hỗ trợ khách hàng tới 24 giờ với chất lượng dịch vụ nhanh chóng, 
                                tận tâm, kênh hỗ trợ đa dạng, kết nối mọi lúc mọi nơi: kênh bán hàng Offline mở cửa tới 22h (tuỳ chi nhánh); 
                                kênh bán hàng online, tổng đài hỗ trợ kỹ thuật, bảo hành phục vụ đến 24h mỗi ngày.
                            </p>
                            <p>
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgDoc1: "https://media-api-beta.thinkpro.vn/media/social/articles/2023/5/31/trai-nghiem-may-thuc-te-1-thinkpro.jpg",
            imgDoc2: "https://images.thinkgroup.vn/unsafe/1600x900/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/social/articles/2023/5/22/tu-van-vien-tan-tam-thinkpro.png",
            imgDoc3: "https://images.thinkgroup.vn/unsafe/1600x900/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/social/articles/2023/5/22/dsc-9847-thinkpro.JPG",
            imgDoc4: "https://images.thinkgroup.vn/unsafe/1600x900/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/social/articles/2023/5/22/phuc-vu-24-gio-thinkpro.JPG"
        }
    },
    props: {
        showService: Boolean,
        changeService: Function
    }
}
</script>

<style scoped>
.dialog {
    --t-dialog-margin-y: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 30;
}
.dialog-overlay {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    background-color: rgba(28, 31, 35, 0.75);
}
.dialog-wrapper {
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - var(--t-dialog-margin-y)*2);
    overflow: hidden;
    position: relative;
    z-index: 31;
}
.dialog-close-button {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0.5rem;
    top: 0.225rem;
    border-radius: 9999px;
}
.main-document {
    word-wrap: break-word;
    white-space: break-spaces;
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0;
    /* font-weight: 400; */ 
    word-break: break-word; 
}
.img-viewer {
    --tw-aspect-h: 9;
    --tw-aspect-w: 16;
    border-radius: 4px; 
    overflow: hidden;
    padding-top: calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
    position: relative;
}
</style>