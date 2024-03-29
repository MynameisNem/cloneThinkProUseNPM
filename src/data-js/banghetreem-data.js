const slugPath = "Ban-ghe-tre-em"

export const banghetreemData = [
    {
        id: 20950,
        productImg: "https://images.thinkgroup.vn/unsafe/460x460/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/28/ghe-cong-thai-hoc-chong-gu-tre-em-biokids-thinkpro-nicespace-GuO.png",
        productName: "Ghế Công Thái Học Chống Gù Trẻ Em BioKids",
        productPrice: "1.990.000",
        productDiscount: "-29%",
        productColor: "border: 1px solid #5AD7F4; background: #5AD7F4;",
        productColor2: "border: 1px solid #FFB5C5; background: #FFB5C5;",
        productColor3: "border: 1px solid #8D8D8D; background: #8D8D8D;"
    },
].map(item =>{
    return {
        ...item,
        slugPath: slugPath
    }
})