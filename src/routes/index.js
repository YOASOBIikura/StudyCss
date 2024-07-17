import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import("../components/HelloWorld.vue")
    },
    {
        path: '/box_shadow',
        name: 'boxShaw',
        component: () => import("../components/box-shadow.vue")
    },
    {
        path: '/radius',
        name: 'radius',
        component: () => import("../components/radius.vue")
    },
    {
        path: '/gradual_change',
        name: 'gradualChange',
        component: () => import("../components/gradual-change.vue")
    },
    {
        path: '/hair',
        name: 'hair',
        component: () => import("../components/发廊灯.vue")
    },
    {
        path: '/flash',
        name: 'flash',
        component: () => import("../components/flash.vue")
    },
    {
        path: '/transition',
        name: 'transition',
        component: () => import("../components/transition.vue")
    },
    {
        path: '/transform',
        name: 'transform',
        component: () => import("../components/transform.vue")
    },
    {
        path: '/sector',
        name: 'sector',
        component: () => import("../components/sector.vue")
    },
    {
        path: '/time',
        name: 'time',
        component: () => import("../components/time.vue")
    },
    {
        path: '/3Dtransform',
        name: '3Dtransform',
        component: () => import("../components/3Dtransform.vue")
    },
    {
        path: '/dice',
        name: 'dice',
        component: () => import("../components/dice.vue")
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes
})

export default router