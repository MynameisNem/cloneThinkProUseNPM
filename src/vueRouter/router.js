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
import MarshallPromo from '@/components/promoProduction/marshall-promo.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
        key: 1
    },
    {
        path: '/Laptop',
        name: 'Laptop',
        component: Laptop,
        key: 2
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
    
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router