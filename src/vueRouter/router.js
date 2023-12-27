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
import PhanMem from '@/components/production/Phan-mem/phan-mem-mainpage.vue'



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
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router