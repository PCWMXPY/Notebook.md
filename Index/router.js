(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
const homerouter = {
    // template: function (resolve) {
    //     require(['../Pages/home.vue'], resolve);
    // }
    template: home.temperate,
    data: function () {
        return home.data;
    }
};
const newsrouter = {
    template: news.temperate,
    data: function () {
        return news.data;
    }
};
const aboutrouter = {
    template: about.temperate,
    data: function () {
        return about.data;
    }
};

const routes = [{
        path: '/home',
        component: homerouter
    },
    {
        path: '/news',
        component: newsrouter
    },
    {
        path: '/about',
        component: aboutrouter
    },
];
const router = new VueRouter({
    routes: routes
});
const app_router = new Vue({
    router
});
app_router.$mount('#main');