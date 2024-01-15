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
                        <h2 class="text-justify text-h2">{{ warrantyProduct1 }}</h2>
                        <h3 class="text-justify text-h3">{{ description1 }}</h3>
                        <ul class="list-disc liLeft">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText1 }}</strong></p>
                            </li>
                        </ul>
                        <p v-for="item in listPText" :key="item.textDescription1" class="pText">{{ item.textDescription1 }}</p>
                        <p class="pText"><em>Hoặc</em></p>
                        <p class="pText">{{ description2 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="list-decimal liLeft">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="list-disc liLeft">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText2 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description3 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="list-decimal liLeft">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="list-disc liLeft">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText3 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">Không áp dụng đổi trả với các sản phẩm:</p>
                        <ol class="list-decimal liLeft">
                            <li><p class="pText"><em>{{ liSort3 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort4 }}</em></p></li>
                        </ol>
                        <p class="pText"><em>Lưu ý</em></p>
                        <ol class="list-decimal liLeft">
                            <li><p class="pText"><em>{{ liSort5 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort6 }}</em></p></li>
                        </ol>
                        <ul class="list-disc liLeft">
                            <li><p class="pText"><em>{{ liSort7 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort8 }}</em></p></li>
                        </ul>
                        <h3 class="text-justify text-h3">{{ description4 }}</h3>
                        <!-- Tiếp tục ở đây -->

                        <h2 class="text-justify text-h2">{{ warrantyProduct2 }}</h2>
                        <h2 class="text-justify text-h2">{{ warrantyProduct3 }}</h2>
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
            serviceThinkpro: "Chính sách đổi trả - ThinkPro",
            note: "Lưu ý tới Quý Khách hàng:",
            warrantyProduct1: "I. Chính sách đổi trả laptop Chính hãng",
            warrantyProduct2: "II. Chính sách đổi trả laptop nhập khẩu / laptop đã qua sử dụng",
            warrantyProduct3: "III. Chính sách đổi trả phụ kiện",
            description1: "30 ngày đầu kể từ thời điểm nhận máy",
            description2: "Nếu Quý Khách hàng muốn trả sản phẩm lỗi: ThinkPro sẽ kiểm tra tình trạng máy và thông báo trực tiếp về giá trị thu lại sản phẩm đến Quý Khách hàng.",
            description3: "Trong trường hợp sản phẩm không có lỗi nhưng Quý Khách hàng muốn trả lại / đổi sang sản phẩm khác: ThinkPro sẽ kiểm tra tình trạng máy và thông báo trực tiếp giá trị thu lại / chi phí đổi sang sản phẩm mới đến Quý Khách hàng.",
            description4: "Sau 30 ngày đầu cho tới hết thời hạn bảo hành",
            liSort1: "Sản phẩm đổi trả phải được giữ nguyên 100% ngoại hình ban đầu, không trầy xước, cấn móp ở bất kỳ vị trí nào.",
            liSort2: "Sản phẩm đổi trả phải có đầy đủ vỏ hộp, giấy tờ liên quan và thỏa mãn điều kiện bảo hành của hãng.",
            liSort3: "Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...",
            liSort4: "Không đủ điều kiện bảo hành theo chính sách của hãng. Trong trường hợp này, ThinkPro hỗ trợ chuyển TTBH và khách hàng chịu phí sửa chữa.",
            liSort5: "Phí đổi trả khác nếu có: ThinkPro sẽ thông báo trực tiếp đến khách hàng về mức phí phải thu.",
            liSort6: "Thời điểm bắt đầu tính bảo hành:",
            liSort7: "Mua trực tiếp tại cửa hàng: Kể từ thời điểm bàn giao máy thành công",
            liSort8: "Mua từ xa: Thời điểm Quý Khách hàng nhận máy thành công từ đơn vị vận chuyển.",
            pText1: "Sản phẩm có lỗi do nhà sản xuất",
            pText2: "Sản phẩm không lỗi, đổi trả theo nhu cầu của Quý khách hàng",
            pText3: "Sản phẩm gặp lỗi do người sử dụng",
            listPText: [
                { textDescription1: "Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất trong 30 ngày đầu, ThinkPro sẽ hỗ trợ 1 đổi 1 sản phẩm mới với cùng tùy chọn màu và cấu hình như Quý Khách hàng đã chọn." },
                { textDescription1: "Trong trường hợp sản phẩm sử dụng để đổi trả không còn hàng, ThinkPro sẽ sắp xếp để Quý Khách hàng đổi sang một sản phẩm khác có giá trị tương đương sản phẩm lỗi." },
                { textDescription1: "Ngoài ra, Quý Khách hàng cũng có thể chọn đổi qua một sản phẩm với giá trị cao hơn và bù thêm chi phí chênh lệch." },
            ]
        }
    }
}
</script>