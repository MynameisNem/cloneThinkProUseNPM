<template>
  <header class="header bg-[#FFFFFF] border-b h-[80px]">
    <div class="container flex items-center h-full mr-auto ml-auto w-full">
      <router-link class="flex-shrink-0" to="/">
        <img class="h-8" :src="headerLogo" alt="logo">
      </router-link>
      <!-- Thanh search -->
      <div class="theInputSearch ml-6">
        <div class="-m-[6px] py-5 relative divSharedHeader">
          <div>
            <form action="search">
              <div class="px-4 py-3 divForm ring-1 leading-[150%] rounded-[100px] text-[#1C1F23] bg-[#F6F9FC]">
                <span class="mr-2">
                  <i class="text-[#6B7075] align-[-0.125rem]">
                    <img :src="searchSVG" alt="Search">
                  </i>
                </span>
                <input class="bg-transparent border-none flex-1 outline-none" type="text" required
                  placeholder="Tên sản phẩm, nhu cầu, hãng">
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- hết thanh search -->
      <!-- information header -->
      <div class="ml-auto flex space-x-3 items-center">
        <a v-for="headerInfor in headerInformation" :key="headerInfor.id" href="#"
          class="py-3 px-4 rounded-md items-center flex">
          <img :src="headerInfor.headerIcon" :alt="headerInfor.headerInfor">
          <span class="font-semibold ml-1">{{ headerInfor.headerInfor }}</span>
        </a>
      </div>
      <!-- hết information header -->
      <!-- giỏ hàng -->
      <div class="ml-auto">
        <div class="-m-[6px] divSharedHeader">
          <div class="inline-block relative">
            <!-- hiển thị số lượng hàng trong giỏ -->
            <div class="bg-[#FE3464] text-[#FFFFFF] rounded-2xl">
            </div>
            <!-- icon giỏ hàng -->
            <a href="#" class="shoping-cart">
              <i class="align-[-0.125em] inline-block">
                <img :src="shopingCart" alt="Giỏ Hàng">
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
    
<script>
export default {
  data() {
    return {
      headerLogo: "https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg",
      searchSVG: require("@/assets/iconSVG/headerIconSVG/search.svg"),
      shopingCart: require("@/assets/iconSVG/headerIconSVG/shopingCart.svg"),
      headerInformation: [
        {
          id: 0,
          headerIcon: require("@/assets/iconSVG/headerIconSVG/headerIconCall.svg"),
          headerInfor: "1900.63.3579"
        },
        {
          id: 1,
          headerIcon: require("@/assets/iconSVG/headerIconSVG/headerIconLocation.svg"),
          headerInfor: "Địa chỉ cửa hàng"
        },
        {
          id: 2,
          headerIcon: require("@/assets/iconSVG/headerIconSVG/headerIconComplain.svg"),
          headerInfor: "Khiếu nại"
        },
        {
          id: 3,
          headerIcon: require("@/assets/iconSVG/headerIconSVG/headerIconNews.svg"),
          headerInfor: "Tin công nghệ"
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divSharedHeader {
  border: 6px solid transparent;
}

.divForm {
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 0 1px #FFFFFF;
  display: inline-flex;
  position: relative;
  width: 350px;
  font-size: 14px;
}

.divForm:focus-within {
  box-shadow: 0 0 0 1px #007aff;
}
.shoping-cart {
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  background-color: #F6F9FC;
  border-radius: 9999px;
  margin-left: 1rem;
}
</style>
