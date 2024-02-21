const slugPath = "Phan-mem"

export const phanmemData = [
    {
        id: 20700,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/28/microsoft-365-family-ban-quyen-tron-bo-office-word-exel-powerpoint-cho-6-nguoi-dung-thinkpro.jpg",
        productName: "Microsoft 365 Family bản quyền (Trọn bộ Office: Word, Exel, PowerPoint - Cho 6 người dùng)",
        productPrice: "1.490.000",
        productDiscount: "-25%",
    },
    // có quà
    {
        id: 20701,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/28/microsoft-365-personal-ban-quyen-tron-bo-office-word-exel-powerpoint-thinkpro.jpg",
        productName: "Microsoft 365 Personal bản quyền (Trọn bộ Office: Word, Exel, PowerPoint)",
        productPrice: "990.000",
        productDiscount: "-34%",
    },
    // có quà
    {
        id: 20702,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/8/10/office-home-student-2021-thinkpro-01.jpeg",
        productName: "Microsoft Office Home & Student",
        productPrice: "2.190.000",
        productDiscount: "-27%",
    },
].map(item => {
    return {
        ...item,
        slugPath: slugPath
    }
})