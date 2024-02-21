import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/components/mainPage/mainPage.vue';
import Laptop from '@/components/production/Laptop/laptop-mainpage.vue';
import BanPhim from '@/components/production/Ban-phim/banphim-mainpage.vue';
import AmThanh from '@/components/production/Speaker/speaker-mainpage.vue';
import TaiNghe from '@/components/production/Speaker/Headphone/headphone-product-container.vue';
import Loa from '@/components/production/Speaker/Megaphone/megaphone-product-container.vue';
import GheCongThaiHoc from '@/components/production/Chair/chair-mainpage.vue';
import ArmManHinh from '@/components/production/Arm-manhinh/arm-manhinh-mainpage.vue';
import ChuotMaytinh from '@/components/production/Chuot-maytinh/chuot-maytinh-mainpage.vue';
import ManHinh from '@/components/production/Man-hinh/man-hinh-mainpage.vue';
import CongChuyen from '@/components/production/Cong-chuyen/cong-chuyen-mainpage.vue'
import PhanMem from '@/components/production/Phan-mem/phan-mem-mainpage.vue';
import NoiThat from '@/components/production/Noi-that/noi-that-mainpage.vue';
import PhuKienSetup from '@/components/production/Phukien-Setup/phukien-setup-mainpage.vue';
import GiaDoLaptop from '@/components/production/Gia-do-laptop/gia-do-laptop-mainpage.vue';
import BanNangHa from '@/components/production/Ban-nang-ha/ban-nang-ha-mainpage.vue';
import BanGheTreEm from '@/components/production/Ban-ghe-tre-em/ban-ghe-tre-em-mainpage.vue';
import GameConsole from '@/components/production/Game-console/game-console-mainpage.vue';
import BaloTui from '@/components/production/Balo-tui/balo-tui-mainpage.vue';
import RamMayTinh from '@/components/production/Ram/ram-mainpage.vue';
import OCung from '@/components/production/O-cung/o-cung-mainpage.vue';
import MarshallPromo from '@/components/promoProduction/Marshall/marshall-promo.vue';
import LaptopPromo from '@/components/promoProduction/Laptop/laptop-promo.vue';
import SpeakerPromo from '@/components/promoProduction/Speaker/speaker-promo.vue';
import BaloPromo from '@/components/promoProduction/Balo/balo-promo.vue';
import SoftwarePromo from '@/components/promoProduction/Phan-mem/software-promo.vue';
import LaptopGiaRePromo from '@/components/promoProduction/Laptop-gia-re/laptop-gia-re-promo.vue';
import WarrantyService from '@/components/service-footer/warranty-service.vue';
import ExchangeService from '@/components/service-footer/exchange-service.vue';
import DeliveryService from '@/components/service-footer/delivery-service.vue';
import ConfidentialService from '@/components/service-footer/confidential-service.vue';
import AccountingService from '@/components/service-footer/accounting-service.vue';
import QualityAssuranceService from '@/components/service-footer/quality-assurance-service.vue';
import ShoppingTutorialService from '@/components/service-footer/shopping-tutorial-service.vue';
import AboutMe from '@/components/service-footer/about-me.vue';
import DetailsProduct from '@/components/sharedVue/base-page/base-page-details.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
        key: 1
    },
    // {
    //     path: '/category/:slug',
    //     name: 'catategory',
    //     component: Category,
    // },
    // {    

    // {
    //     path: '/:category/:id',
    //     name: 'detailsProduct',
    //     component: test,
    // },
    {
        path: '/Laptop',
        name: 'Laptop',
        component: Laptop,
        key: 2,
    },    
    {
        path: '/Ban-phim',
        name: 'Ban-phim',
        component: BanPhim,
        key: 3
    },
    {
        path: '/Am-thanh',
        name: 'Am-thanh',
        component: AmThanh,
        key: 4
    },
    {
        path: '/Tai-nghe',
        name: 'Tai-nghe',
        component: TaiNghe,
        key: 5
    },
    {
        path: '/Loa',
        name: 'Loa',
        component: Loa,
        key: 6
    },
    {
        path: '/Ghe-cong-thai-hoc',
        name: 'Ghe-cong-thai-hoc',
        component: GheCongThaiHoc,
        key: 7
    },
    {
        path: '/Arm-Man-hinh',
        name: 'Arm-Man-hinh',
        component: ArmManHinh,
        key: 8
    },
    {
        path: '/Chuot-may-tinh',
        name: 'Chuot-may-tinh',
        component: ChuotMaytinh,
        key: 9
    },
    {
        path: '/Man-hinh',
        name: 'Man-hinh',
        component: ManHinh,
        key: 10
    },
    {
        path: '/Cong-chuyen-doi',
        name: 'Cong-chuyen-doi',
        component: CongChuyen,
        key: 11
    },
    {
        path: '/Phan-mem',
        name: 'Phan-mem',
        component: PhanMem,
        key: 12
    },
    {
        path: '/Noi-that',
        name: 'Noi-that',
        component: NoiThat,
        key: 13
    },
    {
        path: '/Phu-kien-&-Setup',
        name: 'Phu-kien-&-Setup',
        component: PhuKienSetup,
        key: 14
    },
    {
        path: '/Gia-do-laptop',
        name: 'Gia-do-laptop',
        component: GiaDoLaptop,
        key: 15
    },
    {
        path: '/Ban-nang-ha',
        name: 'Ban-nang-ha',
        component: BanNangHa,
        key: 16
    },
    {
        path: '/Ban-ghe-tre-em',
        name: 'Ban-ghe-tre-em',
        component: BanGheTreEm,
        key: 17
    },
    {
        path: '/Game-console',
        name: 'Game-console',
        component: GameConsole,
        key: 18
    },
    {
        path: '/Balo-Tui',
        name: 'Balo-Tui',
        component: BaloTui,
        key: 19
    },
    {
        path: '/Ram-may-tinh',
        name: 'Ram-may-tinh',
        component: RamMayTinh,
        key: 20
    },
    {
        path: '/O-cung',
        name: 'O-cung',
        component: OCung,
        key: 21
    },
    {
        path: '/Marshall-mon-qua-tuyet-voi-cho-nguoi-ban-yeu-thuong',
        name: 'Marshall-mon-qua-tuyet-voi-cho-nguoi-ban-yeu-thuong',
        component: MarshallPromo,
        key: 22
    },
    {
        path: '/Sale-tung-bung-mung-nam-moi',
        name: 'Sale-tung-bung-mung-nam-moi',
        component: LaptopPromo,
        key: 23
    },
    {
        path: '/Loa-di-dong-thang-3-xa-kho-cuc-nhieu',
        name: 'Loa-di-dong-thang-3-xa-kho-cuc-nhieu',
        component: SpeakerPromo,
        key: 24
    },
    {
        path: '/Xa-kho-balo-tui-bao-ve-do-cong-nghe',
        name: 'Xa-kho-balo-tui-bao-ve-do-cong-nghe',
        component: BaloPromo,
        key: 25
    },
    {
        path: '/Ctkm-giam-100k',
        name: 'Ctkm-giam-100k',
        component: SoftwarePromo,
        key: 26
    },
    {
        path: '/Ngay-vang-gia-soc',
        name: 'Ngay-vang-gia-soc',
        component: LaptopGiaRePromo,
        key: 27
    },
    {
        path: '/Chinh-sach-bao-hanh-thinkpro',
        name: 'Chinh-sach-bao-hanh-thinkpro',
        component: WarrantyService,
        key: 28
    },
    {
        path: '/Chinh-sach-doi-tra-thinkpro',
        name: 'Chinh-sach-doi-tra-thinkpro',
        component: ExchangeService,
        key: 29
    },
    {
        path: '/Chinh-sach-van-chuyen-thinkpro',
        name: 'Chinh-sach-van-chuyen-thinkpro',
        component: DeliveryService,
        key: 30
    },
    {
        path: '/Chinh-sach-bao-mat-thinkpro',
        name: 'Chinh-sach-bao-mat-thinkpro',
        component: ConfidentialService,
        key: 31
    },
    {
        path: '/Chinh-sach-thanh-toan-thinkpro',
        name: 'Chinh-sach-thanh-toan-thinkpro',
        component: AccountingService,
        key: 32
    },
    {
        path: '/Chinh-sach-kiem-hang-thinkpro',
        name: 'Chinh-sach-kiem-hang-thinkpro',
        component: QualityAssuranceService,
        key: 33
    },
    {
        path: '/Huong-dan-mua-hang-online-thinkpro',
        name: 'Huong-dan-mua-hang-online-thinkpro',
        component: ShoppingTutorialService,
        key: 34
    },
    {
        path: '/Ve-chung-toi',
        name: 'Ve-chung-toi',
        component: AboutMe,
        key: 35
    },
    {
        path: '/:slug/:id',
        name: 'detailsProduct',
        component: DetailsProduct
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

router.beforeEach((to, from, next) => {
    // Cuộn lên đầu trang trước khi chuyển trang
    window.scrollTo(0, 0);
    next();
});

export default router