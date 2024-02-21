const slugPath = "Arm-man-hinh"

export const armmanhinhData = [
    {
        id: 20300,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/11/gia-do-man-hinh-human-motion-t9-pro-thinkpro-4.png",
        productName: "Arm màn hình Human Motion T9 Pro",
        productPrice: "1.790.000",
        productDiscount: "-10%",
        productColor: "border: 1px solid #DADDE0; background: #FFFFFF;"
    },
    // có quà
    {
        id: 20301,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/6/arm-man-hinh-t6-pro-thinkpro-den-01.png",
        productName: "Arm màn hình đôi Human Motion T6 Pro - Dual",
        productPrice: "1.150.000",
        productDiscount: "-3%",
        productColor: "border: 1px solid #DADDE0; background: #FFFFFF;"
    },
    // có quà
    {
        id: 20302,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/25/humanmotion-m8-2.png",
        productName: "Arm Màn Hình Human Motion M8",
        productPrice: "1.390.000",
        productDiscount: "-22%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    {
        id: 20303,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/15/dden-hyperwork.png",
        productName: "Arm màn hình HyperWork A1C",
        productPrice: "990.000",
        productDiscount: "-34%",
        productColor: "border: 1px solid #000000; background: #000000;"
    },
    {
        id: 20304,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/4/25/arm-man-hinh-human-motion-t9-pro-ii-thinkpro.png",
        productName: "Arm màn hình Human Motion T9 Pro II Series",
        productPrice: "1.850.000",
        productDiscount: "-7%",
        productColor: "border: 1px solid #B2AFAF; background: #B2AFAF;",
        productColor2: "border: 1px solid #607B8B; background: #607B8B;",
    },
    // có quà
    {
        id: 20306,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T9_01.png",
        productName: "Arm màn hình Human Motion T9",
        productPrice: "1.490.000",
        productDiscount: "-24%",
        productColor: "border: 1px solid #BEBEBE; background: #BEBEBE;"
    },
    // có quà
    {
        id: 20307,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T7-01.png",
        productName: "Arm màn hình Human Motion T7",
        productPrice: "1.290.000",
        productDiscount: "-30%",
        productColor: "border: 1px solid #000000; background: #000000;",
        productColor2: "border: 1px solid #DADDE0; background: #FFFFFF;",
    },
    {
        id: 20308,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2022/3/10/T2_01.png",
        productName: "Arm màn hình Human Motion T2",
        productPrice: "1.190.000",
        productDiscount: "-23%",
        productColor: "border: 1px solid #DADDE0; background: #FFFFFF;",
    },
].map(item => {
    return {
        ...item,
        slugPath: slugPath
    }
})