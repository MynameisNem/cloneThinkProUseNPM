const slugPath = "Cong-chuyen-doi"

export const congchuyenData = [
    {
        id: 20600,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/2/22/multipro6in1-0jpg",
        productName: "Cổng chuyển đổi Mazer USB-C Multimedia Pro 6-in-1",
        productPrice: "880.000",
        productDiscount: "-25%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    // có quà
    {
        id: 20601,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2020/12/28/HD22EGRAY_00.png",
        productName: "Cổng chuyển USB-C HyperDrive BAR 6 in 1",
        productPrice: "1.490.000",
        productDiscount: "-17%",
        productColor: "border: 1px solid #929191; background: #929191;",
    },
    // có quà
    {
        id: 20602,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/3/22/cong-chuyen-hyper-driver-thinkpro-1.png",
        productName: "Cổng chuyển HyperDriver Gen 2 6 in 1",
        productPrice: "1.390.000",
        productDiscount: "-33%",
        productColor: "border: 1px solid #5C5C5C; background: #5C5C5C;"
    },
    {
        id: 20603,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/9/cong-chuyen-doi-mazer-infinite-multimedia-8-in-1-usb-c-tablet-stand-thinkpro-nicespace.png",
        productName: "Cổng Chuyển Đổi Mazer Infinite Multimedia 8-in-1 USB-C & Tablet Stand",
        productPrice: "1.899.000",
        productDiscount: "-21%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    {
        id: 20604,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/8/18/cong-chuyen-doi-mazer-alu-usb-c-to-hdmi-4k60hz-adapte-thinkpro-nicespace.png",
        productName: "Cổng  Chuyển Đổi Mazer ALU USB-C to HDMI 4k/60Hz Adapter",
        productPrice: "399.000",
        productDiscount: "-23%",
        productColor: "border: 1px solid #716D6D; background: #716D6D;"
    },
    // có quà
    {
        id: 20605,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/backend/uploads/product/avatar/2021/2/22/multipro7in1-0jpg",
        productName: "Cổng chuyển đổi Mazer USB-C Multimedia Pro 7-in-1",
        productPrice: "1.090.000",
        productDiscount: "-27%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    // có quà
    {
        id: 20606,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/25/hub-lenovo-thinkplus-6-in-1-thinkpro.png",
        productName: "Cổng chuyển đổi Lenovo ThinkPlus 6 in 1",
        productPrice: "690.000",
        productDiscount: "-14%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    // có quà
    {
        id: 20607,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/10/25/hub-lenovo-thinkplus-4-in-1-thinkpro.png",
        productName: "Cổng chuyển đổi Lenovo ThinkPlus 4 in 1",
        productPrice: "360.000",
        productDiscount: "-28%",
        productColor: "border: 1px solid #000000; background: #000000;"
    }
].map(item => {
    return {
        ...item,
        slugPath: slugPath
    }
})