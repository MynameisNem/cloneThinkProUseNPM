<template>
    <main class="bg-[#F6F9FC] py-6">
        <div class="container bg-white overflow-hidden rounded-3xl mr-auto ml-auto">
            <section class="px-[108px] py-9">
                <h1 class="font-semibold text-[32px] leading-[44px]">{{ serviceThinkpro }}</h1>
                <BasePageServiceFooter :ownerPost="ownerPost" :timePost="timePost"></BasePageServiceFooter>
                <div class="mt-8 text-xl leading-[150%] italic">
                    <span class="mr-2 font-bold text-[#0065EE]">//</span>
                    {{ serviceThinkpro }}
                </div>
                <div class="mt-6">
                    <div class="text-[20px] leading-[150%] space-y-6">
                        <h2 class="text-justify text-h2">
                            <strong>{{ warrantyProduct1 }}</strong>
                        </h2>
                        <p class="text-justify">{{ descriptionWarranty }}</p>
                        <ul class="list-disc pl-12" v-for="item in listUl1" :key="item.liDescription1">
                            <li>{{ item.liDescription1 }}</li>
                        </ul>
                        <h2 class="text-justify text-h2">
                            <strong>{{ warrantyProduct2 }}</strong>
                        </h2>
                        <ul class="list-disc pl-12" v-for="item in listUl2" :key="item.liDescription2">
                            <li>{{ item.liDescription2 }}</li>
                        </ul>
                        <h2 class="text-justify text-h2">
                            <strong>{{ warrantyProduct3 }}</strong>
                        </h2>
                        <ul class="list-disc pl-12" v-for="item in listUl3" :key="item.liDescription3">
                            <li>{{ item.liDescription3 }}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import BasePageServiceFooter from '../sharedVue/base-page/base-page-service-footer.vue';
export default {
    components: {
        BasePageServiceFooter
    },
    data() {
        return {
            ownerPost: "Huyền",
            timePost: "10:46, 17/03/2023",
            serviceThinkpro: "Chính sách bảo hành - ThinkPro",
            warrantyProduct1: "Bảo hành Laptop",
            warrantyProduct2: "Bảo hành phụ kiện",
            warrantyProduct3: "Thời gian nhận bảo hành và trả bảo hành",
            descriptionWarranty: "Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ điều kiện bảo hành của nhà cung cấp, hãng sản xuất. Các trường hợp sau đây bị coi là vi phạm điều kiện bảo hành và không được bảo hành:",
            listUl1: [
                { liDescription1: "Sản phẩm bị tiêu hao trong quá trình sử dụng (Giới hạn độ bền của SSD, ăn mòn bàn phím, những tác động kèm theo từ môi trường bên ngoài, …)." },
                { liDescription1: "Các phần mềm được cung cấp kèm theo máy." },
                { liDescription1: "Sản phẩm hết thời hạn bảo hành (thời hạn bảo hành sản phẩm được ghi trên tem hoặc kiểm tra theo serial của sản phẩm trên website của chúng tôi, …)" },
                { liDescription1: "Không có tem bảo hành của Công ty/nhà phân phối/hãng sản xuất hoặc có nhưng tem bảo hành đó không hợp lệ (bị rách, bị tẩy xoá, sửa chữa, mờ không đọc được, bong/tróc, …)." },
                { liDescription1: "Số serial, mã vạch, thông số kỹ thuật trên sản phẩm không hợp lệ (bị mờ không đọc được, bị cạo, bị sửa, bị rách, bị bong/tróc, bị thay đổi)." },
                { liDescription1: "Sản phẩm bị lỗi do nguyên nhân bất khả kháng (lũ lụt, hoả hoạn, nguồn điện không bình thường, sai điện áp quy định …)." },
                { liDescription1: "Sản phẩm bị lỗi hình thức, biến dạng vật lý do bị rơi, va đập, vận chuyển/lắp đặt sai quy cách, hư hỏng do chuột bọ hoặc côn trùng xâm nhập, sản phẩm bị mốc, bị hoen rỉ, ẩm ướt, bị biến dạng như: trầy, xước, lồi, lõm, móp méo, ố vàng, mờ chữ, nứt, vỡ, viết chữ không tẩy được..." },
                { liDescription1: "Sản phẩm tự ý tháo dỡ, sửa chữa bởi các cá nhân hoặc kỹ thuật viên không được sự ủy quyền của ThinkPro ." },
            ],
            listUl2: [
                { liDescription2: "Bảo hành 1 năm 1 đổi 1 đối với Thẻ nhớ, USB, Chuột, Cáp, Sạc, Sạc dự phòng, Bàn phím, Đế tản nhiệt, Tai nghe (trừ Tai nghe JBL giá dưới 2.5 triệu), Thiết bị mạng, Ổ cứng, Bộ phát wifi không dây)" },
                { liDescription2: "Bảo hành 1 năm chính hãng đối với Phụ kiện nhập khẩu chính hãng Apple" },
                { liDescription2: "Bảo hành 6 tháng 1 đổi 1 đối với Tai nghe JBL giá dưới 2.5 triệu" },
                { liDescription2: "Không áp dụng bảo hành đối với Ba lô, Túi xách, Túi chống sốc, Túi chống nước, Tay cầm chơi game." },
            ],
            listUl3: [
                { liDescription3: "Thời gian nhận bảo hành: Từ 9h00-12h30 và từ 14h00-18h00 tất cả các ngày trong tuần, từ thứ Hai đến Chủ nhật." },
                { liDescription3: "Thời gian trả bảo hành: Từ 9h00-12h30 và từ 14h00-18h00 tất cả các ngày trong tuần, từ thứ Hai đến Chủ nhật." },
                { liDescription3: "Hỗ trợ khách hàng bảo hành: Trong thời gian bảo hành sản phẩm nếu phát sinh vấn đề bảo hành kéo dài thời gian cửa hàng sẽ hỗ trợ cung cấp cho Quý khách sản phẩm để sử dụng tạm thời trong thời gian chờ bảo hành (Hoặc khi khách có yêu cầu mượn sản phẩm)." },
            ]
        }
    }
}
</script>