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
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText1 }}</strong></p>
                            </li>
                        </ul>
                        <p v-for="item in listPText" :key="item.textDescription1" class="pText">{{ item.textDescription1 }}</p>
                        <p class="pText"><em>Hoặc</em></p>
                        <p class="pText">{{ description2 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText2 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description3 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText3 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">Không áp dụng đổi trả với các sản phẩm:</p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort3 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort4 }}</em></p></li>
                        </ol>
                        <p class="pText"><em>Lưu ý</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort5 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort6 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li><p class="pText"><em>{{ liSort7 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort8 }}</em></p></li>
                        </ul>
                        <h3 class="text-justify text-h3">{{ description4 }}</h3>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText1 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description5 }}</p>
                        <p class="pText"><em>Hoặc</em></p>
                        <p class="pText">{{ description2 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText2 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description3 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort2 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText3 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description8 }}</p>
                        <!-- Tiếp tục ở đây -->
                        <!-- Dùng v-html tạo 1 mảng có title và content để dùng, để trang sau, trang này làm nốt theo kiểu truyền thống vì nhiều dữ liệu phải sửa -->

                        <h2 class="text-justify text-h2">{{ warrantyProduct2 }}</h2>
                        <h3 class="text-justify text-h3">{{ description1 }}</h3>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText1 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description9 }}</p>
                        <p class="pText">{{ description10 }}</p>
                        <p class="pText"><em>Hoặc</em></p>
                        <p class="pText">{{ description2 }}</p>
                        <p class="pText"><em>{{ note }}</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort1 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort9 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText2 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description11 }}</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText3 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description12 }}</p>
                        <p class="pText">Không áp dụng đổi trả với các sản phẩm:</p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort10 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort11 }}</em></p></li>
                        </ol>
                        <p class="pText"><em>Lưu ý</em></p>
                        <p class="pText"><em>Phí đổi trả khác nếu có: ThinkPro sẽ thông báo trực tiếp đến khách hàng về mức phí phải thu.</em></p>
                        <h3 class="text-justify text-h3">{{ description13 }}</h3>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText1 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">{{ description14 }}</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText2 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">ThinkPro không áp dụng đổi trả sản phẩm không lỗi theo nhu cầu của Quý khách hàng.</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><strong class="font-bold">{{ pText3 }}</strong></p>
                            </li>
                        </ul>
                        <p class="pText">Trong trường hợp sản phẩm gặp lỗi do người sử dụng, ThinkPro sẽ hỗ trợ chuyển sản phẩm tới Trung tâm Bảo hành hợp lệ. Quý Khách hàng sẽ chịu toàn bộ chi phí sửa chữa.</p>
                        <p class="pText">Không áp dụng đổi trả với các sản phẩm:</p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort10 }}</em></p></li>
                            <li><p class="pText"><em>Không đủ điều kiện bảo hành theo chính sách của hãng.</em></p></li>
                        </ol>
                        <p class="pText"><em>Lưu ý</em></p>
                        <ol class="liDecimal">
                            <li><p class="pText"><em>{{ liSort5 }}</em></p></li>
                            <li><p class="pText"><em>{{ liSort6 }}</em></p></li>
                        </ol>
                        <ul class="liDisc">
                            <li>
                                <p class="pText">Mua trực tiếp tại cửa hàng: Kể từ thời điểm bàn giao máy thành công</p>
                            </li>
                            <li>
                                <p class="pText">Mua từ xa: Thời điểm Quý Khách hàng nhận máy thành công từ đơn vị vận chuyển.</p>
                            </li>
                        </ul>

                        <h2 class="text-h2">{{ warrantyProduct3 }}</h2>
                        <p class="pText">Thay thế trực tiếp thành phần bị hư hỏng trên sản phẩm với linh kiện cùng loại, cùng màu sắc, v.v. Cụ thể:</p>
                        <p class="pText">3.1. Đổi sản phẩm mới nếu sản phẩm chính gặp lỗi:</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText">30 ngày đầu tiên kể từ ngày mua: Quý Khách hàng được miễn phí đổi trả</p>
                            </li>
                            <li>
                                <p class="pText">Sau 30 ngày đầu tới khi hết thời hạn bảo hành: ThinkPro thu phí 10% giá trị hóa đơn trên mỗi tháng kể từ ngày mua sản phẩm (VD: Tháng thứ hai kể từ ngày mua thu phí 10%, tháng thứ ba phí thu 20%, v.v.)</p>
                            </li>
                        </ul>
                        <p class="pText"><em>Lưu ý: Nếu không có sản phẩm chính để đổi mới, Quý Khách hàng sẽ được áp dụng chính sách Bảo hành có cam kết hoặc hoàn tiền với mức phí giảm 50%.</em></p>
                        <p class="pText">3.2. Đổi phụ kiện có cùng công năng mà ThinkPro đang kinh doanh nếu phụ kiện đi kèm sản phẩm chính gặp lỗi:</p>
                        <p class="pText">Phụ kiện đi kèm được đổi miễn phí trong vòng 12 tháng kể từ ngày mua sản phẩm chính. Hàng đổi trả sẽ là sản phẩm có công năng tương tự đang được kinh doanh tại ThinkPro.</p>
                        <p class="pText"><em>Lưu ý: Nếu không có phụ kiện công năng tương đương hoặc Quý Khách hàng không hài lòng với cách xử lý này, ThinkPro sẽ đưa sản phẩm tới TTBH để áp dụng chính sách bảo hành của hãng.</em></p>
                        <p class="pText">3.3. Lỗi phần mềm sẽ không được áp dụng đổi mới sản phẩm. Đội ngũ ThinkPro / TTBH hợp lệ sẽ giải quyết lỗi phần mềm trên sản phẩm giúp Quý Khách hàng.</p>
                        <p class="pText">3.4. Trường hợp Quý Khách hàng muốn đổi sản phẩm nguyên kiện: Bên cạnh áp dụng mức phí đổi trả đã nêu tại Mục 2.1, Quý Khách hàng sẽ trả thêm phí lấy sản phẩm mới nguyên kiện tương đương 20% giá trị hóa đơn.</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><em>Sản phẩm đổi trả phải giữ nguyên 100% hình thức ban đầu, đủ điều kiện bảo hành của hãng.</em></p>
                            </li>                            
                        </ul>
                        <p class="pText"><em>Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không sử dụng vì mục đích thương mại.</em></p>

                        <h2 class="text-justify text-h2">{{ warrantyProduct4 }}</h2>
                        <p class="pText">Áp dụng cho cả sản phẩm có lỗi và không có lỗi:</p>
                        <ul class="liDisc">
                            <li>
                                <p class="pText"><em>30 ngày đầu kể từ ngày mua: 80% giá trị hóa đơn</em></p>
                            </li>
                            <li>
                                <p class="pText"><em>Sau 30 ngày đầu tới hết tháng thứ 12: Trừ thêm 10% giá trị hóa đơn cho mỗi tháng.</em></p>
                            </li>
                            <li>
                                <p class="pText"><em>Sản phẩm đổi trả phải giữ nguyên 100% hình thức ban đầu, đủ điều kiện bảo hành của hãng.</em></p>
                            </li>
                            <li>
                                <p class="pText"><em>Sản phẩm hoàn trả phải đầy đủ hộp và phụ kiện.</em></p>
                            </li>
                        </ul>
                        <p class="pText">Nếu sản phẩm có hàng khuyến mãi đi kèm, Quý Khách hàng vui lòng hoàn trả cùng. Nếu thất lạc hàng khuyến mãi thì ThinkPro sẽ tính thêm phí theo mức giá niêm yết của vật phẩm đó.</p>
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
            warrantyProduct4: "IV. Hoàn tiền",
            description1: "30 ngày đầu kể từ thời điểm nhận máy",
            description2: "Nếu Quý Khách hàng muốn trả sản phẩm lỗi: ThinkPro sẽ kiểm tra tình trạng máy và thông báo trực tiếp về giá trị thu lại sản phẩm đến Quý Khách hàng.",
            description3: "Trong trường hợp sản phẩm không có lỗi nhưng Quý Khách hàng muốn trả lại / đổi sang sản phẩm khác: ThinkPro sẽ kiểm tra tình trạng máy và thông báo trực tiếp giá trị thu lại / chi phí đổi sang sản phẩm mới đến Quý Khách hàng.",
            description4: "Sau 30 ngày đầu cho tới hết thời hạn bảo hành",
            description5: "Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất sau 30 ngày đầu, ThinkPro sẽ hỗ trợ gửi máy tới TTBH hợp lệ để sửa chữa miễn phí.",
            description7: "Trong trường hợp sản phẩm gặp lỗi do người sử dụng, ThinkPro không hỗ trợ đổi trả, chỉ hỗ trợ sửa chữa/ thay thế linh kiện có tính phí.",
            description8: "15 ngày đầu kể từ thời điểm nhận máy",
            description9: "Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất trong 15 ngày đầu, ThinkPro sẽ hỗ trợ 1 đổi 1 sản phẩm mới với cùng tùy chọn màu và cấu hình như Quý Khách hàng đã chọn.",
            description10: "Trong trường hợp sản phẩm sử dụng để đổi trả không còn hàng, ThinkPro sẽ hoàn lại tiền 100% tới Quý Khách hàng.",
            description11: "ThinkPro sẽ kiểm tra tình trạng máy và thông báo trực tiếp về chi phí đổi sản phẩm đến Quý Khách hàng.",
            description12: "Trong trường hợp sản phẩm gặp lỗi do người sử dụng, ThinkPro sẽhỗ trợ sửa chữa và thay thế linh kiện có tính phí.",
            description13: "Sau 15 ngày đầu cho tới hết thời hạn bảo hành",
            description14: "Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất sau 15 ngày đầu, ThinkPro sẽ hỗ trợ gửi máy tới TTBH hợp lệ hoặc TTBH của ThinkPro để sửa chữa miễn phí.",
            liSort1: "Sản phẩm đổi trả phải được giữ nguyên 100% ngoại hình ban đầu, không trầy xước, cấn móp ở bất kỳ vị trí nào.",
            liSort2: "Sản phẩm đổi trả phải có đầy đủ vỏ hộp, giấy tờ liên quan và thỏa mãn điều kiện bảo hành của hãng.",
            liSort3: "Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...",
            liSort4: "Không đủ điều kiện bảo hành theo chính sách của hãng. Trong trường hợp này, ThinkPro hỗ trợ chuyển TTBH và khách hàng chịu phí sửa chữa.",
            liSort5: "Phí đổi trả khác nếu có: ThinkPro sẽ thông báo trực tiếp đến khách hàng về mức phí phải thu.",
            liSort6: "Thời điểm bắt đầu tính bảo hành:",
            liSort7: "Mua trực tiếp tại cửa hàng: Kể từ thời điểm bàn giao máy thành công",
            liSort8: "Mua từ xa: Thời điểm Quý Khách hàng nhận máy thành công từ đơn vị vận chuyển.",
            liSort9: "Sản phẩm đổi trả phải có đầy đủ vỏ hộp, giấy tờ liên quan và thỏa mãn điều kiện bảo hành của hãng / của ThinkPro.",
            liSort10: "Không còn giữ nguyên 100% ngoại hình ban đầu, có dấu hiệu va chạm hay vào nước.",
            liSort11: "Không đủ điều kiện bảo hành theo chính sách của hãng / của ThinkPro.",            
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