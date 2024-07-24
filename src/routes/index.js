import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import("../components/HelloWorld.vue")
    },
    {
        path: '/box_shadow', // 盒子阴影
        name: 'boxShaw',
        component: () => import("../components/box-shadow.vue")
    },
    {
        path: '/radius', // 旋转风车动画
        name: 'radius',
        component: () => import("../components/radius.vue")
    },
    {
        path: '/gradual_change', // 颜色渐变
        name: 'gradualChange',
        component: () => import("../components/gradual-change.vue")
    },
    {
        path: '/hair', // 发廊灯
        name: 'hair',
        component: () => import("../components/hair.vue")
    },
    {
        path: '/flash', // 闪光字体动画
        name: 'flash',
        component: () => import("../components/flash.vue")
    },
    {
        path: '/transition', // 过渡动画
        name: 'transition',
        component: () => import("../components/transition.vue")
    },
    {
        path: '/transform',
        name: 'transform',
        component: () => import("../components/transform.vue")
    },
    {
        path: '/sector', // 扇形动画导航
        name: 'sector',
        component: () => import("../components/sector.vue")
    },
    {
        path: '/time', // 时钟动画
        name: 'time',
        component: () => import("../components/time.vue")
    },
    {
        path: '/3Dtransform', // 3d变换
        name: '3Dtransform',
        component: () => import("../components/3Dtransform.vue")
    },
    {
        path: '/dice', // 3d骰子
        name: 'dice',
        component: () => import("../components/dice.vue")
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes
})

export default router